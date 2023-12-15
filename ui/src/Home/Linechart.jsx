import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Linechart() {
    const [state,setState]=useState()
  
    useEffect(()=>{
  axios.get('http://localhost:3001/api/graph').then(res=>{
    console.log(res.data);
    setState(res.data)
   
   
  })
  
    },[])
    const data = state?.map(({ x, y }) => ({ x, y }));
  
  console.log(data);
  return (
    <>
     {/* <ResponsiveContainer width="100%" height="100%"> */}
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="y" stroke="#8884d8" activeDot={{ r: 8 }} />
         
        </LineChart>
      {/* </ResponsiveContainer> */}
    
    </>
  )
}
