import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "./ui/sidebar";
import type React from "react";
import {
  FiLayout,
  FiUsers,
  FiFileText,
  FiTarget,
  FiCheckSquare,
  FiBell,
  FiDatabase,
  FiLayers,
  FiDownload,
  FiSettings,
} from "react-icons/fi";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { LuCircleChevronRight } from "react-icons/lu";

function MainSideBar(): React.JSX.Element {
  const location = useLocation();
  const [activeTab, setActive] = useState(location.pathname);
  const [collabsState, setcollabsState] = useState<boolean>(false);

  console.log(location.pathname, activeTab); // 👉 gives you the current path (e.g. "/dashboard")

  const navigate = useNavigate();

  const handleChangeURL = (path: string): void => {
    navigate(path);
    setActive(path);
  };

  return (
    <div className=" flex ">
      <SidebarProvider
        className={` transition-[width] duration-300 ease-in-out ${
          !collabsState ? "w-[16rem]" : "w-22"
        } `}
      >
        <Sidebar
          className={`transition-[width] duration-300 ease-in-out ${
            !collabsState ? "w-[16rem]" : "w-22"
          }   h-screen`}
        >
          <SidebarContent
            className={` ${!collabsState ? "px-2" : "px-0"}bg-white px-2 `}
          >
            {/* Brand / Title */}
            <SidebarGroup>
              <SidebarGroupLabel className="p-0 w-full relative justify-between px-2 py-8 pb-9 border-b">
                <span className="text-xl">Analyst</span>
                <span
                  className="absolute right-0"
                  onClick={() => setcollabsState(!collabsState)}
                >
                  <LuCircleChevronRight
                    className={`text-xl transform ${
                      collabsState ? "scale-x-[1]" : "scale-x-[-1]"
                    }`}
                  />
                </span>
              </SidebarGroupLabel>
            </SidebarGroup>

            {/* MAIN */}
            <SidebarGroup>
              <SidebarGroupLabel
                className={`uppercase mb-[0.4rem] tracking-wide text-[13px]  font-semibold text-muted-foreground/80 ${
                  !collabsState
                    ? "px-3"
                    : "px-0 flex justify-center text-[9px] font-bold "
                }`}
              >
                Main
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem key="dashboards">
                    <SidebarMenuButton
                      className={`text-[1rem]  font-normal h-11 transition-[width] duration-300 ease-in-out ${
                        !collabsState
                          ? "px-4"
                          : "flex justify-center items-center"
                      } hover:cursor-pointer data-[active=true]:bg-gray-100 ${
                        /^\/$/.test(activeTab) ? "bg-gray-100" : ""
                      } `}
                      isActive={activeTab === "/"}
                      onClick={() => handleChangeURL("/")}
                    >
                      <FiLayout
                        className={` ${
                          /^\/$/.test(activeTab) ? "text-xl" : "text-gray-600"
                        }`}
                      />
                      {!collabsState ? (
                        <span
                          className={` ${
                            /^\/$/.test(activeTab) ? "" : "text-gray-600"
                          }`}
                        >
                          Dashboards
                        </span>
                      ) : (
                        ""
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem key="clients">
                    <SidebarMenuButton
                      className={`text-[1rem]  font-normal h-11 transition-[width] duration-300 ease-in-out ${
                        !collabsState
                          ? "px-4"
                          : "flex justify-center items-center"
                      } hover:cursor-pointer data-[active=true]:bg-gray-100 ${
                        /^\/clients(\/|$)/.test(activeTab) ? "bg-gray-100" : ""
                      }`}
                      isActive={activeTab === "/clients"}
                      onClick={() => handleChangeURL("/clients")}
                    >
                      <FiUsers
                        className={` ${
                          /^\/clients(\/|$)/.test(activeTab)
                            ? "text-xl"
                            : "text-gray-600"
                        }`}
                      />
                      {!collabsState ? (
                        <span
                          className={` ${
                            /^\/clients(\/|$)/.test(activeTab) ? "" : "text-gray-600"
                          }`}
                        >
                          Clients
                        </span>
                      ) : (
                        ""
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem key="reports">
                    <SidebarMenuButton
                      className={`text-[1rem]  font-normal h-11 transition-[width] duration-300 ease-in-out ${
                        !collabsState
                          ? "px-4"
                          : "flex justify-center items-center"
                      } hover:cursor-pointer data-[active=true]:bg-gray-100 ${
                        /^\/reports(\/|$)/.test(activeTab) ? "bg-gray-100" : ""
                      }`}
                      isActive={activeTab === "/reports"}
                      onClick={() => handleChangeURL("/reports")}
                    >
                      <FiFileText
                        className={` ${
                          /^\/reports(\/|$)/.test(activeTab) ? "text-xl" : "text-gray-600"
                        }`}
                      />
                      {!collabsState ? (
                        <span
                          className={` ${
                            /^\/reports(\/|$)/.test(activeTab) ? "" : "text-gray-600"
                          }`}
                        >
                          Reports
                        </span>
                      ) : (
                        ""
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* WORK */}
            <SidebarGroup>
              <SidebarGroupLabel
                className={`uppercase mb-[0.4rem] tracking-wide text-[13px]  font-semibold text-muted-foreground/80 ${
                  !collabsState
                    ? "px-3"
                    : "px-0 flex justify-center text-[9px] font-bold "
                }`}
              >
                Work
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem key="goals">
                    <SidebarMenuButton
                      className={`text-[1rem]  font-normal h-11 transition-[width] duration-300 ease-in-out ${
                        !collabsState
                          ? "px-4"
                          : "flex justify-center items-center"
                      } hover:cursor-pointer data-[active=true]:bg-gray-100 ${
                        /^\/goals(\/|$)/.test(activeTab) ? "bg-gray-100" : ""
                      }`}
                      isActive={activeTab === "/goals"}
                      onClick={() => handleChangeURL("/goals")}
                    >
                      <FiTarget
                        className={` ${
                          /^\/goals(\/|$)/.test(activeTab) ? "text-xl" : "text-gray-600"
                        }`}
                      />
                      {!collabsState ? (
                        <span
                          className={` ${
                            /^\/goals(\/|$)/.test(activeTab) ? "" : "text-gray-600"
                          }`}
                        >
                          Goals
                        </span>
                      ) : (
                        ""
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem key="tasks">
                    <SidebarMenuButton
                      className={`text-[1rem]  font-normal h-11 transition-[width] duration-300 ease-in-out ${
                        !collabsState
                          ? "px-4"
                          : "flex justify-center items-center"
                      } hover:cursor-pointer data-[active=true]:bg-gray-100 ${
                        /^\/tasks(\/|$)/.test(activeTab) ? "bg-gray-100" : ""
                      }`}
                      isActive={activeTab === "/tasks"}
                      onClick={() => handleChangeURL("/tasks")}
                    >
                      <FiCheckSquare
                        className={` ${
                          /^\/tasks(\/|$)/.test(activeTab) ? "text-xl" : "text-gray-600"
                        }`}
                      />
                      {!collabsState ? (
                        <span
                          className={` ${
                            /^\/tasks(\/|$)/.test(activeTab) ? "" : "text-gray-600"
                          }`}
                        >
                          Tasks
                        </span>
                      ) : (
                        ""
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem key="alerts">
                    <SidebarMenuButton
                      className={`text-[1rem]  font-normal h-11 transition-[width] duration-300 ease-in-out ${
                        !collabsState
                          ? "px-4"
                          : "flex justify-center items-center"
                      } hover:cursor-pointer data-[active=true]:bg-gray-100 ${
                        /^\/alerts(\/|$)/.test(activeTab) ? "bg-gray-100" : ""
                      }`}
                      isActive={activeTab === "/alerts"}
                      onClick={() => handleChangeURL("/alerts")}
                    >
                      <FiBell
                        className={` ${
                          /^\/alerts(\/|$)/.test(activeTab) ? "text-xl" : "text-gray-600"
                        }`}
                      />
                      {!collabsState ? (
                        <span
                          className={` ${
                            /^\/alerts(\/|$)/.test(activeTab) ? "" : "text-gray-600"
                          }`}
                        >
                          Alerts
                        </span>
                      ) : (
                        ""
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* DATA */}
            <SidebarGroup>
              <SidebarGroupLabel
                className={`uppercase mb-[0.4rem] tracking-wide text-[13px]  font-semibold text-muted-foreground/80 ${
                  !collabsState
                    ? "px-3"
                    : "px-0 flex justify-center text-[9px] font-bold "
                }`}
              >
                Data
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem key="sources">
                    <SidebarMenuButton
                      className={`text-[1rem]  font-normal h-11 transition-[width] duration-300 ease-in-out ${
                        !collabsState
                          ? "px-4"
                          : "flex justify-center items-center"
                      } hover:cursor-pointer data-[active=true]:bg-gray-100 ${
                        /^\/sources(\/|$)/.test(activeTab) ? "bg-gray-100" : ""
                      }`}
                      isActive={activeTab === "/sources"}
                      onClick={() => handleChangeURL("/sources")}
                    >
                      <FiDatabase
                        className={` ${
                          /^\/sources(\/|$)/.test(activeTab) ? "text-xl" : "text-gray-600"
                        }`}
                      />
                      {!collabsState ? (
                        <span
                          className={` ${
                            /^\/sources(\/|$)/.test(activeTab) ? "" : "text-gray-600"
                          }`}
                        >
                          Sources
                        </span>
                      ) : (
                        ""
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem key="templates">
                    <SidebarMenuButton
                      className={`text-[1rem]  font-normal h-11 transition-[width] duration-300 ease-in-out ${
                        !collabsState
                          ? "px-4"
                          : "flex justify-center items-center"
                      } hover:cursor-pointer data-[active=true]:bg-gray-100 ${
                        /^\/templates(\/|$)/.test(activeTab) ? "bg-gray-100" : ""
                      }`}
                      isActive={activeTab === "/templates"}
                      onClick={() => handleChangeURL("/templates")}
                    >
                      <FiLayers
                        className={` ${
                          /^\/templates(\/|$)/.test(activeTab)
                            ? "text-xl"
                            : "text-gray-600"
                        }`}
                      />
                      {!collabsState ? (
                        <span
                          className={` ${
                            /^\/templates(\/|$)/.test(activeTab) ? "" : "text-gray-600"
                          }`}
                        >
                          Templates
                        </span>
                      ) : (
                        ""
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* SETTINGS */}
            <SidebarGroup>
              <SidebarGroupLabel
                className={`uppercase mb-[0.4rem] tracking-wide text-[13px]  font-semibold text-muted-foreground/80 ${
                  !collabsState
                    ? "px-3"
                    : "px-0 flex justify-center text-[9px] font-bold "
                }`}
              >
                Settings
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem key="bulk-actions">
                    <SidebarMenuButton
                      className={`text-[1rem]  font-normal h-11 transition-[width] duration-300 ease-in-out ${
                        !collabsState
                          ? "px-4"
                          : "flex justify-center items-center"
                      } hover:cursor-pointer data-[active=true]:bg-gray-100 ${
                        /^\/bulk-actions(\/|$)/.test(activeTab) ? "bg-gray-100" : ""
                      }`}
                      isActive={activeTab === "/bulk-actions"}
                      onClick={() => handleChangeURL("/bulk-actions")}
                    >
                      <FiDownload
                        className={` ${
                          /^\/bulk-actions(\/|$)/.test(activeTab)
                            ? "text-xl"
                            : "text-gray-600"
                        }`}
                      />
                      {!collabsState ? (
                        <span
                          className={` ${
                            /^\/bulk-actions(\/|$)/.test(activeTab) ? "" : "text-gray-600"
                          }`}
                        >
                          Bulk Actions
                        </span>
                      ) : (
                        ""
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem key="account-setup">
                    <SidebarMenuButton
                      className={`text-[1rem]  font-normal h-11 transition-[width] duration-300 ease-in-out ${
                        !collabsState
                          ? "px-4"
                          : "flex justify-center items-center"
                      } hover:cursor-pointer data-[active=true]:bg-gray-100 ${
                        /^\/account-setup(\/|$)/.test(activeTab) ? "bg-gray-100" : ""
                      }`}
                      isActive={activeTab === "/account-setup"}
                      onClick={() => handleChangeURL("/account-setup")}
                    >
                      <FiSettings
                        className={` ${
                          /^\/account-setup(\/|$)/.test(activeTab)
                            ? "text-xl"
                            : "text-gray-600"
                        }`}
                      />
                      {!collabsState ? (
                        <span
                          className={` ${
                            /^\/account-setup(\/|$)/.test(activeTab) ? "" : "text-gray-600"
                          }`}
                        >
                          Account Setup
                        </span>
                      ) : (
                        ""
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* Footer - User Card */}
            <SidebarFooter className="mt-auto">
              <div className="flex items-center gap-3 rounded-md px-2 py-3">
                <div className="flex size-9 items-center justify-center rounded-full bg-zinc-700 text-xs font-medium text-zinc-100">
                  AV
                </div>
                {!collabsState ? (
                  <div className="min-w-0">
                    <div className="text-sm font-medium leading-tight">
                      Alex Cohen
                    </div>
                    <div className="text-xs text-muted-foreground leading-tight">
                      Analyst
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </SidebarFooter>
          </SidebarContent>
        </Sidebar>
      </SidebarProvider>
      <main className="flex-1 bg-[#F9FAFB]  overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default MainSideBar;
