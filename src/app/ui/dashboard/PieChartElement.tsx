"use client"

import {Pie, PieChart} from 'recharts';
import React, {PureComponent} from 'react';


export function PieChartElement({color}:{color:string}) {

    const data = [
        { name: "temperature", value: 189 }
    ];

    return (
        <PieChart className="border-gray-300 border-2 rounded-2xl" width={200} height={200}>
            <Pie
                innerRadius={40}
                dataKey="value"
                startAngle={180}
                endAngle={0}
                data={data}
                cx={100}
                cy={150}
                outerRadius={80}
                fill={color}
                label
            />
        </PieChart>
    );
}
