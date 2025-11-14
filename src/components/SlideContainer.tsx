import React from "react";

type SlideContainerProps = {
  title: string;
  containerRef: (el: HTMLDivElement | null) => void;
  children: React.ReactNode;
  id?: string;
  dateRange?: string;
};

export default function SlideContainer({ title, containerRef, children, id, dateRange }: SlideContainerProps) {
  return (
    <div
      id={id}
      ref={containerRef}
      className="w-[90%] bg-white h-auto my-10 shadow pb-10 rounded-2xl"
    >
      <div className="p-4 mb-4">
        <h1 className="text-lg font-semibold text-gray-800">
          {title}
        </h1>
        {dateRange && (
          <p className="text-sm text-gray-400 mt-1">
            {dateRange}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}

