from fastapi import FastAPI#, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
#from fastapi.responses import JSONResponse
from pydantic import BaseModel, conint
from collections import defaultdict
import time
import pickle

# Validate input
class InputParams(BaseModel):
    param1: conint(ge=0, le=100)
    param2: conint(ge=0, le=100)
    param3: conint(ge=0, le=100)

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
# Load models here
try:
    # Polynomial Regression
    with open("models/polynomial_regression.pkl", "rb") as f:
        polyreg = pickle.load(f)

    # Random Forest
    with open("models/random_forest.pkl", "rb") as f:
        rforest = pickle.load(f)
    with open("models/random_forest_columns.pkl", "rb") as f:
        rforest_col = pickle.load(f)

    # MLP
    with open("models/mlp.pkl", "rb") as f:
        mlp = pickle.load(f)

except FileNotFoundError:
    #TODO change this, add error handling
    # Dummy for now 
    polyreg = lambda x: [sum(x[0])]
    rforest = lambda x: [max(x[0])]
    mlp = lambda x: [min(x[0])]

##################################################
# POSTs
@app.post("/predict/polyreg")
async def predict_polyreg(inputs: InputParams):
    input_data = [[inputs.param1, inputs.param2, inputs.param3]]
    result = polyreg(input_data)[0]
    return {"model": "polyreg", "result": result}

@app.post("/predict/rforest")
async def predict_rforest(inputs: InputParams):
    input_data = [[inputs.param1, inputs.param2, inputs.param3]]
    result = rforest(input_data)[0]
    return {"model": "rforest", "result": result}

@app.post("/predict/mlp")
async def predict_mlp(inputs: InputParams):
    input_data = [[inputs.param1, inputs.param2, inputs.param3]]
    result = mlp(input_data)[0]
    return {"model": "mlp", "result": result}
