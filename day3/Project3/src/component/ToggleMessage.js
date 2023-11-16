import {useState} from 'react'
function Display()
{
    const[num,setNumber]=useState(0);
    const numincrease =() =>
    {
        let val =0;
        setNumber(++val);
        
    };
    const numdecrease=()=>
    {
        let val=0;
        setNumber(--val);
    };
  
    
    return(
        <div>
            <h1>Count {num}</h1>
            <hr></hr>
            <button onClick={numincrease}>Increase</button>
            <button onClick={numdecrease}>Decrease</button>
        </div>
    )
}
export default Display;