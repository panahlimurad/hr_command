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
import StatusPanelSmall from "../StatusPanelSmall/StatusPanelSmall";
import DropdownMenu from "../../Shared/DropDown/DropDownMenu";

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
        <div className="mt-2 flex w-full gap-2 items-center justify-end relative">
          <div class="mb-4 flex items-center absolute left-0 top-3">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
            />
          </div>
          <StatusPanelSmall text="ACTIVE" />
          <div className="mr-2">
            <DropdownMenu/>
            {/* <Button
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
            </Menu> */}
          </div>
        </div>
      )}
      <div className="flex gap-4">
        <div className="w-[27%]">
          <img
            className="w-[70px] rounded-full object-cover"
            src={Logo}
            alt="dPhoto"
          ></img>
        </div>
        <div>
          <h3 className="text-[16px] font-medium text-[#23272C]">Woker Name</h3>
          <h5 className="text-[12px] text-[#17243E]">Front End Developer</h5>
        </div>
        <div></div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex text-[8px] font-light text-[#343942]">
          <p className="flex-1">DEPARTAMENT</p>
          <p className="flex-1">DATE OF JOINING</p>
        </div>
        <div className="flex text-[10px] font-medium text-[#23272C]">
          <p className="flex-1">Development</p>
          <p className="flex-1">Aug 24, 2022</p>
        </div>
      </div>

      <div className="flex w-[95%] flex-col gap-2 rounded-2xl bg-[#f4f5f7] p-4">
        <div className="flex gap-4 items-center">
          <EmailIcon sx={{ color: "#cbcfd4", fontSize: "20px" }} />{" "}
          <a className="text-[#23272C] text-[10px]" href="mailto:{dataGelecek}">
            example@gmail.com
          </a>
        </div>
        <div className="h-[1px] bg-[#E0E4EA]"></div>
        <div className="flex gap-4 items-center">
          <CallIcon sx={{ color: "#cbcfd4", fontSize: "20px" }} /> 
          <p className="text-[10px] text-[#23272C]">(055) 8798239583</p>
        </div>
      </div>
      {!isDetail && (
        <div className="w-[95%]">
          <Link to="/employees-details">
            <button className="h-[40px] w-full rounded-2xl bg-[#1e74ec] text-white">
              View
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default EmployessCard;
