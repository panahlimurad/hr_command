import React from 'react'
import EducationInformation from '../EducationInformation/EducationInformation'
import SkillsInformation from '../SkillsInformation/SkillsInformation'
import ExperienceInformation from '../ExperienceInformation/ExperienceInformation'
import PersonalInformation from '../PersonalInformation/PersonalInformation'
import BasicInformation from '../BasicInformation/BasicInformation'

function CreateEmployeComp() {
  return (

    <div className='flex gap-2'>
    <div className='w-[98%] flex flex-col items-center gap-4 h-full' >
  <BasicInformation/>
  <PersonalInformation/>
    </div>
    <div className='w-[98%] flex flex-col gap-4'>
      <ExperienceInformation/> 
      <SkillsInformation/>
      <EducationInformation/>
    </div>
  </div>
)
}

export default CreateEmployeComp