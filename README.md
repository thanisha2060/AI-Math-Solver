# 🧠 AI Sketch & Math Assistant

An AI-powered web application that analyzes hand-drawn mathematical expressions, geometric figures, and simple sketches using AI Vision.

## 📌 Project Overview

AI Sketch & Math Assistant allows users to draw mathematical expressions, geometric shapes, and simple objects on a digital canvas. The application analyzes the drawing using an AI Vision model and provides solutions, calculations, or descriptions based on the detected content.

---

## ✨ Features

* 🎨 Interactive drawing canvas
* ➕ Solves basic mathematical expressions
* 📐 Detects geometric shapes
* 📏 Reads labeled measurements
* 📊 Calculates area, perimeter, circumference, and volume (when sufficient measurements are provided)
* 🚗 Identifies simple hand-drawn objects (Car, House, Tree, Phone, etc.)
* 🤖 AI-powered image analysis
* 🌐 Responsive web interface

---

## 🛠️ Technologies Used

### Frontend

* React.js
* HTML5
* CSS3
* JavaScript
* Vite

### Backend

* Python
* Flask
* Flask-CORS

### AI

* OpenRouter Vision API
* OpenAI Python SDK

---

## 📂 Project Structure

```
AI-Math-Solver/
│
├── backend/
│   ├── app.py
│   ├── config.py
│   ├── services/
│   └── uploads/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/thanisha2060/AI-Math-Solver.git
cd AI-Math-Solver
```

### Backend Setup

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🚀 How to Use

1. Start both the backend and frontend.
2. Open the frontend in your browser.
3. Draw a mathematical expression, geometric figure, or object.
4. Click solve
5. .
6. View the AI-generated solution or description.

---

## 📸 Sample Use Cases

* Solve: `2 + 2`
* Detect a rectangle and calculate its area.
* Identify a hand-drawn car or house.
* Recognize geometric figures and measurements.

---

## 🔮 Future Enhancements

* Handwritten algebra recognition
* OCR integration
* Symbolic algebra solver
* PDF report generation
* User authentication
* History of solved drawings
* Voice input support

---

## 👩‍💻 Author

**Thanisha Kanchan**

MCA Student

---

## 📄 License

This project is developed for academic and educational purposes.
