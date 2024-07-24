import React from "react";
import EmpPageHeader from "../../features/Components/EmpPageHeader/EmpPageHeader";
import EmployessCard from "../../features/Components/EmployeesCard/EmployessCard";
import InfoCard from "../../features/Components/InfoCard/InfoCard";
import SkillsComp from "../../features/Components/SkillsComp/SkillsComp";
import ExperienceComp from "../../features/Components/ExperienceComp/ExperienceComp";
import EducationComp from "../../features/Components/EducationComp/EducationComp";

function EmployeesDetails() {
  return(

    <div>
      <EmpPageHeader text="Oliwia Williams"/>
      <div className="flex mt-4">
      <div className="w-[50%]">
      <div className="flex gap-3 w-[100%]">
      <EmployessCard isDetail={true}/>
      <InfoCard headText="Personal Info"/>
      </div>
      <div className="mt-4 w-[100%]">
      <SkillsComp/>
      </div>
      </div>
      <div className="w-[50%] gap-4 flex flex-col pl-4">
      <ExperienceComp/>
      <div className="flex gap-3">
      <InfoCard headText="Salary Info"/>
      <EducationComp/>
      </div>
      </div>
      </div>
    </div>
  ) 
  
}

export default EmployeesDetails;
