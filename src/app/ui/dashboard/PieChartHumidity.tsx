"use client";

import { Pie, PieChart } from "recharts";
import React from "react";

interface CustomizedLabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
}

export function PieChartHumidity({ fade }: { fade: string }) {
  const data = [{ name: "temperature", value: 25 }];

  // Fonction pour rendre le libellé au centre du cercle
  const renderCustomizedLabel = ({ cx, cy, index }: CustomizedLabelProps) => {
    return (
      <text
        x={cx}
        y={cy}
        fill="black"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={24}
      >
        {`${data[index].value}%`}
      </text>
    );
  };

  return (
    <div className="flex h-full w-full justify-center">
      <PieChart width={200} height={200}>
        <Pie
          innerRadius={60}
          dataKey="value"
          startAngle={270}
          endAngle={-90}
          data={data}
          cx={100}
          cy={110}
          outerRadius={80}
          fill={fade}
          label={renderCustomizedLabel}
          labelLine={false}
        />
      </PieChart>
    </div>
  );
}
