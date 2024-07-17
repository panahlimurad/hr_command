import React, { useState } from "react";
import styles from "./login.module.css";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Checkbox from "@mui/material/Checkbox";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ButtonSpinner from "../ButtonSpinner/ButtonSpinner";
import notify from "../../utils/Functions/Toastify/notify";
import { motion } from "framer-motion";
import { useMutation } from "react-query";
import { Login, Register } from "../../Services/api";
import Cookies from "js-cookie";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function LogRegTable({ title, isLogin, isRegister }) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isConfirmPassword, setIsConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const handleClickPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickConfirmPassword = () => {
    setIsConfirmPassword(!isConfirmPassword);
  };

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const mutateLogin = useMutation((data) => Login(data), {
    onSuccess: (response) => {
      notify(response?.data?.message, "success");
      reset();
      if (rememberMe) {
        Cookies.set("token", response?.data?.token, {
          expires: 7,
        });
      }
      // navigate("/");
    },
    onError: (error) => {
      if (error) {
        notify(error?.response?.data?.message, "error");
        setValue("password", "");
      }
    },
  });

  const mutation = useMutation((data) => Register(data), {
    onSuccess: (response) => {
      notify("Successfully Registered", "success");
      reset();
      navigate("/login");
    },
    onError: (error) => {

      let errorMessage = "Something went wrong";

      if (error?.response?.data?.message?.email) {
        errorMessage = error?.response?.data?.message?.email[0];
      }
      else {
        errorMessage = error?.response?.data?.message?.password[0];
      }

      notify(errorMessage, "error");
      setValue("password", "");
      setValue("password_confirmation", "");
    },
  });

  const LoginUser = async (data) => {
    mutateLogin.mutate(data);
  };

  const CreateAccount = async (data) => {
    mutation.mutate(data);
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
          <h1 className="font-bold text-2xl text-colorDefault">{title}</h1>
          <p className="text-xs font-light mt-2">
            Welcome! Please enter your details
          </p>
        </div>
        <div className="flex w-full flex-col gap-4 items-center">
          <form
            onSubmit={
              !isRegister
                ? handleSubmit(LoginUser)
                : handleSubmit(CreateAccount)
            }
            className="w-[100%] flex flex-col items-start"
          >
            <div className="w-full text-center h-[35px]">
              <input
                className={`${errors.email && "border-solid border-colorDefault"}`}
                {...register("email", { required: "Email is required", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Invalid email address' } })}
                type="email"
                id="email"
                name="email"
                placeholder="Example@gmail.com"
              />
              {errors.email && (
                <p className="text-[10px] text-colorDefault mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <br />
            <div className="relative w-full text-center h-[35px]">
              <input
                className={`${
                  errors.password && "border-solid border-colorDefault"
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
            {isRegister && (
              <div className="relative w-full text-center mt-5">
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
                  placeholder="Password confirmation"
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
            )}
            <div
              className={`flex w-full  justify-between px-5 items-center mt-2 ${
                !isRegister ? "justify-start ml-1" : "justify-around"
              }`}
            >
              {!isRegister ? (
                <div className="text-[10px] md:text-xs">
                  <Checkbox
                    onChange={(e) => setRememberMe(e.target.checked)}
                    {...label}
                  />
                  Remember me
                </div>
              ) : null}
              {!isRegister ? (
                <p className="text-[10px] md:text-xs">
                  <Link to="/forgot_password" className="text-[#1f74ec]">
                    Forgot Password
                  </Link>
                </p>
              ) : null}
            </div>
            <div className="w-full flex justify-center mt-2 items-center flex-col gap-4">
              <button
              disabled={mutation.isLoading || mutateLogin.isLoading}
                type="submit"
                className="w-[90%] h-[35px] flex justify-center items-center w-90% rounded-2xl text-white bg-[#1f74ec]"
              >
                {mutation.isLoading || mutateLogin.isLoading ? (
                  <ButtonSpinner />
                ) : (
                  isLogin
                )}
              </button>
              {/* {!isRegister ? (
                <button
                  
                  className="w-[90%] h-[35px] gap-2 flex justify-center items-center transition duration-300 hover:bg-[#dce5f3] w-90% rounded-2xl text-[#1f74ec] bg-[#eef4fe]"
                >
                  <img className="w-[15px]" src={google} alt="google"></img>{" "}
                  Google
                </button>
              ) : null} */}
            </div>
          </form>
          <div className="w-[100%] flex justify-center"></div>
          {/* {isRegister ? (
            <div className="flex justify-center items-center gap-4">
              <div className="w-[110px] h-[2px] bg-[#eceef2]"></div>
              <span className="text-sm">OR</span>
              <div className="w-[110px] h-[2px] bg-[#eceef2]"></div>
            </div>
          ) : null} */}
          {/* {isRegister ? (
            <div
              
              className="w-[100%] flex justify-center"
            >
              <button className="w-[90%] h-[35px] flex justify-center items-center gap-4 rounded-2xl text-white bg-[#1f74ec]">
                <img className="w-[15px]" src={google} alt="google"></img>{" "}
                Google
              </button>
            </div>
          ) : (
            " "
          )} */}
          {!isRegister ? (
            <div>
              <p className="text-sm mt-4">
                Already have an Account?{" "}
                <Link className="text-[#1f74ec]" to="/register">
                  Sign up
                </Link>
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}

export default LogRegTable;
