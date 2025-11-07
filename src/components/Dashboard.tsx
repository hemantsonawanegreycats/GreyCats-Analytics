import { FiSearch, FiBell } from "react-icons/fi";
import { Button } from "./ui/button";
import { ChartLineMultiple } from "./ChartLineMultiple";
import { ChartPieInteractive } from "./ChartPieInteractive";

function Dashboard() {
  return (
    <div className="w-full h-full flex flex-col ">
      <div className="w-full h-[4.8em] bg-white border-b flex justify-between items-center px-5 ">
        <span className="font-medium text-xl">Deshboard</span>
        <div className="flex items-center">
          <span className="mx-2 text-lg text-gray-500">
            <FiSearch />
          </span>
          <span className="mx-2 text-lg text-gray-500 ">
            {" "}
            <FiBell />
          </span>
          <span className="ml-4">
            <Button className="rounded-[0.4rem]">Edit Dashboard</Button>
          </span>
        </div>
      </div>

      <div className="w-full lg:gap-4 md:gap-2 lg:py-4 md:py-4  flex justify-between items-center px-5 ">
        <div className="flex-1 flex-col flex justify-center lg:p-6  lg:h-32 md:p-5 md:h-26 bg-white rounded-2xl border">
          <div className="flex-col flex">
            <span className="lg:text-md xl:text-[0.9rem] md:text-xs text-gray-500">
              Total Ad Spend
            </span>
            <span className="lg:text-[1.6rem] xl:text-[2rem] md:my-1 font-semibold">
              $45,231.89
            </span>
            <span className="lg:text-md md:text-xs xl:text-[0.9rem] text-orange-400">
              +2.5% vs last month
            </span>
          </div>
        </div>

        <div className="flex-1 flex-col flex justify-center lg:p-6  lg:h-32 md:p-5 md:h-26 bg-white rounded-2xl border">
          <div className="flex-col flex">
            <span className="lg:text-md xl:text-[0.9rem] md:text-xs text-gray-500">
              Total Clicks
            </span>
            <span className="lg:text-[1.6rem] xl:text-[2rem] md:my-1 font-semibold">
              1.2M
            </span>
            <span className="lg:text-md md:text-xs xl:text-[0.9rem] text-orange-400">
              +10.1% vs last month
            </span>
          </div>
        </div>

        <div className="flex-1 flex-col flex justify-center lg:p-6  lg:h-32 md:p-5 md:h-26 bg-white rounded-2xl border">
          <div className="flex-col flex">
            <span className="lg:text-md md:text-xs xl:text-[0.9rem] text-gray-500">
              Conversions
            </span>
            <span className="lg:text-[1.6rem] xl:text-[2rem] md:my-1 font-semibold">
              8,450
            </span>
            <span className="lg:text-md md:text-xs xl:text-[0.9rem] text-red-400">
              -1.2% vs last month
            </span>
          </div>
        </div>

        <div className="flex-1 flex-col flex justify-center lg:p-6  lg:h-32 md:p-5 md:h-26 bg-white rounded-2xl border">
          <div className="flex-col flex">
            <span className="lg:text-md md:text-xs xl:text-[0.9rem] text-gray-500">
              Avg. CPC
            </span>
            <span className="lg:text-[1.6rem] xl:text-[2rem] md:my-1 font-semibold">
              $0.82
            </span>
            <span className="lg:text-md md:text-xs xl:text-[0.9rem] text-orange-400 ">
              - $0.05 vs last month
            </span>
          </div>
        </div>
      </div>

      <div className="px-5 flex gap-6">
        <div className="w-2/3 ">
          <ChartLineMultiple />
        </div>
        <div className="w-1/3 ">
          <ChartPieInteractive />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
