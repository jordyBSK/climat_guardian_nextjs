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
      <div className="px-auto grid h-fit w-full min-w-[500px] grid-cols-1 gap-10 xl:grid-cols-2 2xl:grid-cols-3">
        {temperature.map((temp, index) => {
          return (
            <div
              className="flex h-full flex-col items-center rounded-2xl border-2 text-center"
              key={index}
            >
              <h2 className="w-full border-b-2 pb-5 pt-5 text-center text-gray-800">
                {temp.name}
              </h2>
              <div className="sm:py-auto flex h-full w-full flex-row py-14">
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
