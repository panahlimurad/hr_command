import React from "react";
import LoginRightSection from "../../features/Components/LoginComponents/LoginRightSection";
import ResetPassword from "../../features/Components/ResetPassword/ResetPassword";

const Reset_password = () => {
  return (
    <div className="w-full bg-[#f6fafe] h-screen relative">
      <div className="w-full flex justify-end h-screen p-2">
        <LoginRightSection />
      </div>
      <ResetPassword />
    </div>
  );
};

export default Reset_password;
