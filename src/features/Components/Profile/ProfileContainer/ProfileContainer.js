import React, { useState } from "react";
import CreateProfileComponent from "../CreateProfileComponent/CreateProfileComponent";
import ProfileHR from "../ProfileHR/ProfileHR";

const ProfileContainer = () => {
  const [openCreateProfile, setOpenCreateProfile] = useState(false);

  const handleOpenCreateProfile = () => {
    setOpenCreateProfile(true);
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      {!openCreateProfile ? (
        <div>
          <button
            onClick={handleOpenCreateProfile}
            className="h-[35px] w-[150px] rounded-md bg-colorDefault text-white"
          >
            Create Acoount
          </button>
        </div>
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          {/* <CreateProfileComponent /> */}
          <ProfileHR/>
        </div>
      )}
    </div>
  );
};

export default ProfileContainer;
