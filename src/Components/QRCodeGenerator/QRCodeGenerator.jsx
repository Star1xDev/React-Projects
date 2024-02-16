import React, { useState } from 'react';
import "./QRCodeGenerator.css"
import QRCode from 'react-qr-code';

const QRCodeGenerator = () => {

    const [input, setInput] = useState("");
    const [QRCodeValue, setQRCodeValue] = useState("");

    const handleGenerateQRCode = () => {
        setQRCodeValue(input)
        setInput("");
    }

    return (
        <div className="QRCode-container">
            <h1>QR Code Generator</h1>
            <div className='QRCode-input'>
                <input onChange={(e) => setInput(e.target.value)}
                value={input}
                type="text" placeholder='Enter Text or Url' />
                <button onClick={handleGenerateQRCode}>Generate</button>
            </div>
            <div className='QRCode-image'>
                <QRCode value={QRCodeValue} />
            </div>
        </div>
    );
}

export default QRCodeGenerator;
