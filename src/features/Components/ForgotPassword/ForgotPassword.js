import React, { useState } from "react";
import styles from "./style.module.css";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ButtonSpinner from "../ButtonSpinner/ButtonSpinner";
import "firebase/compat/auth";  
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../firebase/firebase";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function ForgotPassword() {

  const [] = useState(false)
  const {register, handleSubmit, reset, formState:{errors, isSubmitting}} = useForm()
 
  const sendPasswordReset = async(data)=>{
    try{
      await sendPasswordResetEmail(auth, data.email)
      console.log("success")
      reset()
    }catch(error)  {
    
      console.log(error)

    }
  }

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

export default ForgotPassword;
