import { Routes, Route } from "react-router-dom";
import MainSideBar from "./components/MainSideBar";
import Dashboard from "./components/Dashboard";
import Clients from "./components/Clients";
import Reports from "./components/Reports";
import ReportBuilder from "./components/ReportBuilder";
import Goals from "./pages/GoalsPage";
import AlertsPage from "./pages/AlertsPage";
import TasksPage from "./pages/TasksPage";
import AuthPage from "./components/AuthPage";
import Integrations from "./components/Integrations";
import { Settings } from "lucide-react";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainSideBar />}>
        <Route index element={<Dashboard />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/signup" element={<AuthPage />} />
        <Route path="clients" element={<Clients />} />
        <Route path="reports">
          <Route index element={<Reports />} />
          <Route path=":id" element={<ReportBuilder />} />
        </Route>
        <Route path="goals" element={<Goals />} />
        <Route path="alerts" element={<AlertsPage />} />
        <Route path="tasks" element={<TasksPage />} />
        <Route path="integrations" element={<Integrations />} />
        <Route path="account-setup" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
