import React from "react";
import EmpPageHeader from "../../features/Components/EmpPageHeader/EmpPageHeader";
import EmployessCard from "../../features/Components/EmployeesCard/EmployessCard";
import InfoCard from "../../features/Components/InfoCard/InfoCard";
import SkillsComp from "../../features/Components/SkillsComp/SkillsComp";
import ExperienceComp from "../../features/Components/ExperienceComp/ExperienceComp";

function EmployeesDetails() {
  return(

    <div>
      <EmpPageHeader text="Oliwia Williams"/>
      <div className="flex mt-4 px-5">
      <div className="w-[50%]">
      <div className="flex gap-3 w-[100%]">
      <EmployessCard isDetail={true}/>
      <InfoCard/>
      </div>
      <div className="mt-4 w-[100%]">
      <SkillsComp/>
      </div>
      </div>
      <div className="w-[50%]">
      <ExperienceComp/>
      </div>
      </div>
    </div>
  ) 
  
}

export default EmployeesDetails;
