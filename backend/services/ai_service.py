import base64
from PIL import Image
from openai import OpenAI
from config import OPENROUTER_API_KEY

client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=OPENROUTER_API_KEY,
)

PROMPT = """
You are an AI Math and Sketch Assistant.

Analyze the uploaded image carefully.

First decide whether the image contains:

1. A mathematical expression
2. A geometric shape
3. A sketch or object

----------------------------------------

If it is a mathematical expression:

Examples:
2+2
15-7
12×4
100÷5
5²
√16

Solve it step by step.

Return only:

Equation:
<recognized equation>

Steps:
<solution>

Final Answer:
<answer>

----------------------------------------

If it is a geometric figure:

Identify the shape.

Read any measurements such as:

Length
Width
Height
Radius
Diameter
Side

If enough information is available, calculate:

• Area
• Perimeter
• Circumference
• Volume (if applicable)

Return only:

Shape:
...

Measurements:
...

Result:
...

----------------------------------------

If it is a sketch or object:

Identify the object.

Examples:

Car
House
Tree
Bike
Phone
Bottle
Chair
Clock

Mention:

Object:
...

Shapes Used:
...

Measurements Found:
...

Short Description:
...

----------------------------------------

If the drawing is unclear,

say:

"The drawing is not clear enough to identify accurately."

Do not guess.

Keep the response short and simple.

Never produce unnecessary explanations.
"""
def solve_math(image_path):
    try:

        # Improve image quality
        img = Image.open(image_path)

        img = img.resize(
            (img.width * 2, img.height * 2),
            Image.LANCZOS
        )

        img.save(image_path)

        with open(image_path, "rb") as f:
            image_base64 = base64.b64encode(
                f.read()
            ).decode("utf-8")

        response = client.chat.completions.create(

            model="meta-llama/llama-3.2-11b-vision-instruct",

            messages=[
                {
                    "role": "user",
                    "content": [
                        {
                            "type": "text",
                            "text": PROMPT
                        },
                        {
                            "type": "image_url",
                            "image_url": {
                                "url": f"data:image/png;base64,{image_base64}"
                            }
                        }
                    ]
                }
            ],

            max_tokens=1200,
            temperature=0.2

        )

        return response.choices[0].message.content

    except Exception as e:
        return f"❌ AI Error:\n{str(e)}"