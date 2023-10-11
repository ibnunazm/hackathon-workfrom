import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarLayout from './components/NavbarLayout';
import FooterLayout from "./components/FooterLayout";
import Dashboard from "./pages/Dashboard";
import './App.css';


function App() {

  return (
    <div>
      <Router>
        <div className="flex flex-col">
          <div className="flex flex-col w-full">
            <div>
              <NavbarLayout />
              <Routes>
                <Route path="/" element={<Dashboard />} />
              </Routes>
              <FooterLayout />
            </div>
          </div>
        </div>
      </Router>
      <div className="flex">
      </div>
    </div>
  )
}

export default App
