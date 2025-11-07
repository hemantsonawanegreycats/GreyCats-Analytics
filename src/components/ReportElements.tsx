import { SiBaremetrics } from "react-icons/si";
import { LuBlocks } from "react-icons/lu";
import { MdOutlineBrokenImage } from "react-icons/md";
import { ImEmbed2 } from "react-icons/im";
import { RiCustomSize } from "react-icons/ri";
import { useState } from "react";

function ReportElements() {
  const [collabesState, setCollabesState] = useState<boolean>(false);
  return (
    <>
      <div
        className={`${
          collabesState ? "w-70" : "hidden"
        } w-70 h-full  -left-60 bg-background transition-all duration-300 ease-in-out `}
      ></div>

      <div className="w-24 relative  h-full border-l ">
        <div
          onClick={() => setCollabesState(!collabesState)}
          className="flex flex-col items-center justify-center py-6 gap-1 "
        >
          <SiBaremetrics className="text-xl" />
          <span className="text-sm text-gray-500">Metrics</span>
        </div>
        <div
          onClick={() => setCollabesState(!collabesState)}
          className="flex flex-col items-center justify-center py-6 gap-1"
        >
          <LuBlocks className="text-xl" />
          <span className="text-sm text-gray-500">Metrics</span>
        </div>{" "}
        <div
          onClick={() => setCollabesState(!collabesState)}
          className="flex flex-col items-center justify-center py-6 gap-1"
        >
          <MdOutlineBrokenImage className="text-xl" />
          <span className="text-sm text-gray-500">Metrics</span>
        </div>{" "}
        <div
          onClick={() => setCollabesState(!collabesState)}
          className="flex flex-col items-center justify-center py-6 gap-1"
        >
          <ImEmbed2 className="text-xl" />
          <span className="text-sm text-gray-500">Metrics</span>
        </div>
        <div
          onClick={() => setCollabesState(!collabesState)}
          className="flex flex-col items-center justify-center py-6 gap-1"
        >
          <RiCustomSize className="text-xl" />
          <span className="text-sm text-gray-500">Metrics</span>
        </div>
        <div
          onClick={() => setCollabesState(!collabesState)}
          className="flex flex-col items-center justify-center py-6 gap-1"
        >
          <SiBaremetrics className="text-xl" />
          <span className="text-sm text-gray-500">Metrics</span>
        </div>
      </div>
    </>
  );
}

export default ReportElements;
