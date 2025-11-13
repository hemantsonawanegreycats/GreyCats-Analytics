import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Switch } from "./ui/switch";
import type { TableWidgetData } from "./widgetTypes";

interface TableWidgetFormProps {
  data?: TableWidgetData;
  onChange?: (data: TableWidgetData) => void;
}

function TableWidgetForm({ data, onChange }: TableWidgetFormProps): React.JSX.Element {
  const [activeTab, setActiveTab] = useState<"general" | "data" | "display">("data");
  
  const handleChange = (updates: Partial<TableWidgetData>) => {
    if (onChange) {
      onChange({ ...data, ...updates } as TableWidgetData);
    }
  };

  const selectedMetrics = data?.rows?.map((row) => row.name) || [];
  
  const removeMetric = (metric: string) => {
    // This is a placeholder - metrics management would need more complex logic
    // For now, we'll just handle it through the data prop
  };

  return (
    <div className="w-full h-full overflow-y-auto bg-white">
      {/* Header */}
      <div className="w-full p-4 border-b flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="text-gray-500 hover:text-gray-700">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div>
            <div className="font-semibold text-accent-foreground">Edit Widget</div>
            <div className="text-xs text-gray-500">facebook-ads/event-analytics</div>
          </div>
        </div>
        <button className="text-gray-500 hover:text-gray-700">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div className="w-full px-4">
        {/* Tabs */}
        <div className="flex gap-4 text-sm mt-4 mb-6">
          <button
            onClick={() => setActiveTab("general")}
            className={`pb-1 font-medium ${
              activeTab === "general"
                ? "border-b-2 border-blue-500 text-gray-900"
                : "text-gray-500"
            }`}
          >
            General
          </button>
          <button
            onClick={() => setActiveTab("data")}
            className={`pb-1 font-medium ${
              activeTab === "data"
                ? "border-b-2 border-blue-500 text-gray-900"
                : "text-gray-500"
            }`}
          >
            Data
          </button>
          <button
            onClick={() => setActiveTab("display")}
            className={`pb-1 font-medium ${
              activeTab === "display"
                ? "border-b-2 border-blue-500 text-gray-900"
                : "text-gray-500"
            }`}
          >
            Display
          </button>
        </div>

        {/* General Tab */}
        {activeTab === "general" && (
          <div className="pb-8">
            <div className="mb-5">
              <Label className="block text-xs text-gray-600 mb-2">Title</Label>
              <Input 
                value={data?.title || ""}
                onChange={(e) => handleChange({ title: e.target.value })}
                placeholder="Enter table title"
              />
            </div>
            <div className="mb-5">
              <Label className="block text-xs text-gray-600 mb-2">Caption</Label>
              <Input
                value={data?.caption || ""}
                onChange={(e) => handleChange({ caption: e.target.value })}
                placeholder="Enter table caption"
                className="placeholder:text-gray-400"
              />
            </div>
          </div>
        )}

        {/* Data Tab */}
        {activeTab === "data" && (
          <div className="pb-8">
            {/* Account */}
            <div className="mb-5">
              <Label className="block text-xs text-gray-600 mb-2">Account</Label>
              <Select defaultValue="not-connected">
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="not-connected">
                    Integration Not Connected
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Dimension */}
            <div className="mb-5">
              <Label className="block text-xs text-gray-600 mb-2">Dimension</Label>
              <Select defaultValue="campaign">
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="campaign">Campaign</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Secondary Dimension */}
            <div className="mb-5">
              <Label className="block text-xs text-gray-600 mb-2">
                Secondary Dimension
              </Label>
              <Select defaultValue="custom-event">
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="custom-event">Custom Event</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Metrics */}
            <div className="mb-5">
              <Label className="block text-xs text-gray-600 mb-2">Metrics</Label>
              <div className="w-full min-h-10 rounded-md border px-3 py-2 text-sm flex flex-wrap gap-2">
                {selectedMetrics.map((metric) => (
                  <span
                    key={metric}
                    className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs"
                  >
                    {metric}
                    <button
                      onClick={() => removeMetric(metric)}
                      className="hover:text-blue-900"
                    >
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </span>
                ))}
                <Input placeholder="Search metrics..." className="flex-1 min-w-[120px]" />
              </div>
            </div>

            {/* Limit */}
            <div className="mb-5">
              <Label className="block text-xs text-gray-600 mb-2">Limit</Label>
              <Input type="number" defaultValue="50" />
            </div>

            {/* Campaign */}
            <div className="mb-5">
              <Label className="block text-xs text-gray-600 mb-2">Campaign</Label>
              <Select defaultValue="all">
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Ad Set */}
            <div className="mb-5">
              <Label className="block text-xs text-gray-600 mb-2">Ad Set</Label>
              <Select defaultValue="all">
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Ad Name */}
            <div className="mb-5">
              <Label className="block text-xs text-gray-600 mb-2">Ad Name</Label>
              <Select defaultValue="all">
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Custom Event */}
            <div className="mb-5">
              <Label className="block text-xs text-gray-600 mb-2">Custom Event</Label>
              <Select defaultValue="all">
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Custom Event Source */}
            <div className="mb-5">
              <Label className="block text-xs text-gray-600 mb-2">
                Custom Event Source
              </Label>
              <Select defaultValue="web">
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="web">Web</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* PPC Markup */}
            <div className="mb-5">
              <Label className="block text-xs text-gray-600 mb-2">PPC Markup</Label>
              <Select defaultValue="show">
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="show">Show</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Attribution Setting */}
            <div className="mb-5">
              <Label className="block text-xs text-gray-600 mb-2">
                Attribution Setting
              </Label>
              <Select defaultValue="all">
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Sort Metric */}
            <div className="mb-5">
              <Label className="block text-xs text-gray-600 mb-2">Sort Metric</Label>
              <Select>
                <SelectTrigger className="w-full text-gray-400">
                  <SelectValue placeholder="Select sort metric..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="metric-1">Metric 1</SelectItem>
                  <SelectItem value="metric-2">Metric 2</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Sort Direction */}
            <div className="mb-8">
              <Label className="block text-xs text-gray-600 mb-2">Sort Direction</Label>
              <Select>
                <SelectTrigger className="w-full text-gray-400">
                  <SelectValue placeholder="Select sort direction..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asc">Ascending</SelectItem>
                  <SelectItem value="desc">Descending</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {/* Display Tab */}
        {activeTab === "display" && (
          <div className="pb-8">
            {/* Show Anomalies */}
            <div className="mb-5 flex items-center justify-between">
              <Label className="block text-xs text-gray-600">Show Anomalies</Label>
              <Switch />
            </div>

            {/* Show Forecast */}
            <div className="mb-5 flex items-center justify-between">
              <Label className="block text-xs text-gray-600">Show Forecast</Label>
              <Switch />
            </div>

            {/* Dynamic Height */}
            <div className="mb-5 flex items-center justify-between">
              <Label className="block text-xs text-gray-600">Dynamic Height</Label>
              <Switch defaultChecked />
            </div>

            {/* Show Table Header */}
            <div className="mb-5 flex items-center justify-between">
              <Label className="block text-xs text-gray-600">Show Table Header</Label>
              <Switch defaultChecked />
            </div>

            {/* Show Totals */}
            <div className="mb-5 flex items-center justify-between">
              <Label className="block text-xs text-gray-600">Show Totals</Label>
              <Switch />
            </div>

            {/* Wrap Text */}
            <div className="mb-5 flex items-center justify-between">
              <Label className="block text-xs text-gray-600">Wrap Text</Label>
              <Switch />
            </div>

            {/* Show Integration Icon */}
            <div className="mb-5 flex items-center justify-between">
              <Label className="block text-xs text-gray-600">Show Integration Icon</Label>
              <Switch />
            </div>

            {/* Text Color */}
            <div className="mb-5">
              <Label className="block text-xs text-gray-600 mb-2">Text Color</Label>
              <Input type="color" defaultValue="#555555" className="h-8 w-10 p-0" />
            </div>

            {/* Foreground */}
            <div className="mb-5">
              <Label className="block text-xs text-gray-600 mb-2">Foreground</Label>
              <Input type="color" defaultValue="#3b82f6" className="h-8 w-10 p-0" />
            </div>

            {/* Background */}
            <div className="mb-8">
              <Label className="block text-xs text-gray-600 mb-2">Background</Label>
              <Input type="color" defaultValue="#ffffff" className="h-8 w-10 p-0" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TableWidgetForm;

