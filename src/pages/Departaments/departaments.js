import React from "react";
import PageHeader from "../../features/Components/PageHeader/PageHeader";
import LongCardsContainer from "../../features/Components/LongCardsContainer/LongCardsContainer";

function Departaments() {
  return (
    <div className="h-full">
      <div>
        <PageHeader text="Departaments" />
      </div>
      <div className="h-[440px] flex ">
        <LongCardsContainer/>
      </div>
    </div>
  );
}

export default Departaments;
