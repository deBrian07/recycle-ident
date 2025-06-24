from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app =FastAPI(title='Recycle API', version='0.1.0')
app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://localhost:5173'],
    allow_methods=['*'],
    allow_headers=['*']
)

@app.get("/health")
async def health():
    return {"stauts": "ok", 'emoji': "💙"}