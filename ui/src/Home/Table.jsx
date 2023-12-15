import React, { useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios'
export default function Table() {
    const [table,setTable]=useState()

    useEffect(()=>{
axios.get("http://localhost:3001/api/table").then(res=>{
    console.log(res);
    setTable(res.data)
})
    },[])
  return (
    <>
    <table>
  <tr>
    <th>id</th>
    <th>Name</th>
    <th>Quantity</th>
    <th>Price</th>
  </tr>
  {table?.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.quantity}</td>
              <td>{user.price}</td>
            </tr>
          ))}
 
</table>
    
    </>
  )
}
