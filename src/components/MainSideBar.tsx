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

function MainSideBar(): React.JSX.Element {
  const [activeTab, setActive] = useState("/");
  const location = useLocation();
  console.log(location.pathname); // 👉 gives you the current path (e.g. "/dashboard")

  const navigate = useNavigate();

  const handleChangeURL = (tab: string): void => {
    const path = tab === "/" ? "/" : `/${tab}`;
    navigate(path);
    setActive(tab);
  };

  return (
    <div className=" flex ">
      <SidebarProvider className="w-[16rem]">
        <Sidebar className="w-[16rem]  h-screen">
          <SidebarContent className="bg-white px-2 ">
            {/* Brand / Title */}
            <SidebarGroup>
              <SidebarGroupLabel className="p-0 w-full px-2 py-8 pb-9 border-b">
                <span className="text-xl">Analyst</span>
              </SidebarGroupLabel>
            </SidebarGroup>

            {/* MAIN */}
            <SidebarGroup>
              <SidebarGroupLabel className="uppercase mb-[0.4rem] tracking-wide text-[13px]  font-semibold text-muted-foreground/80 px-3">
                Main
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem key="dashboards">
                    <SidebarMenuButton
                      className={`text-[1rem]  font-normal h-11 px-4 hover:cursor-pointer data-[active=true]:bg-gray-100 ${
                        activeTab === "/" ? "bg-gray-100" : ""
                      } `}
                      isActive={activeTab === "/"}
                      onClick={() => handleChangeURL("/")}
                    >
                      <FiLayout
                        className={` ${
                          activeTab === "/" ? "text-2xl" : "text-gray-900"
                        }`}
                      />
                      <span
                        className={` ${
                          activeTab === "/" ? "" : "text-gray-900"
                        }`}
                      >
                        Dashboards
                      </span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem key="clients">
                    <SidebarMenuButton
                      className={`text-[1rem]  font-normal h-11 px-4 hover:cursor-pointer ${
                        activeTab === "clients" ? "bg-gray-100" : ""
                      }`}
                      isActive={activeTab === "clients"}
                      onClick={() => handleChangeURL("clients")}
                    >
                      <FiUsers
                        className={` ${
                          activeTab === "clients" ? "text-2xl" : "text-gray-600"
                        }`}
                      />
                      <span
                        className={` ${
                          activeTab === "clients" ? "" : "text-gray-600"
                        }`}
                      >
                        Clients
                      </span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem key="reports">
                    <SidebarMenuButton
                      className={`text-[1rem]  font-normal h-11 px-4 hover:cursor-pointer ${
                        activeTab === "reports" ? "bg-gray-100" : ""
                      }`}
                      isActive={activeTab === "reports"}
                      onClick={() => handleChangeURL("reports")}
                    >
                      <FiFileText
                        className={` ${
                          activeTab === "reports" ? "text-xl" : "text-gray-600"
                        }`}
                      />
                      <span
                        className={` ${
                          activeTab === "reports" ? "" : "text-gray-600"
                        }`}
                      >
                        Reports
                      </span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* WORK */}
            <SidebarGroup>
              <SidebarGroupLabel className="uppercase mb-[0.4rem] tracking-wide text-[13px]  font-semibold text-muted-foreground/80 px-3">
                Work
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem key="goals">
                    <SidebarMenuButton
                      className={`text-[1rem]  font-normal h-11 px-4 hover:cursor-pointer ${
                        activeTab === "goals" ? "bg-gray-100" : ""
                      }`}
                      isActive={activeTab === "goals"}
                      onClick={() => handleChangeURL("goals")}
                    >
                      <FiTarget
                        className={` ${
                          activeTab === "goals" ? "text-xl" : "text-gray-600"
                        }`}
                      />
                      <span
                        className={` ${
                          activeTab === "goals" ? "" : "text-gray-600"
                        }`}
                      >
                        Goals
                      </span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem key="tasks">
                    <SidebarMenuButton
                      className={`text-[1rem]  font-normal h-11 px-4 hover:cursor-pointer ${
                        activeTab === "tasks" ? "bg-gray-100" : ""
                      }`}
                      isActive={activeTab === "tasks"}
                      onClick={() => handleChangeURL("tasks")}
                    >
                      <FiCheckSquare
                        className={` ${
                          activeTab === "tasks" ? "text-xl" : "text-gray-600"
                        }`}
                      />
                      <span
                        className={` ${
                          activeTab === "tasks" ? "" : "text-gray-600"
                        }`}
                      >
                        Tasks
                      </span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem key="alerts">
                    <SidebarMenuButton
                      className={`text-[1rem]  font-normal h-11 px-4 hover:cursor-pointer ${
                        activeTab === "alerts" ? "bg-gray-100" : ""
                      }`}
                      isActive={activeTab === "alerts"}
                      onClick={() => handleChangeURL("alerts")}
                    >
                      <FiBell
                        className={` ${
                          activeTab === "alerts" ? "text-xl" : "text-gray-600"
                        }`}
                      />
                      <span
                        className={` ${
                          activeTab === "alerts" ? "" : "text-gray-600"
                        }`}
                      >
                        Alerts
                      </span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* DATA */}
            <SidebarGroup>
              <SidebarGroupLabel className="uppercase mb-[0.4rem] tracking-wide text-[13px]  font-semibold text-muted-foreground/80 px-3">
                Data
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem key="sources">
                    <SidebarMenuButton
                      className={`text-[1rem]  font-normal h-11 px-4 hover:cursor-pointer ${
                        activeTab === "sources" ? "bg-gray-100" : ""
                      }`}
                      isActive={activeTab === "sources"}
                      onClick={() => handleChangeURL("sources")}
                    >
                      <FiDatabase
                        className={` ${
                          activeTab === "sources" ? "text-xl" : "text-gray-600"
                        }`}
                      />
                      <span
                        className={` ${
                          activeTab === "sources" ? "" : "text-gray-600"
                        }`}
                      >
                        Sources
                      </span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem key="templates">
                    <SidebarMenuButton
                      className={`text-[1rem]  font-normal h-11 px-4 hover:cursor-pointer ${
                        activeTab === "templates" ? "bg-gray-100" : ""
                      }`}
                      isActive={activeTab === "templates"}
                      onClick={() => handleChangeURL("templates")}
                    >
                      <FiLayers
                        className={` ${
                          activeTab === "templates"
                            ? "text-xl"
                            : "text-gray-600"
                        }`}
                      />
                      <span
                        className={` ${
                          activeTab === "templates" ? "" : "text-gray-600"
                        }`}
                      >
                        Templates
                      </span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* SETTINGS */}
            <SidebarGroup>
              <SidebarGroupLabel className="uppercase tracking-wide mb-2 text-[13px]  font-semibold text-muted-foreground/80 px-3">
                Settings
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem key="bulk-actions">
                    <SidebarMenuButton
                      className={`text-[1rem]  font-normal h-11 px-4 hover:cursor-pointer ${
                        activeTab === "bulk-actions" ? "bg-gray-100" : ""
                      }`}
                      isActive={activeTab === "bulk-actions"}
                      onClick={() => handleChangeURL("bulk-actions")}
                    >
                      <FiDownload
                        className={` ${
                          activeTab === "bulk-actions"
                            ? "text-xl"
                            : "text-gray-600"
                        }`}
                      />
                      <span
                        className={` ${
                          activeTab === "bulk-actions" ? "" : "text-gray-600"
                        }`}
                      >
                        Bulk Actions
                      </span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem key="account-setup">
                    <SidebarMenuButton
                      className={`text-[1rem]  font-normal h-11 px-4 hover:cursor-pointer ${
                        activeTab === "account-setup" ? "bg-gray-100" : ""
                      }`}
                      isActive={activeTab === "account-setup"}
                      onClick={() => handleChangeURL("account-setup")}
                    >
                      <FiSettings
                        className={` ${
                          activeTab === "account-setup"
                            ? "text-2xl"
                            : "text-gray-600"
                        }`}
                      />
                      <span
                        className={` ${
                          activeTab === "account-setup" ? "" : "text-gray-600"
                        }`}
                      >
                        Account Setup
                      </span>
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
                <div className="min-w-0">
                  <div className="text-sm font-medium leading-tight">
                    Alex Cohen
                  </div>
                  <div className="text-xs text-muted-foreground leading-tight">
                    Analyst
                  </div>
                </div>
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
