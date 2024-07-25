import React from "react";
import PageHeader from "../../features/Components/PageHeader/PageHeader";
import DepartmentsCard from "../../features/Components/DepartmentsCard/DepartmentsCard";

function Departments() {
  return (
    <div className="w-full">
      <div>
        <PageHeader/>
      </div>
      <div className="mt-4">
        <DepartmentsCard  />
      </div>
    </div>
  );
}

export default Departments;
