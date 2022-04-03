import React, { useEffect, useState } from 'react';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, LineChart, Scatter, Tooltip, XAxis, YAxis } from 'recharts';


const DashBoard = () => {
    const [rechart,setRechat] = useState([]);
useEffect(()=>{
    fetch('rechartData.json')
    .then(res => res.json())
    .then(data => setRechat(data));   
},[]);



    return (
        <div className='flex flex-wrap justify-around m-10'>
            <div>
            <LineChart width={400} height={400} data={rechart}>
                <Line dataKey={'revenue'}></Line>
                <XAxis dataKey={'month'}></XAxis>
                <YAxis></YAxis>
            </LineChart>
            </div>
            <div>
            <ComposedChart
          width={500}
          height={400}
          data={rechart}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="sell" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="investment" dataKey="revenue" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="revenue" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="income" stroke="#ff7300" />
          <Scatter dataKey="month" fill="red" />
        </ComposedChart>
            </div>
        </div>
    );
};

export default DashBoard;