import React from 'react'
import styles from './header.module.css'
import LightModeIcon from '@mui/icons-material/LightMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';


function Header() {
  return (
    <div className={styles.container}>
        <div className={styles.headerMain}>
          <div className='bg-yellow-300 w-56'>
            <LightModeIcon />
            <NotificationsIcon />
            <SettingsIcon /> 
          </div>
        </div>
    </div>
  )
}

export default Header