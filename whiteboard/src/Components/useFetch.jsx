import { useEffect, useState } from "react"

function useFetch(){

    const [data,setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/notes')
            .then((res) => {
                return res.json;
            })
            .then((data) => {
                setData(data);
            },1000);
    },[]);
    return {data}
}

export default useFetch