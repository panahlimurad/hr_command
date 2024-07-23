import React from "react";
import styles from "./header.module.css";
import LightModeIcon from "@mui/icons-material/LightMode";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import RealTime from "../RealTime/RealTime";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownTwoToneIcon from "@mui/icons-material/ArrowDropDownTwoTone";
// import DarkModeIcon from '@mui/icons-material/DarkMode';

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerMain}>
        <div className="flex w-[100%] items-center justify-center gap-2 lg:w-[50%]">
          <LightModeIcon sx={{ cursor: "pointer" }} />
          <NotificationsIcon sx={{ cursor: "pointer" }} />
          <SettingsIcon sx={{ cursor: "pointer" }} />
          <Button
            sx={{ color: "#17243e" }}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            ENG <ArrowDropDownTwoToneIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>ENG</MenuItem>
            <MenuItem onClick={handleClose}>AZE</MenuItem>
          </Menu>
          <RealTime />
        </div>
      </div>
    </div>
  );
}

export default Header;
