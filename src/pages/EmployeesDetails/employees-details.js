import React from "react";
import EmpPageHeader from "../../features/Components/EmpPageHeader/EmpPageHeader";
import EmployessCard from "../../features/Components/EmployeesCard/EmployessCard";
import InfoCard from "../../features/Components/InfoCard/InfoCard";
import SkillsComp from "../../features/Components/SkillsComp/SkillsComp";
import ExperienceComp from "../../features/Components/ExperienceComp/ExperienceComp";
import EducationComp from "../../features/Components/EducationComp/EducationComp";
import { motion } from "framer-motion";

function EmployeesDetails() {
  return(

    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.5,
      ease: [0, 0.71, 0.2, 1.01],
    }}

    >
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
    </motion.div>
  ) 
  
}

export default EmployeesDetails;
