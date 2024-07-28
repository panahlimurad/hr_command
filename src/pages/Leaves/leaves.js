import React from "react";
import PageHeader from "../../features/Components/PageHeader/PageHeader";
import TableHeader from "../../features/Components/TableHeader/TableHeader";
import TableEmployees from "../../features/Components/TableEmployees/TableEmployees";
import Test from '../../features/images/icons/test.svg'

const Leaves = () => {
  const data = [
    { label: "Name", showIcon: true },
    { label: "Positon", showIcon: false },
    { label: "Department", showIcon: false },
    { label: "Leave Type", showIcon: false },
    { label: "Period", showIcon: false },
  ];
const dataLeaves = [
  { 
  img: { src: {Test}, alt: "profile" },
  name: "John Doe",
  position: "Software Engineer",
  department: "Software",
  leaveType: "Sick Leave",
  period: "Aug, 2022 - Aug, 2023",
},

{ 
  img: { src: {Test}, alt: "profile" },
  name: "John Doe",
  position: "Software Engineer",
  department: "Software",
  leaveType: "Sick Leave",
  period: "Aug, 2022 - Aug, 2023",
},

{ 
  img: { src: {Test}, alt: "profile" },
  name: "John Doe",
  position: "Software Engineer",
  department: "Software",
  leaveType: "Sick Leave",
  period: "Aug, 2022 - Aug, 2023",
},

{ 
  img: { src: {Test}, alt: "profile" },
  name: "John Doe",
  position: "Software Engineer",
  department: "Software",
  leaveType: "Sick Leave",
  period: "Aug, 2022 - Aug, 2023",
},{ 
  img: { src: {Test}, alt: "profile" },
  name: "John Doe",
  position: "Software Engineer",
  department: "Software",
  leaveType: "Sick Leave",
  period: "Aug, 2022 - Aug, 2023",
},{ 
  img: { src: {Test}, alt: "profile" },
  name: "John Doe",
  position: "Software Engineer",
  department: "Software",
  leaveType: "Sick Leave",
  period: "Aug, 2022 - Aug, 2023",
},{ 
  img: { src: {Test}, alt: "profile" },
  name: "John Doe",
  position: "Software Engineer",
  department: "Software",
  leaveType: "Sick Leave",
  period: "Aug, 2022 - Aug, 2023",
},{ 
  img: { src: {Test}, alt: "profile" },
  name: "John Doe",
  position: "Software Engineer",
  department: "Software",
  leaveType: "Sick Leave",
  period: "Aug, 2022 - Aug, 2023",
},

]


  return (
    <div className="flex w-full flex-col gap-4">
      <PageHeader leaves={true} />
      <div className="flex justify-center w-full">
        <TableHeader data={data} />
      </div>
      <div className="flex justify-center">
        <TableEmployees dataLeaves={dataLeaves}/>
      </div>
    </div>
  );
};

export default Leaves;
