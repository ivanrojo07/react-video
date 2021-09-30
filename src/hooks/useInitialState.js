import { useState, useEffect } from "react";

const useInitialState = (API,initialValue)=>{
    const [resource, setResource] = useState(initialValue)
    useEffect( ()=>{
        fetch(API)
        .then(response=>response.json())
        .then(data=>{
            setResource(data)

        })
    },[]);
    return resource;
}

export default useInitialState;