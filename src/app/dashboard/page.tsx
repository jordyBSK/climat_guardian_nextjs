import { PieChartTemperature } from "@/app/ui/dashboard/PieChartTemperature";
import { PieChartHumidity } from "@/app/ui/dashboard/PieChartHumidity";

const ESPList = [
  { name: "ESP N°1" },
  { name: "ESP N°2" },
  { name: "ESP N°3" },
  { name: "ESP N°4" },
  { name: "ESP N°5" },
  { name: "ESP N°6" },
];

const tempData = [{ name: "temperature", value: 28 }];
const humiData = [{ name: "humidity", value: 35 }];

export default function Page() {
  return (
    <>
      <div className="grid px-auto grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-10 h-fit min-w-[500px] w-full">
        {ESPList.map((esp, index) => {
          return (
            <div
              className="flex flex-col h-full items-center text-center border-2 rounded-2xl"
              key={index}
            >
              <h2 className="pt-5 w-full text-center text-gray-800 border-b-2 pb-5">
                {esp.name}
              </h2>
              <div className="flex flex-row  w-full h-full py-14 sm:py-auto">
                <PieChartTemperature data={tempData} />
                <PieChartHumidity data={humiData} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
