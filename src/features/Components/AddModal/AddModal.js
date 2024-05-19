import React from 'react'
import arrow from '../../images/icons/arrowRight.svg'
import styles from './styles.module.css'
import ModalHeader from '../ModalHeader/ModalHeader'
import { useDispatch, useSelector } from 'react-redux'
import { modalToggle } from '../../../store/features/boolensSlice'
import BasicInformation from '../BasicInformation/BasicInformation'
import PersonalInformation from '../PersonalInformation/PersonalInformation'
import ExperienceInformation from '../ExperienceInformation/ExperienceInformation'
import SkillsInformation from '../SkillsInformation/SkillsInformation'
import EducationInformation from '../EducationInformation/EducationInformation'

function AddModal() {
  const value = useSelector(state=>state.boolean.value)
  const dispatch = useDispatch()

  return (
    <div className={`${value ? styles.container: styles.hiddenContainer}`}>
        <div className={styles.innerContainer}>
           <div onClick={()=>dispatch(modalToggle())} className={`${value ? styles.arrowIcon : styles.arrowiconHidden}`}>
            <img src={arrow} alt='arrow'/>
           </div>
          <ModalHeader/>
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
        </div>
    </div>

  )
}

export default AddModal