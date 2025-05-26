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
    with open("model1.pkl", "rb") as f:
        model1 = pickle.load(f)
    with open("model2.pkl", "rb") as f:
        model2 = pickle.load(f)
    with open("model3.pkl", "rb") as f:
        model3 = pickle.load(f)
except FileNotFoundError:
    #TODO change this, add error handling
    # Dummy for now 
    model1 = lambda x: [sum(x[0])]
    model2 = lambda x: [max(x[0])]
    model3 = lambda x: [min(x[0])]

##################################################
# POSTs
@app.post("/predict/model1")
async def predict_model1(inputs: InputParams):
    input_data = [[inputs.param1, inputs.param2, inputs.param3]]
    result = model1(input_data)[0]
    return {"model": "model1", "result": result}

@app.post("/predict/model2")
async def predict_model2(inputs: InputParams):
    input_data = [[inputs.param1, inputs.param2, inputs.param3]]
    result = model2(input_data)[0]
    return {"model": "model2", "result": result}

@app.post("/predict/model3")
async def predict_model3(inputs: InputParams):
    input_data = [[inputs.param1, inputs.param2, inputs.param3]]
    result = model3(input_data)[0]
    return {"model": "model3", "result": result}
