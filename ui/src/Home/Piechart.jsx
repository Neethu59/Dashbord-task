// import axios from 'axios';
// import React, { useEffect, useState } from 'react'

// import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

// export default function Piechart() {
//     const [state,setState]=useState()
  
//     useEffect(()=>{
//   axios.get('http://localhost:3001/api/pie-chart').then(res=>{
//     console.log(res.data);
//     setState(res.data)
   
   
//   })
  
//     },[])
//     const data01 = state?.map(({ label, value}) => ({label, value}));
  
//   console.log(data01);

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   );
// };
 
  
  
//   return (
//     <>
  

//         <div>

//         <PieChart width={400} height={400}>
//           <Pie
//             data={ data01}
//             cx="50%"
//             cy="50%"
//             labelLine={false}
//             label={renderCustomizedLabel}
//             outerRadius={80}
//             fill="#8884d8"
//             dataKey="value"
//           >
//             { data01?.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//             ))}
//           </Pie>
//         </PieChart>
//         </div>
//     </>
//   )
// }


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export default function Piechart() {
  const [state, setState] = useState();

  useEffect(() => {
    axios.get('http://localhost:3001/api/pie-chart').then(res => {
      console.log(res.data);
      setState(res.data);
    });
  }, []);

  const data01 = state?.map(({ label, value }) => ({ label, value }));
  console.log(data01);

  const COLORS = ['#165247', '#237364', '#339583', '#4fbca8','#87efdc'];

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <>
      <div>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data01}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data01?.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div style={{ display: 'flex',flexDirection:'column', justifyContent: 'center',alignItems:'center', marginTop: '20px' }}>
        {data01?.map((entry, index) => (
          <div key={`detail-${index}`} style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
            <div
              style={{
                width: '10px',
                height: '10px',
                borderRadius:"50%",
                backgroundColor: COLORS[index % COLORS.length],
                marginRight: '8px',
              }}
            />
            <span>{`${entry.label}`}</span>
          </div>
        ))}
      </div>
    </>
  );
}

