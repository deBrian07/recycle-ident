import json, random
from fastapi import APIRouter, UploadFile, File

router = APIRouter()

with open("app/stubs/predictions.json", encoding="utf-8") as f:
    STUBS = json.load(f)

@router.post("/predict")
async def predict(file: UploadFile = File(...)):
    print("File Received")
    pick = random.choice(STUBS).copy()
    pick['confidence'] = round(random.random(), 2)
    return pick
