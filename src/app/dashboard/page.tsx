import {DateRangeElement} from "@/app/ui/dashboard/CalendarElement";
import {ChartElement} from "@/app/ui/dashboard/ChartElement";

export default function Page() {
    return (
        <div>
            <DateRangeElement/>
            <div className="flex h-full min-h-[50vh] gap-y-5 flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
                <div>
                    <ChartElement/>
                    <ChartElement/>
                </div>
            </div>
        </div>
    );
}