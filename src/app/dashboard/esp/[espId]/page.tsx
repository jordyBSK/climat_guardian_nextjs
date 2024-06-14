"use client";
import { PieChartHumidity } from "@/app/ui/dashboard/PieChartHumidity.tsx";
import { ChartElement } from "@/app/ui/dashboard/ChartElement";
import { DateRangeElement } from "@/app/ui/dashboard/CalendarElement";

export default function Page({ params }: { params: any }) {
  return (
    <div className="flex h-full min-h-[50vh] gap-y-5 flex-col rounded-xl p-4 lg:col-span-2">
      <p className="uppercase font-bold text-2xl">{params.esp}</p>
      <DateRangeElement />
      <div className="flex">
        <PieChartHumidity color={"orange"} />
        <PieChartHumidity color={"blue"} />
      </div>
      <div>
        <ChartElement />
      </div>
    </div>
  );
}