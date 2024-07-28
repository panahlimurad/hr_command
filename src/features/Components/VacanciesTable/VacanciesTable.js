import React from "react";
import defaultVacanciesimg from '../../images/icons/defaultVacanciesImg.svg'
import TableHeader from "../TableHeader/TableHeader";
import TableEmployees from "../TableEmployees/TableEmployees";


function VacanciesTable() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const data = [
      { label: "Position Title", showIcon: true },
      { label: "Applicants", showIcon: false },
      { label: "Status", showIcon: false },
      { label: "Publication", showIcon: false },
    ];

    const dataVacancies = [
      { 
        img: { src: defaultVacanciesimg, alt: "profile" },
        positionTitle: "IOS Developer",
        applicants: 34,
        status: "Active",
        publication: "Aug, 2022 - Aug, 2023",
      },
      { 
        img: { src: defaultVacanciesimg, alt: "profile" },
        positionTitle: "IOS Developer",
        applicants: 34,
        status: "Active",
        publication: "Aug, 2022 - Aug, 2023",
      },
      { 
        img: { src: defaultVacanciesimg, alt: "profile" },
        positionTitle: "IOS Developer",
        applicants: 34,
        status: "Active",
        publication: "Aug, 2022 - Aug, 2023",
      },
      { 
        img: { src: defaultVacanciesimg, alt: "profile" },
        positionTitle: "IOS Developer",
        applicants: 34,
        status: "Active",
        publication: "Aug, 2022 - Aug, 2023",
      },
      { 
        img: { src: defaultVacanciesimg, alt: "profile" },
        positionTitle: "IOS Developer",
        applicants: 34,
        status: "Active",
        publication: "Aug, 2022 - Aug, 2023",
      },
    ]
  
  return (
    <div className="flex flex-col gap-4">
      <TableHeader data={data}/>
      <TableEmployees dataVacancies={dataVacancies}/>
    </div>
  );
}

export default VacanciesTable;
