import React from 'react'
import arrow from '../../images/icons/arrowRight.svg'
import styles from './styles.module.css'
import ModalHeader from '../ModalHeader/ModalHeader'
import { useDispatch, useSelector } from 'react-redux'
import { modalToggle } from '../../../store/features/boolensSlice'
import CreateEmployeComp from '../CreateEmployeComp/CreateEmployeComp'
import CreateDepartamentComp from '../CreateDepartamentComp/CreateDepartamentComp'
import { useLocation } from 'react-router-dom'


function AddModal() {
  const value = useSelector(state=>state.boolean.value)
  const location = useLocation();

  const { pathname } = location;

  const dispatch = useDispatch()

  return (
    <div className={`${value ? styles.container: styles.hiddenContainer}`}>
        <div className={styles.innerContainer}>
           <div onClick={()=>dispatch(modalToggle())} className={`${value ? styles.arrowIcon : styles.arrowiconHidden}`}>
            <img src={arrow} alt='arrow'/>
           </div>
          <ModalHeader title={pathname === "/employees" ? "Create Employee" :  pathname === "/departaments" ? "Create Departament" : null}/>
          {pathname === "/employees" ? <CreateEmployeComp/> : pathname === "/departaments" ? <CreateDepartamentComp/> : null}
        </div>
    </div>

  )
}

export default AddModal