import { Routes, Route } from "react-router-dom";
import MainSideBar from "./components/MainSideBar";
import Dashboard from "./components/Dashboard";
import Clients from "./components/Clients";
import Reports from "./components/Reports";
import { Settings } from "lucide-react";
import ReportBuilder from "./components/ReportBuilder";
import Goals from "./pages/GoalsPage";
import AlertsPage from "./pages/AlertsPage";
import TasksPage from "./pages/TasksPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainSideBar />}>
        <Route index element={<Dashboard />} />

        <Route path="clients">
          <Route index element={<Clients />} /> {/* /clients */}
        </Route>

        <Route path="reports">
          <Route index element={<Reports />} />
          <Route path=":id" element={<ReportBuilder/>} />
        </Route>

        <Route path="goals">
          <Route index element={<Goals />} />
         
        </Route>


        <Route path="alerts">
          <Route index element={<AlertsPage />} />
         
        </Route>


        
        <Route path="tasks">
          <Route index element={<TasksPage />} />
         
        </Route>

        <Route path="account-setup" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;

///reports/all
