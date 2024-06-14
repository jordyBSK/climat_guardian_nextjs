import { PieChartTemperature } from "@/app/ui/dashboard/PieChartTemperature";
import { PieChartHumidity } from "@/app/ui/dashboard/PieChartHumidity";

const temperature = [
  { color: "orange", name: "ESP N°1" },
  { color: "green", name: "ESP N°2" },
  { color: "red", name: "ESP N°3" },
  { color: "orange", name: "ESP N°4" },
  { color: "green", name: "ESP N°5" },
  { color: "red", name: "ESP N°6" },
];

const humidity = [
  { color: "#57C9F0", name: "ESP N°1" },
  { color: "#0E60E2", name: "ESP N°2" },
  { color: "#4A7DCD", name: "ESP N°3" },
  { color: "#0E60E2", name: "ESP N°4" },
  { color: "#57C9F0", name: "ESP N°1" },
  { color: "#0E60E2", name: "ESP N°2" },
];

export default function Page() {
  return (
    <>
      <div className="grid px-auto grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-10 h-fit min-w-[500px] w-full">
        {temperature.map((temp, index) => {
          return (
            <div
              className="flex flex-col h-full items-center text-center border-2 rounded-2xl"
              key={index}
            >
              <h2 className="pt-5 w-full text-center text-gray-800 border-b-2 pb-5">
                {temp.name}
              </h2>
              <div className="flex flex-row  w-full h-full py-14 sm:py-auto">
                <PieChartTemperature color={temp.color} />
                {humidity[index] && (
                  <PieChartHumidity fade={humidity[index].color} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
