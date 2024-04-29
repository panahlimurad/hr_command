import React from "react";
import PageHeader from "../../features/Components/PageHeader/PageHeader";
import LongCardsContainer from "../../features/Components/LongCardsContainer/LongCardsContainer";

function Departaments() {
  return (
    <div className="h-full">
      <div>
        <PageHeader/>
      </div>
      <div className="h-[440px] flex mt-4">
        <LongCardsContainer/>
      </div>
    </div>
  );
}

export default Departaments;
