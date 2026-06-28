import { useRef, useEffect, useState } from "react";
import "./DrawingCanvas.css";
import API from "../api/api";

function DrawingCanvas({ setAnswer }) {

    const canvasRef = useRef(null);

    const [drawing, setDrawing] = useState(false);
    const [brushColor, setBrushColor] = useState("#000000");
    const [brushSize, setBrushSize] = useState(3);

    useEffect(() => {

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        ctx.lineCap = "round";
        ctx.lineWidth = brushSize;
        ctx.strokeStyle = brushColor;

    }, []);

    useEffect(() => {

        const ctx = canvasRef.current.getContext("2d");

        ctx.lineWidth = brushSize;
        ctx.strokeStyle = brushColor;

    }, [brushColor, brushSize]);

    const startDrawing = (e) => {

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        ctx.beginPath();
        ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);

        setDrawing(true);

    };

    const draw = (e) => {

        if (!drawing) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        ctx.stroke();

    };

    const stopDrawing = () => {

        setDrawing(false);

    };

    const clearCanvas = () => {

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        setAnswer("Draw something and click Solve.");

    };

    const solveEquation = async () => {

        try {

            const canvas = canvasRef.current;

            const image = canvas.toDataURL("image/png");

            setAnswer("🤖 AI is analyzing your drawing...");

            const response = await API.post("/solve", {
                image: image
            });

            setAnswer(response.data.answer);

        } catch (error) {

            console.error(error);

            setAnswer("❌ Failed to connect to backend.");

        }

    };

    return (

        <div className="drawing-container">

            {/* Toolbar */}

            <div className="toolbar">

                <div className="tool-item">

                    <label>🎨 Color</label>

                    <input
                        type="color"
                        value={brushColor}
                        onChange={(e) => setBrushColor(e.target.value)}
                    />

                </div>

                <div className="tool-item">

                    <label>🖊 Brush Size</label>

                    <input
                        type="range"
                        min="1"
                        max="20"
                        value={brushSize}
                        onChange={(e) => setBrushSize(Number(e.target.value))}
                    />

                    <span>{brushSize}px</span>

                </div>

            </div>

            {/* Canvas */}

            <canvas
                ref={canvasRef}
                width={900}
                height={400}
                className="drawing-canvas"
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
            />

            {/* Buttons */}

            <div className="button-group">

                <button
                    className="clear-btn"
                    onClick={clearCanvas}
                >
                    🗑 Clear Canvas
                </button>

                <button
                    className="solve-btn"
                    onClick={solveEquation}
                >
                    🤖 Solve
                </button>

            </div>

        </div>

    );

}

export default DrawingCanvas;