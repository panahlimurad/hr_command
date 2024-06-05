import React, { useEffect, useState } from "react";
import styles from "./login.module.css";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Checkbox from "@mui/material/Checkbox";
import google from "../../images/icons/google.jpg.png";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithPopup, setPersistence, browserSessionPersistence, browserLocalPersistence, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth, provider } from "../../../firebase/firebase";
import { useForm } from "react-hook-form";
import ButtonSpinner from "../ButtonSpinner/ButtonSpinner";
import notify from "../../Functions/Toastify/notify";
import { motion } from "framer-motion";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function LogRegTable({ title, isLogin, isRegister }) {
  
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleClickPassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleSignUpWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const Login = async(data)=>{
    try{
      await signInWithEmailAndPassword(auth, data.email, data.password)
      notify("Successfully Logged In", "success")
      reset()
      navigate("/dashboard")
    }catch(error){
      console.log(error)
      notify("Login failed, please try again", "error")
    }
  }



  const onSubmit = async (data) => {
    try {
      const persistence = rememberMe ? browserLocalPersistence : browserSessionPersistence;
      await setPersistence(auth, persistence);
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      localStorage.setItem("rememberMe", rememberMe);
      notify("Successfully Registered", "success");
      reset();
      navigate("/login");
    } catch (error) {
      notify("Registration failed, please try again", "error");
    }
  };




  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       navigate("/dashboard");
  //     } else {
  //       console.log("User is logged out");
  //     }
  //   });

  //   return () => unsubscribe();
  // }, [navigate]);

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
          <h1 className="font-bold text-2xl">{title}</h1>
          <p className="text-xs font-light mt-2">
            Welcome! Please enter your details
          </p>
        </div>
        <div className="flex w-full flex-col gap-4 items-center">
          <form
            onSubmit={ !isRegister ? handleSubmit(Login) : handleSubmit(onSubmit) }
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
            <br />
            <div className="relative w-full text-center">
              <input
                className={`${errors.email && "border-solid border-[#1f74ec]"}`}
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
                className={`${showPassword ? 'text-[#a2a8b0"]':'text-[#1f74ec]'}`}
                sx={{
                  position: "absolute",
                  right: 25,
                  top: 6,
                  cursor: "pointer",
                }}
              />
            </div>
            <div
              className={`flex gap-10 items-center mt-4 ${
                isRegister ? "justify-start ml-1" : "justify-around"
              }`}
            >
              <div className="text-xs">
                <Checkbox onChange={(e) => setRememberMe(e.target.checked)} {...label} />
                Remember me
              </div>
              {!isRegister ? (
                <p className="text-xs">
                  <Link to="/forgot_password" className="text-[#1f74ec]">Forgot Password</Link>
                </p>
              ) : null}
            </div>
            <div className="w-full flex justify-center flex-col gap-4">
              <button
                type="submit"
                className="w-[90%] h-[35px] flex justify-center items-center w-90% rounded-2xl text-white bg-[#1f74ec]"
              >
                {isSubmitting ? <ButtonSpinner /> : isLogin}
              </button>
              <button className="w-[90%] h-[35px] gap-2 flex justify-center items-center transition duration-300 hover:bg-[#dce5f3] w-90% rounded-2xl text-[#1f74ec] bg-[#eef4fe]">
              <img className="w-[15px]" src={google} alt="google"></img>{" "} Google
              </button>
            </div>
          </form>
          <div className="w-[100%] flex justify-center"></div>
          {isRegister ? (
            <div className="flex justify-center items-center gap-4">
              <div className="w-[110px] h-[2px] bg-[#eceef2]"></div>
              <span className="text-sm">OR</span>
              <div className="w-[110px] h-[2px] bg-[#eceef2]"></div>
            </div>
          ) : null}
          {isRegister ? (
            <div
              onClick={handleSignUpWithGoogle}
              className="w-[100%] flex justify-center"
            >
              <button className="w-[90%] h-[35px] flex justify-center items-center gap-4 rounded-2xl text-white bg-[#1f74ec]">
                <img className="w-[15px]" src={google} alt="google"></img>{" "}
                Google
              </button>
            </div>
          ) : (
            " "
          )}
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
