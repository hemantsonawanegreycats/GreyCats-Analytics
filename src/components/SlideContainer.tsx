import React from "react";

type SlideContainerProps = {
  title: string;
  containerRef: (el: HTMLDivElement | null) => void;
  children: React.ReactNode;
  id?: string;
};

export default function SlideContainer({ title, containerRef, children, id }: SlideContainerProps) {
  return (
    <div
      id={id}
      ref={containerRef}
      className="w-[90%] bg-white  h-auto  my-10 shadow pb-26  rounded-2xl "
    >
      <h1 className="text-lg p-4 font-semibold mb-4 text-gray-800">
        {title}
      </h1>
      {children}
    </div>
  );
}

