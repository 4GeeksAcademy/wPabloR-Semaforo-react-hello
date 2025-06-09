import React, { useState } from "react";

const Semaforo = () => {

    const [colors, setColors] = useState([`red`, `orange`, `green`])
    const [currentColor, setCurrentColor] = useState(`red`);

    const lightStyle = (color) => ({ 
        backgroundColor: currentColor === color ? color : `gray`,
        width: `60px`,
        height: `60px`,
        borderRadius: `50%`,
        margin: `10px auto`,
        cursor: `pointer`,
        transition: "background-color 0.3s ease",
        boxShadow: currentColor === color ? `0 0 15px ${color}` : "none",
    });

    const randomColor = () => {

        return colors[Math.floor(Math.random() * colors.length)]
    };
    
    const addPurple = () => {
        if (!colors.includes(`purple`)){
            setColors([...colors, `purple`])
        }
    }


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
            {/* <div style={lightStyle(`red`)} onClick={() => setColor(`red`)}></div>
            <div style={lightStyle(`orange`)} onClick={() => setColor(`orange`)}></div>
            <div style={lightStyle(`green`)} onClick={() => setColor(`green`)}></div> */}

            {colors.map((color) => (
                <div
                key={color}
                style={lightStyle(color)}
                onClick={()=> setCurrentColor(color)}
                ></div>
                    
            ))}

        </div>

            <button className="btn btn-primary m-5" onClick={() => setCurrentColor(randomColor())}>Random color</button>
            <button className="btn btn-primary m-5" onClick={addPurple}>Add purple</button>

        </div>
    );
};

export default Semaforo