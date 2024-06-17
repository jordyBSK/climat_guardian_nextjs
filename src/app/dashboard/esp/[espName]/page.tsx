"use client";

// import charts
import { PieChartHumidity } from "@/app/ui/dashboard/PieChartHumidity";
import { ChartElement } from "@/app/ui/dashboard/ChartElement";
import { PieChartTemperature } from "@/app/ui/dashboard/PieChartTemperature";

//import date range element
import { DateRangeElement } from "@/app/ui/dashboard/CalendarElement";

const tempData = [{ name: "temperature", value: 23 }];
const humiData = [{ name: "humidity", value: 38 }];

export default function Page({ params }: { params: any }) {

  return (
    <div className="flex h-full min-h-[50vh] gap-y-5 flex-col rounded-xl p-4 lg:col-span-2">

      <p className="uppercase font-bold text-2xl text-black">{params.espName}</p>
      <DateRangeElement />
      <div className="flex">
        <PieChartTemperature data={tempData} />
        <PieChartHumidity data={humiData} />
      </div>
      <div>
        <ChartElement />
      </div>
    </div>
  );
}
