import { SiBaremetrics } from "react-icons/si";
import { LuBlocks, LuMap } from "react-icons/lu";
import { MdOutlineBrokenImage } from "react-icons/md";
import { ImEmbed2 } from "react-icons/im";
import { RiCustomSize } from "react-icons/ri";
import type { IconType } from "react-icons";

import { type ReportWidgetType } from "./reportTypes";

type ReportElementDefinition = {
  id: string;
  label: string;
  icon: IconType;
  widgetType: ReportWidgetType;
};

const reportElements: ReportElementDefinition[] = [
  {
    id: "metric",
    label: "Metric",
    icon: SiBaremetrics,
    widgetType: "metric",
  },
  {
    id: "chart",
    label: "Chart",
    icon: LuBlocks,
    widgetType: "chart",
  },
  {
    id: "map",
    label: "Map",
    icon: LuMap,
    widgetType: "map",
  },
  {
    id: "table",
    label: "Table",
    icon: RiCustomSize,
    widgetType: "table",
  },
  {
    id: "image",
    label: "Image",
    icon: MdOutlineBrokenImage,
    widgetType: "image",
  },
  {
    id: "embed",
    label: "Embed",
    icon: ImEmbed2,
    widgetType: "embed",
  },
  {
    id: "custom",
    label: "Custom",
    icon: SiBaremetrics,
    widgetType: "custom",
  },
];

function ReportElements() {
  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    widgetType: ReportWidgetType
  ) => {
    e.dataTransfer.setData("widgetType", widgetType);
    e.dataTransfer.effectAllowed = "copy";
  };

  return (
    <div className="w-full h-full border-l">
      {reportElements.map(({ id, label, icon: Icon, widgetType }) => (
        <div
          draggable
          onDragStart={(e) => handleDragStart(e, widgetType)}
          key={id}
          role="button"
          aria-label={`Drag ${label} widget to dashboard`}
          tabIndex={0}
          className="flex flex-col items-center justify-center py-6 gap-1 cursor-grab active:cursor-grabbing text-gray-600 hover:bg-gray-50 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
        >
          <Icon className="text-xl" aria-hidden="true" />
          <span className="text-sm text-gray-500">{label}</span>
        </div>
      ))}
    </div>
  );
}

export default ReportElements;
