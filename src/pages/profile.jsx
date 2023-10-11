import React from "react";
import getImageUrl from "../utils/imageGetter";
import Header from "../components/HeaderUser";
import Footer from "../components/Footer";
// import { useNavigate } from "react-router-dom"; gunakan ketika ada logika sebelum navigasi
import { Link } from "react-router-dom";

function profile() {
  return (
    <>
      <Header></Header>
      <main className="px-[15px] md:px-[3vw] xl:px-[9vw] mt-[7.5vh] mb-[4vh]">
        <h2 className="title text-color-2 text-[48px] font-medium text-center lg:text-start">Profile</h2>
        <section className="profile-cont mt-[4vh] flex flex-col lg:flex-row gap-[20px]">
          <section className="profile-left lg:w-[33%] h-fit py-[24px] px-[28px] flex flex-col items-center gap-[15px] border border-[#e8e8e8]">
            <p className="name text-color-2 text-[22px] font-medium">Ghaluh Wizard</p>
            <p className="email text-[#4f5665]">ghaluhwizz@gmail.com</p>
            <img src={getImageUrl("profile-pic", "png")} alt="profile-pic" />
            <button className="upload-photo w-[100%] py-[12px] px-[18px] bg-color-1 hover:bg-color-1-hover cursor-pointer rounded-[5px] text-color-2 text-sm font-medium tracking-[.75px]">Upload New Photo</button>
            <p className="join-date text-[#4f5665]">
              Since <span className="font-semibold">20 January 2022</span>
            </p>
          </section>
          <section className="profile-right pt-[23px] px-[50px] pb-[41px] flex flex-col gap-[25px] border border-[#e8e8e8] w-[100%]">
            <label className="mb-[-12px] text-color-2 font-semibold" htmlFor="full-name">
              Full Name
            </label>
            <input
              className="py-[14px] px-[13px] bg-[#fcfdfe] border border-[#dedede] rounded-[10px] bg-[url(./assets/images/Profile.svg)] bg-no-repeat bg-[center_left_13px] pl-[45px]"
              type="text"
              id="full-name"
              defaultValue="Ghaluh Wizard"
            />
            <label className="mb-[-12px] text-color-2 font-semibold" htmlFor="email">
              Email
            </label>
            <input
              className="py-[14px] px-[13px] bg-[#fcfdfe] border border-[#dedede] rounded-[10px] bg-[url(./assets/images/mail-logo.svg)] bg-no-repeat bg-[center_left_16px] pl-[45px]"
              type="text"
              id="email"
              defaultValue="ghaluhwizz@gmail.com"
            />
            <label className="mb-[-12px] text-color-2 font-semibold" htmlFor="phone">
              Phone
            </label>
            <input
              className="py-[14px] px-[13px] bg-[#fcfdfe] border border-[#dedede] rounded-[10px] bg-[url(./assets/images/PhoneCall.svg)] bg-no-repeat bg-[center_left_15px] pl-[45px]"
              type="number"
              id="phone"
              defaultValue="082116304338"
            />
            <div className="flex justify-between">
              <label className="password-label relative mb-[-12px] text-color-2 font-semibold" htmlFor="password">
                Password
              </label>
              <p className="cursor-pointer text-color-1 hover:text-color-1-hover">Set New Password</p>
            </div>
            <span className="eye-slash relative before:absolute before:bg-[url(./assets/images/EyeSlash.svg)] before:bg-no-repeat before:w-[16px] before:h-[16px] before:top-[30%] before:right-[15px] before:z-[1]">
              <input
                className="w-[100%] py-[14px] px-[13px] bg-[#fcfdfe] border border-[#dedede] rounded-[10px] bg-[url(./assets/images/password-logo.svg)] bg-no-repeat bg-[center_left_16px] pl-[45px]"
                type="password"
                id="password"
                defaultValue="12345"
              />
            </span>
            <label className="mb-[-12px] text-color-2 font-semibold" htmlFor="address">
              Address
            </label>
            <input
              className="py-[14px] px-[13px] bg-[#fcfdfe] border border-[#dedede] rounded-[10px] bg-[url(./assets/images/Location.svg)] bg-no-repeat bg-[center_left_15px] pl-[45px]"
              type="text"
              id="address"
              defaultValue="Griya Bandung Indah"
            />
            <button type="button" className="py-[12px] px-[18px] bg-color-1 cursor-pointer hover:bg-color-1-hover rounded-[10px] text-color-2 text-sm font-medium tracking-[.75px]">
              Submit
            </button>
          </section>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default profile;
