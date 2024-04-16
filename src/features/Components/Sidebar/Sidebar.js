import React from "react";
import styles from './sidebar.module.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PeopleIcon from '@mui/icons-material/People';
import EventIcon from '@mui/icons-material/Event';


function Sidebar() {
  return (
  <div className={styles.containerSidebar}>
    <div className={styles.sidebarMain}>
      <div className="flex flex-col gap-4 justify-center items-center mt-10 text-white">
        <h3>Logo</h3>
        <img className="w-12 h-12 rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOWZM4LaEBG5h5ux83IEllVR4Y1vRwsWtLdA&usqp=CAU" alt="logo"></img>
      <h3>HR NAME</h3>
      <h4>hr.@gmail.com</h4>
      </div>
      <div>
        <ul className="w-full flex flex-col gap-5 items-center mt-12">
          <li> <DashboardIcon sx={{ fontSize: 20 }}/>Dashboard</li>
          <li> <BusinessCenterIcon sx={{ fontSize: 20 }}/>Vacancies</li>
          <li> <PeopleIcon sx={{ fontSize: 20 }}/>Employees</li>
          <li> <EventIcon sx={{ fontSize: 20 }}/>Activity</li>
        </ul>
      </div>

    </div>
    </div>
    );
}

export default Sidebar;
