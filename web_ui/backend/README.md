# # ECS 171 Grade Predictor Frontend

Built with python using:
- `pydantic` does input validation
- `fastapi` does rate limiting
- `uvicorn` as ASGI server

## Setup
1. Install python, docker (commands vary by OS)
2. Install dependencies with `pip install -r requirements.txt`

## Add/Modify Models
- Models for backend are stored in `models/`
- Dump models from your notebook using [Pickle](https://docs.python.org/3/library/pickle.html) format, for example:

```python
with open("model1.pkl", "wb") as f:
    pickle.dump(model, f)
```
- move the dumped models to `models/`, make sure name coincides with 

## Build and Run Everything
- use the docker compose file located one directory out. See corresponding README for instructions

```
group_project/
├─ web_ui/
│  ├─ frontend/
│  ├─ backend/
│  ├─ docker_compose.yml
│  └─ README.md <== THIS ONE
└─ stuff...
```

### Run **ONLY** backend locally
- Use `uvicorn main:app --reload`
- note that fetch routing relies on hostname, will not work properly this way

### Build/Run **ONLY** backend docker container
- Build: `docker build -t <NAME> .`
- Run: `docker run -p <PORT>:80 <NAME>`

*choose name and port as appropriate*