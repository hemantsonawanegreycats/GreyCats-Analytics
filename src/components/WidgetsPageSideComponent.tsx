import { IoIosMenu } from "react-icons/io";

const pages = [
  {
    label: "Google Ads",
    pages: [
      {
        innerlabel: "Google Ads clicks",
        sublabel: "total clicks",
      },
      {
        innerlabel: "Google spends",
        sublabel: "total ads spends",
      },
    ],
  },
  {
    label: "Facebook Ads",
    pages: [
      {
        innerlabel: "facebook post",
        sublabel: "Empaded spacif post",
      },
    ],
  },
];

function WidgetsPageSideComponent() {
  return (
    <div className="w-1/8  bg-sidebar-primary-foreground border-r h-full">
      <div className="w-full px-4 p-3  font-medium">Pages</div>

      <div className="w-full p-4">
        {pages.map((p, i) => (
          <div className={`flex flex-col gap-2 ${i === 0 ? "" : "my-4"}`}>
            <div>
              <span className="lg:text-xs text-gray-500 font-medium w-full">
                {p.label}
              </span>
            </div>
            {p.pages.map((ps) => (
              <div className="w-full gap-2 border rounded-[0.6rem] p-4  flex items-center">
                <div>
                  <IoIosMenu className="text-2xl text-gray-500" />
                </div>
                <div className="flex flex-col gap-[0.2rem]">
                  <span className="font-medium text-sm">{ps.innerlabel}</span>
                  <span className="font-normal text-xs text-gray-600">
                    {ps.sublabel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WidgetsPageSideComponent;
