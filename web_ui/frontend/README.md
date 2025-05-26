# ECS 171 Grade Predictor Frontend

Built with Vite + React

## Setup
1. Install node, npm, docker (commands vary by OS)
2. Install packages with `npm install`

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

### Run **ONLY** frontend locally
- Use `npm run dev`
- note that fetch routing relies on hostname, will not work properly this way

### Build/Run **ONLY** frontend docker container
If using Bash, you can build + run with `./build_run.sh`. Otherwise:

- Build: `docker build -t <NAME> .`
- Run: `docker run -p <PORT>:80 <NAME>`

*choose name and port as appropriate*