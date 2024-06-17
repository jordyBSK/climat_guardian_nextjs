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
    <div className="flex flex-col min-w-[500px] gap-y-5 pt-2">
      <p className="uppercase font-bold text-2xl text-black">{params.espName}</p>
      <DateRangeElement />
      <div className="flex flex-col sm:flex-row">
        <PieChartTemperature data={tempData} />
        <PieChartHumidity data={humiData} />
      </div>
      <div>
        <ChartElement />
      </div>
    </div>
  );
}
