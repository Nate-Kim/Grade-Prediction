# ML stuff
import pandas as pd
import pickle

# Server stuff
from fastapi import FastAPI#, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
#from fastapi.responses import JSONResponse
from pydantic import BaseModel, conint
from collections import defaultdict
import time
from fastapi import HTTPException

# Validate input
class InputParams(BaseModel):
    failures: conint(ge=0, le=3)
    absences: conint(ge=0, le=93)
    goout: conint(ge=0, le=5)
    age: conint(ge=15, le=22)
    health: conint(ge=1, le=5)
    freetime: conint(ge=1, le=5)
    studytime: conint(ge=1, le=10)
    Medu: conint(ge=0, le=4)

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], #TODO check this, maybe security issue
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Rate limit compute
rate_limit_store = defaultdict(list)
RATE_LIMIT = 10 # req per IP
WINDOW = 60 # reset in sec

def check_rate_limit(ip: str) -> bool:
    now = time.time()
    request_times = rate_limit_store[ip]

    recent_requests = []
    for timestamp in request_times:
        if now - timestamp < WINDOW:
            recent_requests.append(timestamp)

    rate_limit_store[ip] = recent_requests

    if len(rate_limit_store[ip]) >= RATE_LIMIT:
        return False
    
    rate_limit_store[ip].append(now)

    return True

##################################################
polyreg_loaderr = None
rforest_loaderr = None
mlp_loaderr = None
# Load models here

# Polynomial Regression
try:
    with open("models/polynomial_regression.pkl", "rb") as f:
        polyreg_bundle = pickle.load(f)
    polyreg = polyreg_bundle["model"]
    polyreg_feat = polyreg_bundle["poly_features"]
except Exception as e:
    polyreg_loaderr = str(e)

# Random Forest
try:
    with open("models/random_forest.pkl", "rb") as f:
        rforest = pickle.load(f)
    with open("models/random_forest_columns.pkl", "rb") as f:
        rforest_col = pickle.load(f)
except Exception as e:
    rforest_loaderr = str(e)

# MLP
try:
    with open("models/mlp.pkl", "rb") as f:
        mlp = pickle.load(f)
except Exception as e:
    mlp_loaderr = str(e)

##################################################
# POSTs
@app.post("/predict/polyreg")
async def predict_polyreg(inputs: InputParams):
    if polyreg_loaderr:
        raise HTTPException(status_code=503, detail=f"Model not available")

    data = pd.DataFrame([inputs.model_dump()])

    poly_data = polyreg_feat.transform(data)
    result = round(polyreg.predict(poly_data)[0], 1)

    return {"model": "polyreg", "result": result}

@app.post("/predict/rforest")
async def predict_rforest(inputs: InputParams):
    if rforest_loaderr:
        raise HTTPException(status_code=503, detail=f"Model not available")
    
    data = pd.DataFrame([inputs.model_dump()])

    # One-hot encode, align cols
    rf_encoded = pd.get_dummies(data, drop_first=True)
    rf_encoded = rf_encoded.reindex(columns=rforest_col, fill_value=0)

    result = round(rforest.predict(rf_encoded)[0], 1)

    return {"model": "rforest", "result": result}

@app.post("/predict/mlp")
async def predict_mlp(inputs: InputParams):
    if mlp_loaderr:
        raise HTTPException(status_code=503, detail=f"Model not available")

    data = pd.DataFrame([inputs.model_dump()])

    result = round(mlp.predict(data)[0], 1)

    return {"model": "mlp", "result": result}
