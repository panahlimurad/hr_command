import React from "react";
import ForgotPassword from "../../features/Components/ForgotPassword/ForgotPassword";
import LoginRightSection from "../../features/Components/LoginComponents/LoginRightSection";

const ForgotPassPage = () => {
  return (
    <div className="w-full bg-[#f6fafe] h-screen relative">
      <div className="w-full flex justify-end h-screen p-2">
        <LoginRightSection />
      </div>
      <ForgotPassword />
    </div>
  );
};

export default ForgotPassPage;
