import { FiBell, FiSearch } from "react-icons/fi";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import DropDownFilter from "./DropDownFilter";
import { Table } from "lucide-react";

function Clients() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-[4.8em] bg-white border-b flex justify-between items-center px-5 ">
        <span className="font-medium text-xl">Clients</span>
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

      <div className="w-full justify-between items-center flex px-5">
        <div className="flex w-[30%]  gap-3 py-6">
          <div className="w-[60%]">
            <Input
              className="w-full rounded-[0.5rem] p-4 py-5"
              type="email"
              placeholder="Email"
            />
          </div>

          <div>
            <DropDownFilter />
          </div>
        </div>
        <div>
          {/* <Button className="rounded-[0.5rem]"> Add Client</Button> */}
        </div>
      </div>

      <div className="w-full px-5">
        <div className="border w-full rounded-[0.7rem] overflow-hidden">
          {/* Table header */}
          <div className="bg-gray-50 border-b">
            <table className="w-full table-fixed">
              <thead>
                <tr className="text-left uppercase">
                  <th className="pl-6 pr-0 py-3 font-medium text-sm text-gray-500">
                    Client
                  </th>
                  <th className="py-3  font-medium text-sm text-gray-500">
                    FB Clicks
                  </th>
                  <th className="py-3 font-medium text-sm text-gray-500">
                    FB Trend
                  </th>
                  <th className="py-3 font-medium text-sm text-gray-500">
                    GA Clicks
                  </th>
                  <th className="py-3 font-medium text-sm text-gray-500">
                    GA Trend
                  </th>
                </tr>
              </thead>
            </table>
          </div>

          {/* Scrollable table body */}
          <div className="h-[76vh] overflow-y-auto">
            <table className="w-full table-fixed">
              <tbody>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                  <tr key={i} className="h-19 border-b border-gray-200">
                    <td className="pl-6">
                      <div className="flex gap-2 items-center">
                        <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                        <div className="flex flex-col">
                          <span className="text-md font-medium">Nike</span>
                          <span className="text-xs font-extralight text-gray-600">
                            www.Nike.com
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="text-sm font-normal text-gray-600">
                      18,199
                    </td>
                    <td className="text-sm font-normal text-gray-600">
                      98,234
                    </td>
                    <td className="text-sm font-normal text-gray-600">
                      98,234
                    </td>
                    <td className="text-sm font-normal text-gray-600">
                      98,234
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
