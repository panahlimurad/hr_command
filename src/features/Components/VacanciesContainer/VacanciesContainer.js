import React from "react";
import PageHeader from "../PageHeader/PageHeader";
import VacanciesTable from "../VacanciesTable/VacanciesTable";
import VacanciesFilter from "../VacanciesFilter/VacanciesFilter";

function VacanciesContainer() {
  return (
    <div>
      <PageHeader />
      <div className="flex w-full gap-4">
        <div className="w-[70%]">
          <VacanciesTable />
        </div>
        <div className="w-[26%]">
          <VacanciesFilter />
        </div>
      </div>
    </div>
  );
}

export default VacanciesContainer;
