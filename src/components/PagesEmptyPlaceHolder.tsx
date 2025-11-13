import { FaCircleCheck } from "react-icons/fa6";
import type { IconType } from "react-icons";

type PagesEmptyPlaceHolderType = {
  smallIcon: IconType;
  Header: string;
  subHeader: string;
  pointers?: string[];
  buttonText: string;
  bigIcon: IconType;
};

function PagesEmptyPlaceHolder({
  smallIcon,
  subHeader,
  Header,
  pointers,
  buttonText,
  bigIcon,
}: PagesEmptyPlaceHolderType): React.JSX.Element {
  const SmallIcon = smallIcon;
  const BigIcon = bigIcon;

  return (
    <div className="w-full sm:w-lg md:w-xl shadow-2xl/5 lg:max-w-4xl mx-auto border flex flex-col md:flex-row items-center p-6 md:p-10 rounded-2xl gap-8 md:gap-12">
      {/* Left Side */}
      <div className="w-full md:w-1/2 flex flex-col justify-between text-center md:text-left">
        {/* Small Icon + Header */}
        <div>
          <div className="w-12 h-12 bg-accent flex justify-center items-center rounded-full mx-auto md:mx-0 mb-3">
            <SmallIcon className="scale-150" />
          </div>
          <span className="text-xl md:text-xl font-semibold block">{Header}</span>
        </div>

        {/* Subheader */}
        <div className="text-sm md:text-xs text-accent-foreground/70 mt-3">
          {subHeader}
        </div>

        {/* Pointers */}
        {pointers && (
          <div className="text-sm md:text-base mt-6 space-y-2">
            {pointers.map((pointer, index) => (
              <div key={index} className="flex items-center justify-center md:justify-start gap-2">
                <FaCircleCheck className="text-accent-foreground" />
                <span className="md:text-xs lg:text-xs">{pointer}</span>
              </div>
            ))}
          </div>
        )}

        {/* Button */}
        <div className="mt-6">
          <button className="px-5 cursor-pointer py-3 bg-accent-foreground text-accent rounded-[0.7rem] text-sm md:text-base font-medium hover:opacity-90 transition">
            {buttonText}
          </button>
        </div>
      </div>

      {/* Right Side (Icon) */}
      <div className="w-full  lg:w-1/3 md:w-1/3 flex items-center justify-center mt-6 md:mt-0">
        <BigIcon className="text-[8rem] sm:text-[8rem] md:text-[10rem] lg:text-[14rem] text-accent-foreground/90" />
      </div>
    </div>
  );
}

export default PagesEmptyPlaceHolder;
