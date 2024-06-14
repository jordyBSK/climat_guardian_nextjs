import { DateRangeElement } from "@/app/ui/dashboard/CalendarElement";
import { ChartElement } from "@/app/ui/dashboard/ChartElement";
import { PieChartElement } from "@/app/ui/dashboard/PieChartElement";

export default function Page() {
  return (
    <div className="flex h-full min-h-[50vh] gap-y-5 flex-col rounded-xl p-4 lg:col-span-2">
      <DateRangeElement />
      <div className="flex">
        <PieChartElement color={"orange"} />
        <PieChartElement color={"blue"} />
      </div>
      <div>
        <ChartElement />
      </div>
    </div>
  );
}
