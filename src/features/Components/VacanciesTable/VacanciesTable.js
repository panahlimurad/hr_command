import React from "react";
import styles from "./vacanciesTable.module.css";
import defaultVacanciesimg from '../../images/icons/defaultVacanciesImg.svg'
import StatusPanelSmall from "../StatusPanelSmall/StatusPanelSmall";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";

function VacanciesTable() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
  return (
    <div className="ml-8 mt-4">
      <div>
        <ul className={`${styles.customUl}`}>
          <li>Position Title <ImportExportIcon sx={{fontSize:"15px", cursor:"pointer"}}/></li> 
          <li>Status</li>
          <li>Publication</li>
        </ul>
      </div>
      <div className="rounded-2xl w-full">
        <table className="w-full border border-solid border-[#f1f1f1] mt-4">
          <tbody className="flex flex-col justify-center items-center max-h-[500px] overflow-scroll">
            <tr className="flex h-[40px] w-[96%] items-center py-7 border-b">
              <td className="flex items-center gap-2 flex-1"><img src={defaultVacanciesimg} alt="vacancies"/>Javascript Developer</td>
              <td className="flex-1"><StatusPanelSmall text="OPEN"/></td>
              <td className="flex-1"><CalendarMonthIcon sx={{color:"#9e9e9e", fontSize:"15px"}}/> <span className='text-[13px] font-semibold'>Aug, 2023</span></td>
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
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default VacanciesTable;
