import { FiBell, FiSearch } from "react-icons/fi";
import { Button } from "./ui/button";
import { RadioButtonGroup } from "./RadioButtonGroup";
import WidgetsPageSideComponent from "./WidgetsPageSideComponent";
import ReportElements from "./ReportElements";

import GridLayout, { type Layout } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

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
import { type ReportWidgetType } from "./reportTypes";
import { useState, useCallback, useMemo } from "react";

// Types
export interface DashboardLayout extends Layout {
  widgetType: ReportWidgetType;
}

export type DashboardMap = Map<number, DashboardLayout[]>;

// Constants
const GRID_CONFIG = {
  cols: 10,
  rowHeight: 100,
  width: 1200,
  margin: [20, 20] as [number, number],
} as const;

const DEFAULT_WIDGET_SIZE = {
  w: 4,
  h: 3,
} as const;

const defaultLayout1: DashboardLayout[] = [
  { i: "chart1", x: 0, y: 0, w: 5, h: 4, widgetType: "chart" },
  { i: "map1", x: 8, y: 0, w: 4, h: 3, widgetType: "map" },
  { i: "table1", x: 0, y: 4, w: 9, h: 3, widgetType: "table" },
];

const defaultLayout2: DashboardLayout[] = [
  { i: "table1", x: 0, y: 0, w: 9, h: 3, widgetType: "table" },
];

// Table Data
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

// Helper: Get status badge color
const getStatusBadgeClass = (status: ReportTableRow["status"]) => {
  switch (status) {
    case "Scheduled":
      return "border-blue-200 bg-blue-50 text-blue-700";
    case "Delivered":
      return "border-green-200 bg-green-50 text-green-700";
    case "Draft":
      return "border-gray-200 bg-gray-50 text-gray-700";
    default:
      return "border-gray-200 bg-gray-50 text-gray-700";
  }
};

// Helper: Render widget content
const renderWidgetContent = (widget: DashboardLayout) => {
  switch (widget.widgetType) {
    case "chart":
      return <ChartPieInteractive />;
    case "map":
      return (
        <div className="h-full flex items-center justify-center text-sm text-gray-500">
          Map Placeholder
        </div>
      );
    case "table":
      return (
        <Card className="h-full flex flex-col rounded-2xl">
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
                        <span
                          className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${getStatusBadgeClass(
                            row.status
                          )}`}
                        >
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
      );
    case "metric":
    case "image":
    case "embed":
    case "custom":
    default:
      return (
        <div className="h-full flex items-center justify-center text-sm text-gray-500">
          {widget.widgetType.charAt(0).toUpperCase() +
            widget.widgetType.slice(1)}{" "}
          Placeholder
        </div>
      );
  }
};

function ReportBuilder() {
  const [dashboards, setDashboards] = useState<DashboardMap>(
    new Map([
      [0, defaultLayout1],
      [1, defaultLayout2],
    ])
  );

  // Get dashboard IDs in order
  const dashboardIds = useMemo(
    () => Array.from(dashboards.keys()).sort((a, b) => a - b),
    [dashboards]
  );

  const updateDashboard = useCallback(
    (id: number, newLayout: DashboardLayout[]) => {
      setDashboards((prev) => {
        const updated = new Map(prev);
        updated.set(id, newLayout);
        return updated;
      });
    },
    []
  );

  const handleDrop = useCallback(
    (_layoutArr: Layout[], layoutItem: Layout, e: DragEvent, id: number) => {
      const widgetType = e.dataTransfer?.getData(
        "widgetType"
      ) as ReportWidgetType | null;

      if (!widgetType) return;

      const newItem: DashboardLayout = {
        i: `item-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`,
        x: layoutItem.x,
        y: layoutItem.y,
        w: DEFAULT_WIDGET_SIZE.w,
        h: DEFAULT_WIDGET_SIZE.h,
        widgetType,
      };

      setDashboards((prev) => {
        const updated = new Map(prev);
        const existingLayout = updated.get(id) || [];
        updated.set(id, [...existingLayout, newItem]);
        return updated;
      });
    },
    []
  );

  const createLayoutChangeHandler = useCallback(
    (id: number, currentLayout: DashboardLayout[]) => (newLayout: Layout[]) => {
      const mergedLayout = currentLayout.map((item) => {
        const updated = newLayout.find((n) => n.i === item.i);
        return updated ? { ...item, ...updated } : item;
      });

      updateDashboard(id, mergedLayout);
    },
    [updateDashboard]
  );

  return (
    <div className="w-full h-screen flex flex-col bg-gray-50 overflow-hidden">
      {/* Top Bar */}
      <div className="sticky z-50 top-0 py-[1.3em] bg-white border-b flex justify-between items-center px-5">
        <span className="font-medium text-xl">Report Builder</span>
        <div className="flex items-center">
          <span className="mx-2 text-lg text-gray-500">
            <FiSearch />
          </span>
          <span className="mx-2 text-lg text-gray-500">
            <FiBell />
          </span>
          <span className="ml-4">
            <Button className="rounded-[0.4rem]">Edit Dashboard</Button>
          </span>
        </div>
      </div>

      {/* Sub Header */}
      <div className="sticky z-40 top-[4.6em] py-[1.2em] bg-white border-b flex justify-between items-center px-5">
        <RadioButtonGroup />
      </div>

      {/* Main Content */}
      <div className="flex flex-1 min-h-0">
        {/* Left Sidebar */}
        <div className="sticky top-[8.8em] left-0 w-62 bg-white border-r h-[calc(100vh-8.8em)] overflow-y-auto">
          <WidgetsPageSideComponent />
        </div>

        {/* Grid Area */}
        <div className="flex-1 overflow-y-auto bg-gray-100 flex flex-col items-center min-h-0 h-[calc(100vh-8.8em)]">
          {dashboardIds.map((id) => {
            const layout = dashboards.get(id);
            if (!layout) return null;

            return (
              <div
                key={id}
                className="w-[1200px] bg-white my-10 shadow  rounded-2xl"
              >
                <h1 className="text-lg p-4 font-semibold mb-4 text-gray-800">
                  Slide #{id + 1}
                </h1>
                <GridLayout
                  className="layout"
                  layout={layout}
                  cols={GRID_CONFIG.cols}
                  rowHeight={GRID_CONFIG.rowHeight}
                  width={GRID_CONFIG.width}
                  margin={GRID_CONFIG.margin}
                  containerPadding={[14, 14]}
                  isDroppable={true}
                  isDraggable={true}
                  onDrop={(layoutArr, layoutItem, e) =>
                    handleDrop(layoutArr, layoutItem, e as DragEvent, id)
                  }
                  onLayoutChange={createLayoutChangeHandler(id, layout)}
                >
                  {layout.map((widget) => (
                    <div key={widget.i}>{renderWidgetContent(widget)}</div>
                  ))}
                </GridLayout>
              </div>
            );
          })}
        </div>

        {/* Right Sidebar */}
        <div className="sticky top-[8.8em] right-0 w-24 bg-white border-l h-[calc(100vh-8.8em)] overflow-y-auto">
          <ReportElements />
        </div>
      </div>
    </div>
  );
}

export default ReportBuilder;
