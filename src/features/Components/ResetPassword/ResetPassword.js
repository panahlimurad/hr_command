import React, { useState } from "react";
import styles from "./style.module.css";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ButtonSpinner from "../ButtonSpinner/ButtonSpinner";
import { useMutation, useQuery } from "react-query";
import {
  ForgotPasswordApi,
  OtpExpire,
  ResetPasswordApi,
} from "../../Services/api";
import notify from "../../Functions/Toastify/notify";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Cookies from "js-cookie";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function ResetPassword() {
  const navigate = useNavigate();
  const [] = useState(false);
  const [otpEmail, setOtpEmail] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [isConfirmPassword, setIsConfirmPassword] = useState(false);
  const [expiryTime, setExpiryTime] = useState(null);

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
      let errorMessage = "Something went wrong";

      if (error?.response?.data?.message?.password) {
        errorMessage = error?.response?.data?.message?.password[0];
      } else {
        errorMessage = error?.response?.data?.message;
      }

      notify(errorMessage, "error");
      reset();
    },
  });

  const mutateSendOtpAgain = useMutation((data) => ForgotPasswordApi(data), {
    onSuccess: (response) => {
      notify(response?.data?.message, "success");
      navigate("/reset_password");
      otpExpire.mutate({ email: otpEmail });
    },
    onError: (error) => {
      if (error) {
        notify(error?.response?.data?.message, "error");
        reset();
      }
    },
  });

  const sendOtpAgain = () => {
    const dataOtp = { email: otpEmail };
    mutateSendOtpAgain.mutate(dataOtp);
  };

  const otpExpire = useMutation((data) => OtpExpire(data), {
    onSuccess: (response) => {
      setExpiryTime(response?.data?.otp_expires_in);
    },
    onError: (error) => {
      if (error) {
        notify(error?.response?.data?.message, "error");
      }
    },
  });

  useEffect(() => {
    const email = Cookies.get("email");
    setOtpEmail(email);
    if (email) {
      otpExpire.mutate({ email });
    }
  }, []);

  useEffect(() => {
    if (expiryTime !== null && expiryTime > 0) {
      const interval = setInterval(() => {
        setExpiryTime((prevtime) => (prevtime > 0 ? prevtime - 1 : 0));
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [expiryTime]);

  const formatTime = (second) => {
    const minutes = Math.floor(second / 60);
    const seconds = Math.floor(second % 60);
    return `${minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
  };

  const sendPasswordReset = (data) => {
    const requestData = { ...data, email: otpEmail };
    mutate.mutate(requestData);
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
      className={styles.containerLogin}
    >
      <div className="w-[90%] gap-5 h-[90%] flex flex-col items-center">
        <div className="text-center">
          <h1 className="font-bold text-2xl text-colorDefault">
            Reset Password
          </h1>
          <p className="text-xs font-normal mt-2">OTP sent to {otpEmail}</p>
        </div>
        <div className="flex w-full flex-col gap-4 items-center">
          <form
            onSubmit={handleSubmit(sendPasswordReset)}
            className="w-[100%] flex flex-col gap-4 items-start"
          >
            {/* <div className="w-full text-center h-[35px]">
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
            </div> */}

            <div className="w-full text-center h-[35px] mt-1">
              <input
                className={`${errors.otp && "border-solid border-[#1f74ec]"}`}
                {...register("otp", { required: "Otp is required", pattern: {
                  value: /^[0-9]+$/,
                  message: "OTP must be a positive number"
                } })}
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

            <div className="relative w-full text-center h-[35px] mt-1">
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

            <div className="relative w-full text-center h-p[35px] mt-1">
              <input
                className={`${
                  errors.password && "border-solid border-[#1f74ec]"
                }`}
                {...register("password_confirmation", {
                  required: "Password is required",
                })}
                type={isConfirmPassword ? "text" : "password"}
                id="password_confirmation"
                name="password_confirmation"
                placeholder="Enter your password Again"
              />
              {errors.password && (
                <p className="text-[10px] text-[#1f74ec] mt-1">
                  {errors.password.message}
                </p>
              )}
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
            <div className="w-full flex justify-center">
              <button
                disabled={mutate.isLoading}
                type="submit"
                className="w-[90%] h-[35px] flex justify-center items-center w-90% rounded-2xl text-white bg-[#1f74ec]"
              >
                {mutate.isLoading ? <ButtonSpinner /> : "Send"}
              </button>
            </div>
          </form>
          {expiryTime !== null && (
            <div className="text-center text-colorDefault mt-2">
              <p>OTP expires in: {formatTime(expiryTime)}</p>
            </div>
          )}
          {!mutateSendOtpAgain.isLoading && 
          <p
          onClick={sendOtpAgain}
          className="text-[15px] transition duration-300 hover:text-white hover:bg-colorDefault rounded-2xl px-3 py-1 cursor-pointer text-[#1f74ec] mt-1"
          >
            Send OTP again
          </p>
          }
        </div>
      </div>
    </motion.div>
  );
}

export default ResetPassword;
