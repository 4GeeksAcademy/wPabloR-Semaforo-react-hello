import React, { useState } from "react";

const Semaforo = () => {

    const [colors, setColors] = useState([`red`, `orange`, `green`]);
    const [currentColor, setCurrentColor] = useState(`red`);
    const [newColor, setNewColor] = useState("");

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
    };

    const handleInputChange = (e) =>{
        setNewColor(e.target.value)
    }

    const addNewColor = () =>{
        if (newColor.trim() !== "" && !colors.includes(newColor.toLowerCase())){
            setColors([...colors, newColor.toLowerCase()])
        }
        setNewColor("")
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

            <div>
            <input className="input-group w-25 m-auto my-2" placeholder="Type the new color" value={newColor} onChange={handleInputChange}></input>
            <button className="btn btn-primary m-2" onClick={addNewColor}>Add new color</button>
            </div>
        </div>
    );
};

export default Semaforo

//Curioseando y practicando cosas he añadido también un input para que se pueda introducir un color nuevo :)