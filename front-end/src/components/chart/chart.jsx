import React from "react";
import "./chart.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Chart({title,data,grid})    //재사용하기 위해서 데이터를 props로 처리할 수 있도록
{
    
    return(
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={3/1}>
                <LineChart data={data}>
                    {grid && <CartesianGrid strokeDasharray="3 3" />}
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="open" stroke="#550000" />
                    <Line type="monotone" dataKey="close" stroke="#005500"/>
                    <Line type="monotone" dataKey="highest" stroke="#000055"/>
                    <Line type="monotone" dataKey="lowest" stroke="#555555"/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}