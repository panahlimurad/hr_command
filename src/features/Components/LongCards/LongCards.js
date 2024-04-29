import React from "react";
import styles from "./longCards.module.css";
import Logo from "../../images/icons/profileDefault.svg";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function LongCards() {

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
      <div className={styles.textContainer}>
        <div>
        <img
          className="w-14 rounded-full object-cover"
          src={Logo}
          alt="dPhoto"
        ></img>
        </div>
        <div>
        <h3>Departament Name</h3>
        <h5 className="text-sm font-light">position</h5>
        </div>
      </div>
      <div className="flex">
        <p className="text-[12px] text-[#343942] flex-1 font-normal">Opening</p>
        <p className="text-[14px] text-[#23272C] flex-1 font-medium flex items-center gap-2">
          <CalendarMonthIcon sx={{ fontSize: 15, color: "#969da6" }} />
          Sep,12 2023
        </p>
      </div>
      <div className="flex">
        <p className="text-[12px] flex-1 text-[#343942] font-normal">Employess </p>
        <p className="text-[14px] flex-1 text-[#23272C] font-medium">23</p>
      </div>
      <div className="absolute top-3 right-0">
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreHorizIcon sx={{color:"#969da6"}}/>
      </Button>
      <Menu 
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
      </Menu>
    </div>
    </div>
  );
}

export default LongCards;
