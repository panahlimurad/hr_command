import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useForm } from "react-hook-form";

const CreateProfileComponent = () => {
  const [previewCompanyLogo, setPreviewCompanyLogo] = useState(null);
  const [previewProfileLogo, setPreviewProfileLogo] = useState(null);
  const fileInputCompanyLogo = useRef(null);
  const fileInputProfileLogo = useRef(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleCompanyLogoClick = () => {
    fileInputCompanyLogo.current.click();
  };

  const handleProfileLogoClick = () => {
    fileInputProfileLogo.current.click();
  };

  const handleFileChangeProfileLogo = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewProfileLogo(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileChangeCompanyLogo = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewCompanyLogo(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const createProfile = async (data) => {
    console.log(data);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="h-full w-full rounded-md border border-borderDefault"
    >
      <div className="flex h-full w-full flex-col justify-center gap-2 px-4">
        <div className="flex justify-end">
          <button type="submit" form="ProfileForm" className="mb-2 h-[30px] w-[100px] rounded-md bg-[#1e74ec] text-[#fff]">
            Create
          </button>
        </div>
        <div className="flex items-center justify-between gap-2">
          <div
            onClick={handleCompanyLogoClick}
            className="flex h-[80px] flex-1 cursor-pointer flex-col items-center justify-center gap-1 rounded-md border border-borderDefault"
          >
            <p className="text-[10px]">Upload Company Logo</p>
            {previewCompanyLogo ? (
              <img
                className="h-10 w-10 rounded-full object-cover"
                alt="logo"
                src={previewCompanyLogo}
              ></img>
            ) : (
              <CloudUploadIcon
                className="text-colorDefault"
                sx={{ fontSize: "30px" }}
              />
            )}
          </div>
          <div
            onClick={handleProfileLogoClick}
            className="flex h-[80px] flex-1 cursor-pointer flex-col items-center justify-center gap-1 rounded-md border border-borderDefault"
          >
            <p className="text-[10px]">Upload Profile Photo</p>
            {previewProfileLogo ? (
              <img
                className="h-10 w-10 rounded-full object-cover"
                alt="logo"
                src={previewProfileLogo}
              ></img>
            ) : (
              <CloudUploadIcon
                className="text-colorDefault"
                sx={{ fontSize: "30px" }}
              />
            )}
          </div>
        </div>
        <form id="ProfileForm" onSubmit={handleSubmit(createProfile)} className="mt-3 flex flex-col gap-5">
          <div className="hidden">
            <input
              onChange={handleFileChangeCompanyLogo}
              accept="image/*"
              ref={fileInputCompanyLogo}
              type="file"
            />
          </div>
          <div className="hidden">
            <input
              onChange={handleFileChangeProfileLogo}
              accept="image/*"
              ref={fileInputProfileLogo}
              type="file"
            />
          </div>
          <div className="relative h-[35px]">
            <input
              {...register("name", { required: "Name is required" })}
              className="w-full text-slate-500 placeholder:text-[13px]"
              type="text"
              id="name"
              name="name"
              placeholder="Name"
            />
            {errors.name && (
                <p className="text-[10px] text-colorDefault mt-1">
                  {errors.name.message}
                </p>
              )}
          </div>
          <div className="h-[35px]">
            <input
              {...register("lastName", { required: "Last Name is required" })}
              id="lastName"
              name="lastName"
              className="w-full text-slate-500 placeholder:text-[13px]"
              type="text"
              placeholder="Last Name"
            />
            {errors.lastName && (
                <p className="text-[10px] text-colorDefault mt-1">
                  {errors.lastName.message}
                </p>
              )}
          </div>
          <div className="h-[35px]">
            <input
              {...register("companyName", { required: "Company Name is required" })}
              id="companyName"
              name="companyName"
              className="w-full text-slate-500 placeholder:text-[13px]"
              type="text"
              placeholder="Company Name"
            />
            {errors.companyName && (
                <p className="text-[10px] text-colorDefault mt-1">
                  {errors.companyName.message}
                </p>
              )}
          </div>
          <div className="h-[35px]">
            <input
              {...register("companyUrl")}
              id="companyUrl"
              name="companyUrl"
              className="w-full text-slate-500 placeholder:text-[13px]"
              type="url"
              placeholder="Company Website URL (optional)"
            />
          </div>
          <div className="h-[35px]">
            <input
              {...register("age",{pattern: { value: /^[0-9]*$/i, message: 'Invalid age' } })}
              id="age"
              name="age"
              className="w-full text-slate-500 placeholder:text-[13px]"
              type="number"
              placeholder="Age (optional)"
            />
          </div>
          <div className="h-[35px]">
            <input
                {...register("email", { required: "Email is required", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Invalid email address' } })}
                id="email"
              name="email"
              className="w-full text-slate-500 placeholder:text-[13px]"
              type="email"
              placeholder="Email"
            />
            {errors.email && (
                <p className="text-[10px] text-colorDefault mt-1">
                  {errors.email.message}
                </p>
              )}
          </div>
          <div className="h-[35px]">
            <input
              {...register("companyAddress")}
              id="companyAddress"
              name="companyAddress"
              className="w-full text-slate-500 placeholder:text-[13px]"
              type="text"
              placeholder="Company Address (optional)"
            />
          </div>
          <div className="h-[35px]">
            <input
              {...register("country", { required: "Country is required" })}
              id="country"
              name="country"
              className="w-full text-slate-500 placeholder:text-[13px]"
              type="text"
              placeholder="Country"
            />
            {errors.country && (
                <p className="text-[10px] text-colorDefault mt-1">
                  {errors.country.message}
                </p>
              )}
          </div>
          <div className="h-[35px]">
            <input
              {...register("phone", { required: "Phone is required"})}
              id="phone"
              name="phone"
              className="w-full text-slate-500 placeholder:text-[13px]"
              type="tel"
              placeholder="Phone"
            />
            {errors.phone && (
                <p className="text-[10px] text-colorDefault mt-1">
                  {errors.phone.message}
                </p>
              )}
          </div>
          <div>
            <textarea
              {...register("description")}
              id="description"
              name="description"
              className="w-full rounded-md border border-borderDefault py-2 indent-4 text-slate-500 placeholder:text-[13px]"
              placeholder="Description (optional)"
            ></textarea>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default CreateProfileComponent;
