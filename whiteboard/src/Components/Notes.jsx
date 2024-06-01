import { useState,useEffect } from "react"

function Notes(){

    const [notes,setNotes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/')
            .then(res => res.json())
            .then(data => setNotes(data))
    })
    return(
        <></>
    )
}

export default Notes