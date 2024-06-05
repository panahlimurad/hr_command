import React from "react";
import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";
import Dashboard from "../../pages/Dashboard/dashboard";
import { Route, Routes, useLocation } from "react-router-dom";
import AboutUs from "../../pages/AboutUs/about_us";
import Activity from "../../pages/Activity/activity";
import Employees from "../../pages/Employees/employees";
import EmployeesDetails from "../../pages/EmployeesDetails/employees-details";
import Login from "../../pages/Login/login";
import Register from "../../pages/Register/register";
import Vacancies from "../../pages/Vacancies/vacancies";
import Departaments from "../../pages/Departaments/departaments";
import AddModal from "../Components/AddModal/AddModal";
import Forgot_password from "../../pages/ForgotPassword/forgot_password";

function Layout() {
  const location = useLocation();

  const { pathname } = location;

  return (
    <div>
      <div className="flex w-full">
        {pathname !== "/login" && pathname !== "/register" && pathname !== "/forgot_password" && (
          <div className="w-[20%]">
            <Sidebar />
          </div>
        )}
        <div className={`flex flex-col  ${pathname === "/login" || pathname === "/register" || pathname === "/forgot_password" ? "w-[100%]" : "w-[80%]"}`}>
          {pathname !== "/login" && pathname !== "/register" && pathname !== "/forgot_password" && <Header />}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/about_us" element={<AboutUs />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/employees-details" element={<EmployeesDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/vacancies" element={<Vacancies />} />
            <Route path="/departaments" element={<Departaments />} />
            <Route path="/forgot_password" element={<Forgot_password />} />
          </Routes>
        </div>
        <AddModal/>
      </div>
    </div>
  );
}

export default Layout;
