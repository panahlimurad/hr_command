import React from "react";
import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";

function Layout() {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <Header />
      </div>
    </div>
  );
}

export default Layout;
