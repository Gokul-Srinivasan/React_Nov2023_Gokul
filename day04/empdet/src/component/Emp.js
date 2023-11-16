import './Emp.css';
import { useState } from 'react';
const Emp=()=>{
    const[emp]=useState([
        {
            empid:101,
            empname:"Arshad",
            age:19,
        },
        {
            empid:102,
            empname:"Balaji",
            age:20,
        },
        {
            empid:103,
            empname:"Heden",
            age:21,
        }


    ])
    return(
        <div>
        <h1>Employee Details</h1>
        <hr></hr>
        <table align='center' border={0} cellPadding={20} cellSpacing={25}>
            <th>Emp Id</th>
            <th>Name</th>
            <th>Age</th>
            {emp.map(employee=>
                <tr>
                    <td>{employee.empid}</td>
                    <td>{employee.empname}</td>
                    <td>{employee.age}</td>
                </tr>
            )}
        </table>
        </div>
    );
}

export default Emp;