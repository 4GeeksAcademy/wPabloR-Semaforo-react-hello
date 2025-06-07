import React, { useState } from "react";

const Semaforo = () => {

    const [color, setColor] = useState(`red`);

    const lightStyle = (currentColor) => ({ 
        backgroundColor: color === currentColor ? currentColor : `gray`,
        width: `60px`,
        height: `60px`,
        borderRadius: `50%`,
        margin: `10px auto`,
        cursor: `pointer`,
        transition: "background-color 0.3s ease",
        boxShadow: color === currentColor ? `0 0 15px ${currentColor}` : "none",
    });


    return (
    <div
      style={{
        width: "100px",
        padding: "10px",
        background: "#222",
        borderRadius: "10px",
        margin: "auto",
        marginTop: `20px`
      }}
    >
            <div style={lightStyle(`red`)} onClick={() => setColor(`red`)}></div>
            <div style={lightStyle(`orange`)} onClick={() => setColor(`orange`)}></div>
            <div style={lightStyle(`green`)} onClick={() => setColor(`green`)}></div>

        </div>
    );
};

export default Semaforo