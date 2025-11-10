import { FaTasks } from "react-icons/fa"
import { FaCircleCheck } from "react-icons/fa6"
import { PiListStarLight } from "react-icons/pi"
import { IconType } from "react-icons";

type PagesEmptyPlaceHolderType = {
    smallIcon:IconType,
    Header:string,
    subHeader:string,
    pointers?:string[]
    buttonText:string,
    bigIcon:IconType,
}


function PagesEmptyPlaceHolder({smallIcon,subHeader,Header,pointers,buttonText,bigIcon}:PagesEmptyPlaceHolderType):React.JSX.Element {
  return (
    <div className="w-[50%] mb-38 border  flex  p-10 rounded-2xl">
    <div className="w-1/2">
      <div className="flex flex-col justify-around ">
        <div className="flex flex-col flex-1">
          <div className="w-12 h-12 bg-accent flex justify-center items-center rounded-full mb-2">
            <FaTasks className="scale-150" />
          </div>
          <span className="text-xl font-semibold">
            Effortless Agency Management
          </span>
        </div>

        <div className="text-xs flex-1 mt-4">
          Streamspanne your agency’s workflows and boost productivity at
          scale with simpspanfied task management.
        </div>

        <div className="text-sm flex-1 mt-6 ">
          <div className="flex items-center gap-2 ">
            <FaCircleCheck />
            <span>Create and assign new tasks</span>
          </div>
          <div className="flex items-center mt-2  gap-2">
            <FaCircleCheck />
            <span>Schedule repeat and recurring tasks</span>
          </div>
          <div className="flex items-center mt-2  gap-2">
            <FaCircleCheck />
            <span>Report on completed tasks</span>
          </div>
        </div>

        <div className="mt-6">
          <button className="px-4 py-3 bg-accent-foreground text-accent rounded-[0.7rem] text-sm">
            Create Task
          </button>
        </div>
      </div>
    </div>
    <div className="w-1/2  flex items-center justify-center">
      <PiListStarLight className="text-[15rem]" />
    </div>
  </div>
  )
}

export default PagesEmptyPlaceHolder
