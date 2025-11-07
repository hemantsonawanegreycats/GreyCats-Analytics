import { FiBell, FiSearch } from "react-icons/fi";
import { Button } from "./ui/button";
import { RadioButtonGroup } from "./RadioButtonGroup";
import WidgetsPageSideComponent from "./WidgetsPageSideComponent";
import ReportElements from "./ReportElements";
import GridLines from "react-gridlines";
import GridLayout, { type Layout } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { useState } from "react";

import { ChartPieInteractive } from "./ChartPieInteractive";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

type ReportTableRow = {
  name: string;
  audience: string;
  status: "Draft" | "Scheduled" | "Delivered";
  lastRun: string;
  nextSend: string;
};

const reportTableRows: ReportTableRow[] = [
  {
    name: "Weekly Marketing Performance",
    audience: "Acme Co.",
    status: "Scheduled",
    lastRun: "Nov 3, 2025",
    nextSend: "Nov 10, 2025",
  },
  {
    name: "E-commerce Conversion Overview",
    audience: "Globex Retail",
    status: "Delivered",
    lastRun: "Nov 6, 2025",
    nextSend: "Nov 13, 2025",
  },
  {
    name: "Paid Media Attribution",
    audience: "Initech",
    status: "Scheduled",
    lastRun: "Nov 2, 2025",
    nextSend: "Nov 9, 2025",
  },
  {
    name: "Executive KPI Summary",
    audience: "Stark Industries",
    status: "Draft",
    lastRun: "—",
    nextSend: "Nov 15, 2025",
  },
];

//TableComponent

function ReportBuilder() {
  const [layout, setLayout] = useState<Layout[]>([
    { i: "chart1", x: 0, y: 0, w: 4, h: 3 },
    { i: "map1", x: 4, y: 0, w: 4, h: 3 },
    { i: "table1", x: 0, y: 3, w: 8, h: 3 },
  ]);
  return (
    <div className="w-full  h-full flex flex-col">
      <div className="w-full h-[4.8em] bg-white border-b flex justify-between items-center px-5 ">
        <span className="font-medium text-xl">Report Builder</span>
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

      <div className="w-full h-[4em] bg-white border-b flex justify-between items-center px-5 ">
        <RadioButtonGroup />
      </div>
      <div className="relative w-full flex h-full">
        <WidgetsPageSideComponent />
        {/* this will be auto height */}
        <div className="flex-1 h-full bg-gray-100">
          <GridLines
            className="grid-area w-full h-full "
            cellWidth={20}
            strokeWidth={2}
            lineColor="#ededed"
          >
            <div className="w-full h-full flex justify-center ">
              <div
                className="bg-white border mt-7 rounded-lg"
                style={{
                  width: "1120px", // ~A4 landscape ratio
                  height: "703px",
                  overflow: "hidden",
                  padding: "10px",
                }}
              >
                <GridLayout
                  className="layout"
                  layout={layout}
                  onLayoutChange={(newLayout) => setLayout(newLayout)}
                  cols={12}
                  width={1600}
                  rowHeight={100}
                  margin={[10, 10]}
                  compactType="vertical" // ✅ auto reflow/push down
                  preventCollision={false} // ✅ allow items to resize smoothly
                  isResizable={true}
                  isDraggable={true}
                >
                  {/* Chart */}
                  <div key="chart1" className="bg-gray-50 rounded-lg">
                    <ChartPieInteractive />
                  </div>

                  {/* Map */}
                  <div key="map1" className="bg-gray-50 rounded-lg">
                    <Card className="h-full flex items-center justify-center text-sm">
                      🗺️ Map Widget
                    </Card>
                  </div>

                  {/* Table */}
                  <div key="table1" className="bg-gray-50 rounded-lg">
                    
                    <Card className="h-full flex flex-col">
                      <CardHeader className="pb-4">
                        <CardTitle className="text-base">Scheduled Reports</CardTitle>
                      </CardHeader>
                     <CardContent className="flex-1 p-0 overflow-auto">
      <div className="w-full h-full">
        <Table className="min-w-full text-sm">
          <TableCaption>Queue of report deliveries.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[35%]">Report</TableHead>
              <TableHead>Audience</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Run</TableHead>
              <TableHead>Next Send</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reportTableRows.map((row) => (
              <TableRow key={row.name}>
                <TableCell className="font-medium">{row.name}</TableCell>
                <TableCell>{row.audience}</TableCell>
                <TableCell>
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium">
                    {row.status}
                  </span>
                </TableCell>
                <TableCell>{row.lastRun}</TableCell>
                <TableCell>{row.nextSend}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </CardContent>
                    </Card>
                  </div>
                </GridLayout>
              </div>
            </div>
          </GridLines>
        </div>
        <ReportElements />
      </div>
    </div>
  );
}

export default ReportBuilder;
