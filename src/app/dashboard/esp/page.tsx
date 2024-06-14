import {PieChartElement} from "@/app/ui/dashboard/PieChartElement";
import {ChartElement} from "@/app/ui/dashboard/ChartElement";

export default function Page() {
    return (
        <div className="flex h-full min-h-[50vh] gap-y-5 flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
            <div className="flex"><PieChartElement color={"orange"}/>
                <PieChartElement color={"blue"}/></div>
            <div>
                <ChartElement/>
            </div>
        </div>
    );
}
