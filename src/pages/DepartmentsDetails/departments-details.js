import React from "react";
import DepartmentDetailsContainer from "../../features/Components/DepartmentDetailsContainer.js/DepartmentDetailsContainer";
import test from "../../features/images/icons/test.svg";

const DepartmentsDetails = () => {
  return (
    <div className="w-full">
      <div className="flex h-[50px] w-[70%] items-center justify-between">
        <div className="text-[32px] font-semibold text-textColor">
          Department Name
        </div>
        <div className="mr-3">
          <img class="h-10 w-10 rounded" src={test} alt="department logo" />
        </div>
      </div>
      <DepartmentDetailsContainer />
    </div>
  );
};

export default DepartmentsDetails;
