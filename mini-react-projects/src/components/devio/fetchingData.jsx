import { useEffect, useState } from "react";

const FetchingData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const apiData = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await apiData.json();
            if(data){
                setLoading(false)
                setError('Not Found')
                setData(data);
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div>
            {loading ? <p>Loading...</p> : <p>Data: {data.map((elem) => elem.title.slice(0, 4))}</p>}
            {error && <p>Error: {error}</p>}
        </div>
    )
}
export default FetchingData;