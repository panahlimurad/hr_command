import React from "react";
import styles from './sidebar.module.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PeopleIcon from '@mui/icons-material/People';
import EventIcon from '@mui/icons-material/Event';
import profileDefault from '../../images/icons/profileDefault.svg'
import InfoIcon from '@mui/icons-material/Info';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Link } from "react-router-dom";
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';

function Sidebar() {
  return (
  <div className={styles.containerSidebar}>
    <div className={styles.sidebarMain}>
      <div className="flex flex-col gap-4 justify-center items-center text-white">
        <h3>Logo</h3>
        <img className="w-12 h-12 rounded-full object-cover" src={profileDefault} alt="logo"></img>
      <h3>HR NAME</h3>
      <h4>hr.@gmail.com</h4>
      </div>
      <div>
        <ul className={`${styles.customUl} w-full flex flex-col gap-5 items-center mt-8`}>
          <Link className="w-full" to='/'>
          <li> <DashboardIcon sx={{ fontSize: 20 }}/>Dashboard</li>
          </Link>
          <Link className="w-full" to="departaments">
          <li> <AutoAwesomeMotionIcon sx={{ fontSize: 20 }}/>Departaments</li>
          </Link>
          <Link className="w-full" to="vacancies">
          <li> <BusinessCenterIcon sx={{ fontSize: 20 }}/>Vacancies</li>
          </Link>
          <Link className="w-full" to="employees">
          <li> <PeopleIcon sx={{ fontSize: 20 }}/>Employees</li>
          </Link>
          <Link className="w-full" to="activity">
          <li> <EventIcon sx={{ fontSize: 20 }}/>Activity</li>
          </Link>
          <Link className="w-full" to="about_us">
          <li> <InfoIcon sx={{ fontSize: 20 }}/>About Us</li>
          </Link>
          <Link className="w-full" to="profile">
          <li> <ManageAccountsIcon sx={{ fontSize: 20 }}/>Profile</li>
          </Link>
        </ul>
      </div>

    </div>
    </div>
    );
}

export default Sidebar;
