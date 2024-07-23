import React from "react";
import PageHeader from "../../features/Components/PageHeader/PageHeader";
import TableHeader from "../../features/Components/TableHeader/TableHeader";
import TableEmployees from "../../features/Components/TableEmployees/TableEmployees";

const Leaves = () => {
  const data = [
    { label: "Name", showIcon: true },
    { label: "Positon", showIcon: false },
    { label: "Department", showIcon: false },
    { label: "Leave Type", showIcon: false },
    { label: "Period", showIcon: false },
  ];

  return (
    <div className="flex w-full flex-col gap-4">
      <PageHeader leaves={true} />
      <div className="flex justify-center">
        <TableHeader data={data} />
      </div>
      <div className="flex justify-center">
        <TableEmployees />
      </div>
    </div>
  );
};

export default Leaves;