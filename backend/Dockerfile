FROM python:3.10-slim-bookworm

WORKDIR /app

RUN pip install --no-cache-dir fastapi uvicorn[standard] python-multipart

COPY app ./app

EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]