import React from "react";
import styles from "./style.module.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../../images/icons/profileDefault.svg";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import { Link } from "react-router-dom";

function EmployessCard({ isDetail }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={!isDetail ? styles.container : styles.containerDetails}>
      {!isDetail && (
        <div className="w-full items-center gap-2 mt-2 flex justify-end">
          <div className="w-[20%] h-[24px] text-[#0EB01D]  bg-[#DDFCE0] rounded-2xl text-[11px] font-normal items-center flex justify-center">
            ACTIVE
          </div>
          <div>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MoreVertIcon sx={{ color: "#969da6" }} />
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
              <MenuItem onClick={handleClose}>Edit</MenuItem>
              <MenuItem onClick={handleClose}>Delete</MenuItem>
            </Menu>
          </div>
        </div>
      )}
      <div className="flex gap-4">
        <div>
          <img
            className="w-14 rounded-full object-cover"
            src={Logo}
            alt="dPhoto"
          ></img>
        </div>
        <div>
          <h3 className="text-[20px] text-[#23272C] font-medium">Woker Name</h3>
          <h5 className="text-[16px] text-[#17243E]">Front End Developer</h5>
        </div>
        <div></div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex text-[12px] text-[#343942] font-light">
          <p className="flex-1">DEPARTAMENT</p>
          <p className="flex-1">DATE OF JOINING</p>
        </div>
        <div className="flex text-[14px] font-medium text-[#23272C]">
          <p className="flex-1">Development</p>
          <p className="flex-1">Aug 24, 2022</p>
        </div>
      </div>

      <div className="bg-[#f4f5f7] w-[95%] rounded-2xl p-4 flex flex-col gap-4">
        <div className="flex gap-4">
          <EmailIcon sx={{ color: "#cbcfd4" }} />{" "}
          <a className="text-[#23272C]" href="mailto:{dataGelecek}">
            example@gmail.com
          </a>
        </div>
        <div className="h-[1px] bg-[#E0E4EA]"></div>
        <div className="flex gap-4">
          <CallIcon sx={{ color: "#cbcfd4" }} /> (055) 8798239583
        </div>
      </div>
      {!isDetail && 
      <div className="w-[95%]">
        <Link to="/employees-details">
          <button className="bg-[#1e74ec] text-white w-full rounded-2xl h-[40px]">
            View
          </button>
        </Link>
      </div>
      }
    </div>
  );
}

export default EmployessCard;
