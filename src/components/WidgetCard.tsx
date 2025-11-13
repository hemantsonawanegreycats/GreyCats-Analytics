import React from "react";
import { MdDragIndicator } from "react-icons/md";
import type { DashboardLayout } from "./ReportBuilder";

type WidgetCardProps = {
  widget: DashboardLayout;
  onContentClick: (widget: DashboardLayout) => void;
  children: React.ReactNode;
};

export default function WidgetCard({ widget, onContentClick, children }: WidgetCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden" style={{ position: 'relative', zIndex: 1 }}>
      <div
        className="drag-handle cursor-grab flex items-center justify-between px-3 py-2 bg-gray-50 border-b"
        aria-label="Drag widget to reposition"
      >
        <span className="text-sm font-medium text-gray-600">
          {widget.widgetType.toUpperCase()}
        </span>
        <MdDragIndicator className="text-gray-400" />
      </div>

      <div
        className="non-draggable p-3"
        onClick={(e) => {
          e.stopPropagation();
          onContentClick(widget);
        }}
      >
        {children}
      </div>
    </div>
  );
}

