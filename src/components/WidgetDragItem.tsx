import React from "react";
import { MdDragIndicator } from "react-icons/md";
import { type ReportWidgetType } from "./reportTypes";

type WidgetDragItemProps = {
  title: string;
  description: string;
  type: ReportWidgetType;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, type: ReportWidgetType) => void;
};

export default function WidgetDragItem({ title, description, type, onDragStart }: WidgetDragItemProps) {
  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, type)}
      role="button"
      tabIndex={0}
      aria-label={`Drag ${title} widget`}
      className="w-full cursor-grab flex items-center py-4 border-b hover:bg-gray-50 transition-colors"
    >
      <div className="p-2 text-gray-500">
        <MdDragIndicator />
      </div>
      <div className="flex flex-col gap-1">
        <span className="font-medium text-sm">
          {title}
        </span>
        <span className="text-xs text-gray-400">
          {description}
        </span>
      </div>
    </div>
  );
}

