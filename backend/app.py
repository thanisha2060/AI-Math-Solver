from flask import Flask, request
from flask_cors import CORS
import os
import base64

from services.ai_service import solve_math

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = "uploads"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@app.route("/")
def home():
    return {
        "status": "success",
        "message": "AI Math Solver Backend Running 🚀"
    }


@app.route("/solve", methods=["POST"])
def solve():

    data = request.get_json()

    image = data["image"]

    image = image.split(",")[1]

    image_bytes = base64.b64decode(image)

    image_path = os.path.join(
        UPLOAD_FOLDER,
        "equation.png"
    )

    with open(image_path, "wb") as file:
        file.write(image_bytes)

    answer = solve_math(image_path)

    return {
        "success": True,
        "answer": answer
    }


if __name__ == "__main__":
    app.run(debug=True)