import React from 'react'
import arrow from '../../images/icons/arrowRight.svg'
import styles from './styles.module.css'
import ModalHeader from '../ModalHeader/ModalHeader'
import { useDispatch, useSelector } from 'react-redux'
import { modalToggle } from '../../../store/features/boolensSlice'
import BasicInformation from '../BasicInformation/BasicInformation'
import PersonalInformation from '../PersonalInformation/PersonalInformation'

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
          <div className='flex flex-col gap-4'>
          <BasicInformation/>
          <PersonalInformation/>
          </div>
        </div>
    </div>

  )
}

export default AddModal