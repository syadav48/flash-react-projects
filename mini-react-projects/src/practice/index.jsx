import { useState } from "react"

function Counter(){
    const [count, setCount] = useState(0)
    const handleClick = () => {
        setCount(prev => prev + 1)
    }
    return(
        <div style={{marginTop: '20px'}}>
            <h1>{count}</h1>
            <button onClick={handleClick}>Add Count</button>
        </div>
    )
}
export default Counter