import { FiBell, FiSearch } from "react-icons/fi";
import { Button } from "./ui/button";
import TableComponent from "./TableComponent";
import { Input } from "./ui/input";
import DropDownFilter from "./DropDownFilter";

function Reports() {
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
        <TableComponent
          bodyData={[
            {
              name: "Monthly Performance Report",
              client: "Acme Corp",
              type: "Analytics",
              created: "2025-10-12",
              schedule: "Monthly",
              scheduleStatus: "Active",
              clientGroup: "Enterprise",
              lastSent: "2025-10-01",
              nextSendDate: "2025-11-01",
              awaitingApproval: false,
              lastSentStatus: "Delivered",
            },
            {
              name: "Social Media Insights",
              client: "Bright Studio",
              type: "Marketing",
              created: "2025-09-20",
              schedule: "Weekly",
              scheduleStatus: "Paused",
              clientGroup: "Agency",
              lastSent: "2025-10-30",
              nextSendDate: "2025-11-07",
              awaitingApproval: true,
              lastSentStatus: "Pending",
            },
            {
              name: "Ad Campaign Overview",
              client: "BlueSky Media",
              type: "Advertising",
              created: "2025-08-05",
              schedule: "Monthly",
              scheduleStatus: "Active",
              clientGroup: "Premium",
              lastSent: "2025-10-03",
              nextSendDate: "2025-11-03",
              awaitingApproval: false,
              lastSentStatus: "Delivered",
            },
            {
              name: "Quarterly Engagement Report",
              client: "Nova Tech",
              type: "Analytics",
              created: "2025-07-18",
              schedule: "Quarterly",
              scheduleStatus: "Active",
              clientGroup: "Corporate",
              lastSent: "2025-09-30",
              nextSendDate: "2025-12-30",
              awaitingApproval: false,
              lastSentStatus: "Delivered",
            },
            {
              name: "Email Campaign Stats",
              client: "Sunrise Apparel",
              type: "Email",
              created: "2025-09-01",
              schedule: "Weekly",
              scheduleStatus: "Active",
              clientGroup: "Retail",
              lastSent: "2025-10-31",
              nextSendDate: "2025-11-07",
              awaitingApproval: true,
              lastSentStatus: "In Review",
            },
          ]}
          header={[
            "Name",
            "Client",
            "Type",
            "Created",
            "Schedule",
            "Schedule Status",
            "Client Group",
            "Last Sent",
            "Next Send Date",
            "Awaiting Approval",
            "Last Sent Status",
          ]}
        />
      </div>
    </div>
  );
}

export default Reports;
