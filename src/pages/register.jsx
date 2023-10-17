import { React, useState } from "react";
import getImageUrl from "../utils/imageGetter";
// import { useNavigate } from "react-router-dom"; gunakan ketika ada logika sebelum navigasi
import { Link, useNavigate } from "react-router-dom";
import { axiosRegister } from "../https/auth";
import { axiosSendOtp, axiosVerifyOtp } from "../https/mail";

function register() {
  const [errorMessage, setErrorMessage] = useState("");
  const [otpModal, setOtpModal] = useState(false);
  const [otpError, setOtpError] = useState("");
  const [emailUser, setEmailuser] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const body = {
      full_name: e.target["full-name"].value,
      email: e.target.email.value,
      password: e.target.password.value,
      confirm_password: e.target["re-password"].value,
    };
    const forOtp = {
      email: e.target.email.value,
    };
    const checkEmail = new RegExp(/^\S+@\S+\.\S+$/);
    console.log(body);
    console.log(checkEmail.test(body.email));
    try {
      if (!body.full_name || !body.email || !body.password || !body.confirm_password) return setErrorMessage("Form Diatas Harus Dilengkapi");
      if (!checkEmail.test(body.email)) return setErrorMessage("Tolong Masukkan Email Yang Valid");
      if (body.password !== body.confirm_password) return setErrorMessage("Password Yand Anda Masukkan Tidak Sama");
      await axiosRegister(body);
      await axiosSendOtp(forOtp);
      setEmailuser(body.email);
      setOtpModal((state) => !state);
    } catch (error) {
      console.log(error);
      if (error.response.data.msg === "email already used") return setErrorMessage("Email Sudah Digunakan");
    }
  };

  const otpHandler = async (e) => {
    e.preventDefault();
    const body = {
      Your_OTP: e.target.otp.value,
      email: emailUser,
    };
    try {
      if (!body.Your_OTP) return setOtpError("Kode OTP Harus Diisi, Cek Email Anda");
      await axiosVerifyOtp(body);
      return navigate("/login");
    } catch (error) {
      console.log(error);
      if (error.response.data.msg === "Your OTP Is Wrong") return setOtpError("Kode Yang Anda Masukan Salah");
    }
  };
  return (
    <>
      <main className="flex">
        <section className={"modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black/75 z-[2] " + (otpModal ? "" : "hidden")}>
          <div className="modal-cont border-2 border-color-1 bg-white rounded shadow-lg w-[95%] lg:w-2/3 p-[15px] md:p-10 flex flex-col items-center justify-between gap-[20px]">
            <p className="modal-text text-3xl md:text-4xl text-center font-medium">Kami Baru Saja Mengirimkan Kode Verifikasi {emailUser}</p>
            <p>Masukkan Kode Verifikasi Anda</p>
            <p className={"error-message text-center w-full font-bold text-[#ff0000] " + (otpError === "" ? "hidden" : "")}>{otpError}</p>
            <form className="w-full md:w-1/3 xl:w-1/4 flex flex-col gap-[20px]" onSubmit={otpHandler}>
              <input
                type="number"
                id="otp"
                maxLength="4"
                size="4"
                onInput={(e) => {
                  if (e.target.value.length > e.target.maxLength) e.target.value = e.target.value.slice(0, e.target.maxLength);
                  // e.preventDefault();
                }}
                className="w-full border-2 rounded-md text-4xl py-4 text-center "
              />
              <button type="submit" className="close-modal bg-color-1 rounded-md w-full p-[10px] hover:bg-color-1-hover text-lg font-medium">
                Verify
              </button>
            </form>
          </div>
        </section>

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
            <form className="flex flex-col gap-[25px]" onSubmit={submitHandler}>
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
              <p className={"error-message text-center font-bold text-[#ff0000] " + (errorMessage === "" ? "hidden" : "")}>{errorMessage}</p>
              <button type="submit" className="register h-[50px] text-color-2 font-semibold bg-color-1 hover:bg-color-1-hover cursor-pointer rounded-[10px]">
                Register
              </button>
            </form>

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
    </>
  );
}

export default register;
