"use client";
import {PieChartElement} from "@/app/ui/dashboard/PieChartElement";
import {ChartElement} from "@/app/ui/dashboard/ChartElement";

export default function Page({params}: { params: any }) {
    return (
        <div className="flex h-full min-h-[50vh] gap-y-5 flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
            <p className="uppercase font-bold text-2xl">{params.esp}</p>
            <div className="flex">
                <PieChartElement color={"orange"}/>
                <PieChartElement color={"blue"}/>
            </div>
            <div>
                <ChartElement/>
            </div>
        </div>
    )
        ;
}
