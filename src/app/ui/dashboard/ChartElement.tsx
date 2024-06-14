"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ReferenceLine,
} from "recharts";
import React, { PureComponent } from "react";

export function ChartElement() {
  const data = [
    {
      name: "01/06",
      temperature: 27,
      humidity: 24,
    },
    {
      name: "02/06",
      temperature: 30,
      humidity: 38,
    },
    {
      name: "03/06",
      temperature: 25,
      humidity: 48,
    },
    {
      name: "04/06",
      temperature: 27,
      humidity: 39,
    },
    {
      name: "05/06",
      temperature: 18,
      humidity: 48,
    },
    {
      name: "06/06",
      temperature: 23,
      humidity: 38,
    },
  ];
  return (
    <LineChart
      className="border-gray-300 border-2 rounded-2xl"
      width={800}
      height={500}
      data={data}
    >
      <XAxis
        fontSize={16}
        tickLine={false}
        axisLine={false}
        dataKey="name"
        padding={{ left: 20, right: 50 }}
      />
      <YAxis
        fontSize={16}
        tickLine={false}
        axisLine={false}
        padding={{ top: 50, bottom: 10 }}
      />
      <ReferenceLine y={50} label="Max humidity" stroke="red" />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="humidity"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
        strokeWidth="2px"
      />
      <Line
        type="monotone"
        dataKey="temperature"
        strokeWidth="2px"
        stroke="#82ca9d"
      />
    </LineChart>
  );
}
