import { useEffect, useState } from "react"
import React from 'react';


const ToggleSwitch = () => {
    const [background, setBackground] = useState(true)
    const toggle = () => {
        setBackground(!background)
    }
    useEffect(() => {
        document.getElementById('dev-io').style.background = background ? 'black' : 'white'        
        //document.body.style.background = background ? 'black' : 'white'
    }, [background])

    return(
        <div>
            <label className="switch">
                <input type='checkbox' onClick={toggle} />
                <span className="slider round" />
            </label>
        </div>
    )
}
export default ToggleSwitch;