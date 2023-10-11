import React from "react";
import getImageUrl from "../utils/imageGetter";
import Footer from "../components/Footer";
// import { useNavigate } from "react-router-dom"; gunakan ketika ada logika sebelum navigasi
import { Link } from "react-router-dom";

function register() {
  return (
    <>
      <main className="flex">
        <section className="left hidden lg:block mr-[30px] xl:mr-[70px] bg-[url(./assets/images/register-bg.webp)] bg-cover w-[460px]">
          {/* <!-- <img className="" src="./assets/images/register-bg.webp" alt="register-page-bg" /> --> */}
        </section>
        <section className="right bg-[url(./assets/images/register-bg.webp)] bg-no-repeat bg-cover lg:bg-none px-[15px] lg:px-[0px] pt-[30px] lg:pt-[6.5vh] pb-[14.5vh] w-[100%] lg:w-[50%]">
          <section className="coffee-logo flex gap-[15px] items-center mb-[4vh]">
            <img src={getImageUrl("Vector", "svg")} alt="coffee-shop-logo" />
            <Link to="/">
              <h1 className="font-sacramento text-[#8e6447] text-[20px] cursor-pointer">Coffee Shop</h1>
            </Link>
          </section>
          <section className="register-form flex flex-col gap-[25px]">
            <h2 className="text-[#8e6447] text-[22px] font-semibold">Register</h2>
            <p className="text-white lg:text-[#4f5665]">Fill out the form correctly</p>

            <label className="text-white lg:text-color-2 font-semibold" htmlFor="full-name">
              Full Name
            </label>
            <input
              className="mt-[-12px] py-[14px] px-[13px] text-xs tracking-[.75px] rounded-[10px] border border-[#dedede] bg-[url(./assets/images/Profile.svg)] bg-no-repeat bg-[center_left_8px] pl-[40px]"
              type="text"
              id="full-name"
              placeholder="Enter Your Full Name"
            />
            <label className="text-white lg:text-color-2 font-semibold" htmlFor="email">
              Email
            </label>
            <input
              className="mt-[-12px] py-[14px] px-[13px] text-xs tracking-[.75px] rounded-[10px] border border-[#dedede] bg-[url(./assets/images/mail-logo.svg)] bg-no-repeat bg-[center_left_13px] pl-[40px]"
              type="text"
              id="email"
              placeholder="Enter Your Email"
            />
            <label className="text-white lg:text-color-2 font-semibold" htmlFor="password">
              Password
            </label>
            <span className="eye-slash relative before:absolute before:bg-[url(./assets/images/EyeSlash.svg)] before:bg-no-repeat before:w-[16px] before:h-[16px] before:top-[6px] before:-right-[-20px] before:z-[1]">
              <input
                className="mt-[-12px] py-[14px] px-[13px] text-xs tracking-[.75px] rounded-[10px] border border-[#dedede] w-[100%] bg-[url(./assets/images/password-logo.svg)] bg-no-repeat bg-[center_left_13px] pl-[40px]"
                type="password"
                id="password"
                placeholder="Enter Your Password"
              />
            </span>
            <label className="text-white lg:text-color-2 font-semibold" htmlFor="re-password">
              Confirm Password
            </label>
            <span className="eye-slash relative before:absolute before:bg-[url(./assets/images/EyeSlash.svg)] before:bg-no-repeat before:w-[16px] before:h-[16px] before:top-[6px] before:-right-[-20px] before:z-[1]">
              <input
                className="mt-[-12px] py-[14px] px-[13px] text-xs tracking-[.75px] rounded-[10px] border border-[#dedede] w-[100%] bg-[url(./assets/images/password-logo.svg)] bg-no-repeat bg-[center_left_13px] pl-[40px]"
                type="password"
                id="re-password"
                placeholder="Enter Your Password"
              />
            </span>
            <button type="button" className="register h-[50px] text-color-2 font-semibold bg-color-1 hover:bg-color-1-hover cursor-pointer rounded-[10px]">
              Register
            </button>

            <p className="have-account text-center text-white lg:text-black">
              Have An Account?
              <Link to="/login">
                <span className="login-link text-color-1"> Login</span>
              </Link>
            </p>
            <p className="border-1 relative text-white lg:text-[#aaa] text-xs tracking-[.06px] text-center before:absolute before:w-[40%] before:h-[8px] before:left-[0px] before:border-b before:border-[#dedede] after:absolute after:w-[40%] after:h-[8px] after:right-[0px] after:border-b after:border-[#dedede]">
              Or
            </p>
            <section className="other-login flex flex-col lg:flex-row gap-[14px]">
              <button
                type="button"
                className="facebook h-[64px] w-[100%] lg:w-[31vw] bg-white pl-[3%] text-[#4f5665] text-lg font-medium tracking-[.09px] rounded-[15px] shadow-md shadow-black/25 cursor-pointer hover:bg-[#e8e8e8] bg-[url(./assets/images/facebook-logo.svg)] bg-no-repeat bg-[center_left_26%]"
              >
                Facebook
              </button>
              <button
                type="button"
                className="google h-[64px] w-[100%] lg:w-[31vw] bg-white pl-[3%] text-[#4f5665] text-lg font-medium tracking-[.09px] rounded-[15px] shadow-md shadow-black/25 cursor-pointer hover:bg-[#e8e8e8] bg-[url(./assets/images/google-logo.svg)] bg-no-repeat bg-[center_left_26%]"
              >
                Google
              </button>
            </section>
          </section>
        </section>
      </main>
      <Footer></Footer>{" "}
    </>
  );
}

export default register;
