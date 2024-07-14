import React from "react";
import { motion } from "framer-motion";
import profileDefault from "../../../images/icons/profileDefault.svg";
import EditIcon from "@mui/icons-material/Edit";

const ProfileHR = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="flex h-full w-full flex-col gap-4 rounded-md border border-borderDefault p-4"
    >
      <div className="flex items-center justify-between gap-4 rounded-md border border-borderDefault p-4">
        <div className="flex-none">
          <img
            className="h-14 w-14 rounded-full object-cover"
            src={profileDefault}
            alt="logo"
          ></img>
        </div>
        <div className="text-textColor flex-1">
          <h1 className="text-[18px]">Jack Adams</h1>
          <h2 className="text-textLightColor text-[14px] font-light">
            Company Name
          </h2>
          <p className="text-textLightColor text-[14px] font-light">Country</p>
        </div>
        <div className="h-[80px]">
          <div className="text-smallIconColor flex w-16 flex-none items-center justify-center gap-1 rounded-md border border-borderDefault py-1">
            <EditIcon sx={{ fontSize: "18px" }} />
            <p className="text-textLightColor text-[13px]">Edit</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 rounded-md border border-borderDefault p-4">
        <div className="flex justify-between">
          <div>Personal Information</div>
          <div className="text-smallIconColor flex w-16 flex-none items-center justify-center gap-1 rounded-md border border-borderDefault py-1">
            <EditIcon sx={{ fontSize: "18px" }} />
            <p className="text-textLightColor text-[13px]">Edit</p>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex flex-col gap-4">
            <ul className="text-textLightColor flex flex-col gap-1">
              <li>First Name</li>
              <li className="font-semibold text-[#949eb5]">Jack</li>
            </ul>
            <ul className="text-textLightColor flex flex-col gap-1">
              <li>Email Address</li>
              <li className="font-semibold text-[#949eb5]">
                infoinfo@gmail.com
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <ul className="text-textLightColor flex flex-col gap-1">
              <li>Last Name</li>
              <li className="font-semibold text-[#949eb5]">Adams</li>
            </ul>
            <ul className="text-textLightColor flex flex-col gap-1">
              <li>Phone</li>
              <li className="font-semibold text-[#949eb5]">
                +1 (555) 555-5555
              </li>
            </ul>
          </div>
          <div className="flex-1 h-[120px] overflow-scroll">
            <div className="text-textLightColor">Description</div>
            <p className="font-semibold text-[#949eb5] text-[15px] mt-1">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32</p>
          </div>
        </div>
        
      </div>
      <div className="flex flex-col gap-4 rounded-md border border-borderDefault p-4">
        <div className="flex justify-between">
          <div>Company Information</div>
          <div className="text-smallIconColor flex w-16 flex-none items-center justify-center gap-1 rounded-md border border-borderDefault py-1">
            <EditIcon sx={{ fontSize: "18px" }} />
            <p className="text-textLightColor text-[13px]">Edit</p>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex flex-col gap-4">
            <ul className="text-textLightColor flex flex-col gap-1">
              <li>Company Name</li>
              <li className="font-semibold text-[#949eb5]">Jack</li>
            </ul>
            <ul className="text-textLightColor flex flex-col gap-1">
              <li>Comoany website URL</li>
              <li className="font-semibold text-[#949eb5]">
                infoinfo@gmail.com
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-textLightColor flex flex-col gap-1">
              <img  className="h-12 w-12 rounded-full object-cover"
            src={profileDefault}
            alt="logo"></img>
            </div>
            <ul className="text-textLightColor flex flex-col gap-1">
              <li>Phone</li>
              <li className="font-semibold text-[#949eb5]">
                +1 (555) 555-5555
              </li>
            </ul>
          </div>
          <div className="flex-1 h-[120px] overflow-scroll">
            <div className="text-textLightColor">Description</div>
            <p className="font-semibold text-[#949eb5] text-[15px] mt-1">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32</p>
          </div>
        </div>
        
      </div>
    </motion.div>
  );
};

export default ProfileHR;
