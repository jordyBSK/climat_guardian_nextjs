"use client";
import { PieChartHumidity } from "@/app/ui/dashboard/PieChartHumidity";
import { ChartElement } from "@/app/ui/dashboard/ChartElement";
import { DateRangeElement } from "@/app/ui/dashboard/CalendarElement";

export default function Page({ params }: { params: any }) {
  return (
    <div className="flex h-full min-h-[50vh] flex-col gap-y-5 rounded-xl p-4 lg:col-span-2">
      <p className="text-2xl font-bold uppercase text-black">
        {params.espName}
      </p>
      <DateRangeElement />
      <div className="flex">
        <PieChartHumidity fade={"bleu"} />

        <PieChartHumidity fade={"rouge"} />
      </div>
      <div>
        <ChartElement />
      </div>
    </div>
  );
}
