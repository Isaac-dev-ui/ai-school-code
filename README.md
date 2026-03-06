# AI Code School (Elite MVP)

A mini W3-style learning platform with:
- Lessons + search
- Monaco code editor
- "Try it" runner (HTML/CSS/JS in iframe)
- Python execution via sandbox service (timeout)
- Optional AI tutor endpoint

## Local Dev (non-docker)
1) Install deps:
- `npm i -w apps/runner`
- `npm i -w apps/web`

2) Run runner:
- `npm run dev:runner`

3) Run web:
- `npm run dev`

Open: http://localhost:3000

## Docker
- `docker compose up --build`
Open: http://localhost:3000
