import { React, useState } from "react";
import getImageUrl from "../utils/imageGetter";
// import { useNavigate } from "react-router-dom"; gunakan ketika ada logika sebelum navigasi
import { Await, Link, useNavigate } from "react-router-dom";
import { axiosRegister } from "../https/auth";
import { axiosSendOtp, axiosVerifyOtp } from "../https/mail";

function ForgotPassword() {
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <>
      <main className="flex">
        <section className="left hidden lg:block mr-[30px] xl:mr-[70px] bg-[url(./assets/images/forgot-bg.webp)] bg-cover w-[460px]">
          {/* <!-- <img className="" src="./assets/images/register-bg.webp" alt="register-page-bg" /> --> */}
        </section>
        <section className="right bg-[url(./assets/images/forgot-bg.webp)] bg-no-repeat bg-cover h-screen  lg:bg-none px-[15px] lg:px-[0px] pt-[30px] lg:pt-[35vh] lg:pb-[32.5vh] w-[100%] lg:w-[50%]">
          <section className="coffee-logo flex gap-[15px] items-center mb-[4vh] mt-[20vh] lg:mt-0">
            <img src={getImageUrl("Vector", "svg")} alt="coffee-shop-logo" />
            <Link to="/">
              <h1 className="font-sacramento text-[#8e6447] text-[20px] cursor-pointer">Coffee Shop</h1>
            </Link>
          </section>
          <section className="register-form flex flex-col gap-[25px]">
            <h2 className="text-[#8e6447] text-[22px] font-semibold">Fill out the form correctly</h2>
            <p className="text-white lg:text-[#4f5665]">We will send new password to your email</p>
            <form className="flex flex-col gap-[25px]">
              <label className="text-white lg:text-color-2 font-semibold" htmlFor="email">
                Email
              </label>
              <input
                className="mt-[-12px] py-[14px] px-[13px] text-xs tracking-[.75px] rounded-[10px] border border-[#dedede] bg-[url(./assets/images/mail-logo.svg)] bg-no-repeat bg-[center_left_13px] pl-[40px]"
                type="text"
                id="email"
                placeholder="Enter Your Email"
              />

              <p className={"error-message text-center font-bold text-[#ff0000] " + (errorMessage === "" ? "hidden" : "")}>{errorMessage}</p>
              <button type="submit" className="register h-[50px] text-color-2 font-semibold bg-color-1 hover:bg-color-1-hover cursor-pointer rounded-[10px]">
                Submit
              </button>
            </form>
          </section>
        </section>
      </main>
    </>
  );
}

export default ForgotPassword;
