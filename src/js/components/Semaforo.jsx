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

    const randomColor = () => {
        let colors = [`red`, `orange`, `green`];

        return colors[Math.floor(Math.random() * colors.length)]
    };
    


    return (
        <div>

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

            <button className="btn btn-primary m-5" onClick={() => setColor(randomColor())}>Random color</button>

        </div>
    );
};

export default Semaforo