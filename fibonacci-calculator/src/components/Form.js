import React, { useState } from "react"
import Fibonacci from "./Fibonacci"

export default function Form () {
    
    const [fibLength, setFibLength] = useState(5)

    const handleInputChange = event => {
        const {value} = event.target 
        setFibLength(value)
    }

    return(
        <div className="form">
            <label>Edit the value in the box to change how many digits are shown: </label>
            <input className="inputBox" type="text" name="length" value={fibLength} onChange={handleInputChange} />
            <Fibonacci length={fibLength}/>
        </div>
    )
}