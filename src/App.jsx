import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarLayout from './components/NavbarLayout';
import Sidebar from './components/Sidebar';
import FooterLayout from "./components/FooterLayout";
import Dashboard from "./pages/Dashboard";
import UseCase from "./pages/UseCase";
import DashboardLoggedin from "./pages/DashboardLoggedin";
import PropertiesLoggedIn from "./pages/PropertiesLoggedIn";
import TransactionLoggedIn from "./pages/TransactionLoggedIn";
import './App.css';


function App() {

  return (
    <div>
      <Router>
        <div className="flex flex-col">
          <div className="flex flex-col w-full">
            <Routes>
              <Route path="/" element={<HomeWithNav />} />
              <Route path="/useCase" element={<UseCaseWithNav />} />
              <Route path="/dashboard" element={<DashboardWithSide />} />
              <Route path="/properties" element={<PropertiesWithSide />} />
              <Route path="/transaction" element={<TransactionWithSide />} />
            </Routes>
          </div>
        </div>
      </Router>
      <div className="flex">
      </div>
    </div>
  )
}

function HomeWithNav() {
  return (
    <div>
      <NavbarLayout />
      <Dashboard />
      <FooterLayout />
    </div>
  );
}

function UseCaseWithNav() {
  return (
    <div>
      <NavbarLayout />
      <UseCase />
      <FooterLayout />
    </div>
  );
}
function DashboardWithSide() {
  return (
    <div className="flex">
      <Sidebar />
      <DashboardLoggedin />
    </div>
  );
}
function PropertiesWithSide() {
  return (
    <div className="flex">
      <Sidebar />
      <PropertiesLoggedIn />
    </div>
  );
}
function TransactionWithSide() {
  return (
    <div className="flex">
      <Sidebar />
      <TransactionLoggedIn />
    </div>
  );
}

export default App
