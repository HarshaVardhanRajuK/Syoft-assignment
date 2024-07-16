import { Routes, Route } from "react-router-dom";
import AuthSection from "./pages/AuthSection";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";
import Navbar from "./components/Navbar";
import NewComponent from "./components/NewComponent";

import "./App.css";

function App() {
  return (
      <><Navbar />
    <main className="min-h-[92vh] flex flex-col justify-center md:justify-normal bg-slate-800 md:bg-[#F1FAFF]">
      <div className="flex md:flex-row flex-col">
        <Routes>
          <Route path="/" element={<AuthSection />}>
            <Route path="/" element={<NewComponent />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="/user-dashboard" element={<UserDashboard />} />
        </Routes>
      </div>
    </main></>
  );
}

export default App;
