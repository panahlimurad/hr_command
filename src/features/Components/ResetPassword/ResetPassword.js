import React, { useState } from "react";
import styles from "./style.module.css";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ButtonSpinner from "../ButtonSpinner/ButtonSpinner";
import { useMutation } from "react-query";
import { ResetPasswordApi } from "../../Services/api";
import notify from "../../Functions/Toastify/notify";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";


const label = { inputProps: { "aria-label": "Checkbox demo" } };

function ResetPassword() {

    const navigate = useNavigate()
  const [] = useState(false)
  const {register, handleSubmit, reset, formState:{errors, isSubmitting}} = useForm()
  const [showPassword, setShowPassword] = useState(false);
  const [isConfirmPassword, setIsConfirmPassword] = useState(false);
 

  const handleClickPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickConfirmPassword = () => {
    setIsConfirmPassword(!isConfirmPassword);
  };
  

  const mutate = useMutation((data) => ResetPasswordApi(data), {
    onSuccess: (response) => {
      notify(response?.data?.message, "success");
      reset();
      console.log(response);
      navigate("/login");
    },
    onError: (error) => {
      if (error) {
        notify(error?.response?.data?.message, "error");
      }
    },
  });

  const sendPasswordReset = (data) => {
    mutate.mutate(data);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    className={styles.containerLogin}>
      <div className="w-[90%] gap-5 h-[90%] flex flex-col items-center">
        <div className="text-center">
          <h1 className="font-bold text-2xl"></h1>
          <p className="text-xs font-normal mt-2">
            Please enter your email
          </p>
        </div>
        <div className="flex w-full flex-col gap-4 items-center">
          <form
          onSubmit={handleSubmit(sendPasswordReset)}
            className="w-[100%] flex flex-col items-start"
          >
            <div className="w-full text-center">
              <input
              className={`${errors.email && "border-solid border-[#1f74ec]"}`}
              {...register("email", { required: "Email is required" })}
                type="email"
                id="username"
                name="email"
                placeholder="Example@gmail.com"
              />
          {errors.email && (
                <p className="text-[10px] text-[#1f74ec] mt-1">
                  {errors.email.message}
                </p>
              )}  
            </div>

            <div className="w-full text-center">
              <input
              className={`${errors.otp && "border-solid border-[#1f74ec]"}`}
              {...register("otp", { required: "Otp is required" })}
                type="number"
                id="otp"
                name="otp"
                placeholder="OTP"
              />
          {errors.otp && (
                <p className="text-[10px] text-[#1f74ec] mt-1">
                  {errors.otp.message}
                </p>
              )}  
            </div>

            <div className="relative w-full text-center">
              <input
                className={`${
                  errors.password && "border-solid border-[#1f74ec]"
                }`}
                {...register("password", { required: "Password is required" })}
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="text-[10px] text-[#1f74ec] mt-1">
                  {errors.password.message}
                </p>
              )}
              <br />
              <VisibilityOffIcon
                onClick={handleClickPassword}
                className={`${
                  showPassword ? 'text-[#a2a8b0"]' : "text-[#1f74ec]"
                }`}
                sx={{
                  position: "absolute",
                  right: 25,
                  top: 6,
                  cursor: "pointer",
                }}
              />
            </div>

            <div className="relative w-full text-center">
              <input
                className={`${
                  errors.password && "border-solid border-[#1f74ec]"
                }`}
                {...register("password_confirmation", { required: "Password is required" })}
                type={ isConfirmPassword ? "text" : "password"}
                id="password_confirmation"
                name="password_confirmation"
                placeholder="Enter your password Again"
              />
              {errors.password && (
                <p className="text-[10px] text-[#1f74ec] mt-1">
                  {errors.password.message}
                </p>
              )}
              <br />
              <VisibilityOffIcon
                onClick={handleClickConfirmPassword}
                className={`${
                    isConfirmPassword ? 'text-[#a2a8b0"]' : "text-[#1f74ec]"
                }`}
                sx={{
                  position: "absolute",
                  right: 25,
                  top: 6,
                  cursor: "pointer",
                }}
              />
            </div>

            <br />
            <div className="w-full flex justify-center">
              <button
                type="submit"
                className="w-[90%] h-[35px] flex justify-center items-center w-90% rounded-2xl text-white bg-[#1f74ec]"
              >
                {isSubmitting ? <ButtonSpinner /> : "Send"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default ResetPassword;
