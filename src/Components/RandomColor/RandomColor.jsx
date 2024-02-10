import React, { useEffect, useState } from 'react';
import "./RandomColor.css"

const RandomColor = () => {

    const [typeOfColor, setTypeOfColor] = useState("hex");
    const [color, setColor] = useState("#000000");

    const generateRandomhexColor = () => {
        const arr = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
        let hexColor = "#";
        for(let i = 1; i <= 6; i++) {
            hexColor += arr[Math.floor(Math.random()* arr.length)];
        }
        return hexColor
    };

    const generateRandomRgbcolor = () => {
        const randomNum =  () => Math.floor(Math.random() * 255);
        let RgbColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
        return RgbColor;
    }

    const handleCreateRandomHexColor = () => {
        setColor(generateRandomhexColor());
    };

    const handleCreateRandomRgbColor = () => {
        setColor(generateRandomRgbcolor());
    };

    useEffect(() => {
        typeOfColor === "hex" ? handleCreateRandomHexColor() : 
        handleCreateRandomRgbColor();
    }, [typeOfColor])

    return (
        <div className="random-color-container"
        style={{background: color}}>
            <div className="controlButtons">
                <button onClick={() => setTypeOfColor("hex")}>Create Hex Color</button>
                <button onClick={() => setTypeOfColor("rgb")}>Create Rgb Color</button>
                <button onClick={typeOfColor === "hex" ? handleCreateRandomHexColor : 
                handleCreateRandomRgbColor}>Generate Random Color</button>
            </div>
            <div className='random-color-content'>
                <h3>{typeOfColor === "hex" ? "HEX color" : "RGB color"}</h3>
                <h1>{color}</h1>
            </div>
        </div>
    );
}

export default RandomColor;
