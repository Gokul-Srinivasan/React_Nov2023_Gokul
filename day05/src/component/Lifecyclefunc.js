import React ,{useState,useEffext} from 'react';


const FunctionLifecycleExample=()=>{
    const[count,setCount]=useState(0);
    useEffext(()=>{
        console.log("Component is mounted!");
        return()=>{
            console.log("Component will unmount!");
        }
    },[]);

    useEffect(()=>{
        console.log("Component has been updated!");
    },[count]);



}

export default FunctionLifecycleExample;