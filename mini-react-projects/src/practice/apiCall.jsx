import { useEffect, useState } from "react"

function APICall(){
    const [data, setData] = useState([])
    const fetchData = async () => {
        const response = await fetch('/url')
        setData(response.json())
    }
    useEffect(() => {
        fetchData()
    }, [])
    return(<div>
        {data.map(({name, lastname}) => {
            <div>
            <h1>{name}</h1>
            <h1>{lastname}</h1>
            </div>
        })}
    </div>)
}
export default APICall