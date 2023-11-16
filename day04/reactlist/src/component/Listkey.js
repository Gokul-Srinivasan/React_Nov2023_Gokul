import {useState} from "react";
import './ListKey.css'

const ListKey=()=>
{
    const [students]=useState([
        {
            id:101,
            name:"Heden",
            age:19,
        },
        {
            id:102,
            name:"Jack",
            age:20,
        },
        {
            id:103,
            name:"Mike",
            age:21,
        }
    ]);
    return(
        <div>
            <h1>List and Keys</h1>
            <hr></hr>
            <table className="table" align="center">
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                {students.map(student=>
                    <tr>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                    </tr>


               
                )}
           
            </table>  
            
        </div>
    );
}

export default ListKey;