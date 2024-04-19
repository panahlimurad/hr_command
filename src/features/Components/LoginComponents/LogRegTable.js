import React from "react";
import styles from "./login.module.css";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Checkbox from "@mui/material/Checkbox";
import VisibilityIcon from "@mui/icons-material/Visibility";
import google from "../../images/icons/google.jpg.png";
import { Link } from "react-router-dom";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function LogRegTable({ title, isLogin, isGoogle }) {
  return (
    <div className={styles.containerLogin}>
      <div className="w-[90%] gap-5 h-[90%] flex flex-col items-center">
        <div className="text-center">
          <h1 className="font-bold text-2xl">{title}</h1>
          <p className="text-xs font-light mt-2">
            Welcome! Please enter your details
          </p>
        </div>
        <div className="flex w-full flex-col gap-4 items-center">
          <form className="w-[100%] flex flex-col text-center">
            <div>
              <input
                type="text"
                id="username"
                name="username"
                required
                placeholder="Example@gmail.com"
              />
            </div>
            <br />

            <div className="relative">
              <input
                type="password"
                id="password"
                name="password"
                required
                placeholder="Enter your password"
              />
              <br />
              <VisibilityOffIcon
                sx={{
                  position: "absolute",
                  right: 25,
                  top: 6,
                  cursor: "pointer",
                  color: "#a2a8b0",
                }}
              />
            </div>
            <div className={`flex gap-10 items-center mt-4 ${isGoogle ? 'justify-start ml-1': 'justify-around'}`}>
              <div className="text-xs">
                <Checkbox {...label} defaultChecked />
                Remember me
              </div>
              {!isGoogle ? (
                <p className="text-xs">
                  <Link className="text-[#1f74ec]">Forgot Password</Link>
                </p>
              ) : (
                ""
              )}
            </div>
          </form>
          <div className="w-[100%] flex justify-center">
            <button className="w-[90%] h-[35px] rounded-2xl text-white bg-[#1f74ec]">
              {isLogin}
            </button>
          </div>
          {isGoogle ? (
            <div className="flex justify-center items-center gap-4">
              <div className="w-[110px] h-[2px] bg-[#eceef2]"></div>
              <span className="text-sm">OR</span>
              <div className="w-[110px] h-[2px] bg-[#eceef2]"></div>
            </div>
          ) : (
            ""
          )}
          {isGoogle ? (
            <div className="w-[100%] flex justify-center">
              <button
                className="w-[90%] h-[35px] flex justify-center items-center gap-4 rounded-2xl text-white bg-[#1f74ec]"
                s>
                <img className="w-[15px]" src={google}></img> Google
              </button>
            </div>
          ) : (
            " "
          )}
          {!isGoogle ? (
            <div>
              <p className="text-sm mt-4">
                Already have an Account?{" "}
                <Link className="text-[#1f74ec]" to="/register">
                  Sign up
                </Link>
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default LogRegTable;
