import React, { useEffect, useState } from "react";
import getImageUrl from "../utils/imageGetter";
import Header from "../components/HeaderUser";
import Footer from "../components/Footer";
// import { useNavigate } from "react-router-dom"; gunakan ketika ada logika sebelum navigasi
import { Link, useNavigate, useParams } from "react-router-dom";
// import { useUserContext } from "../contexts/userContext";
import { axiosGetUserInfo, axiosChangepassword, axiosChangeUser } from "../https/user";
import { useSelector, useDispatch } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.user);
  const [fullName, setfullName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [userPic, setUserPic] = useState();
  const [changePwdModal, setChangePwdModal] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState("");
  const [file, setFile] = useState();
  const [changeBody, setChangeBody] = useState();

  const [confirmModal, setConfirmModal] = useState(false);
  // const { user } = useUserContext();
  const isUser = user.isUserAvailable;
  const navigate = useNavigate();
  const { userId } = useParams();

  useEffect(() => {
    async function fetchData() {
      if (!isUser) return navigate("/login");
      const path = user.userInfo.id;
      const jwt = user.token;

      try {
        const result = await axiosGetUserInfo(path, jwt);
        // console.log(result.data.result[0]);
        setfullName(result.data.result[0].full_name);
        setEmail(result.data.result[0].email);
        setPhone(result.data.result[0].phone_number);
        setAddress(result.data.result[0].address);
        setUserPic(import.meta.env.VITE_BE_HOST + result.data.result[0].profile_pic);
      } catch (error) {
        console.log(error);
        if (error.response.data.msg === "Please Login Again") navigate("/login");
      }
    }
    fetchData();
  }, []);

  const changePwdModalHandler = () => {
    setChangePwdModal((state) => !state);
    setPasswordMessage("");
  };

  const changePassword = async (e) => {
    e.preventDefault();
    const body = {
      old_password: e.target["old-password"].value,
      new_password: e.target["new-password"].value,
      confirm_password: e.target["confirm-password"].value,
    };
    const path = user.userInfo.id;
    const jwt = user.token;
    try {
      if (!body.old_password || !body.new_password || !body.confirm_password) return setPasswordMessage("Form Harus Terisi Semua");
      if (body.old_password === body.new_password) return setPasswordMessage("Password Baru Harus Berbeda Dengan Password Lama");
      if (body.new_password !== body.confirm_password) return setPasswordMessage("Password Baru Anda Tidak Sama");

      await axiosChangepassword(body, jwt, path);
      setChangePwdModal((state) => !state);
    } catch (error) {
      console.log(error);
      if (error.response.data.msg === "Wrong Old Password") return setPasswordMessage("Password Lama Anda Saat Ini Salah");
    }
  };

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setUserPic(URL.createObjectURL(e.target.files[0]));
      setFile(e.target.files[0]);
    }
  };

  const changeSubmit = async (e) => {
    e.preventDefault();
    const body = {
      fullName: e.target["full-name"].value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      address: e.target.address.value,
    };
    let data = new FormData();
    data.append("profile_pic", file);
    // data.set("fullName", body.fullName);
    // data.set("email", body.email);
    data.set("phone_number", body.phone);
    data.set("address", body.address);

    const formData = data;
    console.log(formData);
    const jwt = user.token;
    const userId = user.userInfo.id;
    try {
      const result = await axiosChangeUser(formData, jwt, userId);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
    // for (const pair of data.entries()) console.log(pair);
  };

  // const

  return (
    <>
      <Header></Header>
      <section className={"modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black/75 z-[2] " + (changePwdModal ? "" : "hidden")}>
        <div className="modal-cont border-2 border-color-1 bg-white rounded shadow-lg w-[95%] lg:w-2/3 p-[15px] md:p-10 flex flex-col items-center justify-between gap-9">
          <p className="text-3xl font-semibold">Change Password</p>
          <form className="flex flex-col gap-5 w-full" onSubmit={changePassword}>
            <label htmlFor="old-password" className=" text-xl font-medium">
              Your Old Password
            </label>
            <div className="password-cont flex items-center  mt-[-10px]">
              <input type="password" name="old-password" id="old-password" placeholder="Old Password" className="w-[100%] py-[14px] px-[13px] bg-[#fcfdfe] border border-r-0 border-[#dedede] rounded-l-[10px] focus:outline-none" />
              <img src={getImageUrl("EyeSlash", "svg")} alt="eye" className="cursor-pointer bg-[#fcfdfe] border border-l-0 border-[#dedede] rounded-r-[10px] py-[18px]  px-[13px]" />
            </div>
            <label htmlFor="new-password" className=" text-xl font-medium">
              Your New Password
            </label>
            <div className="password-cont flex items-center  mt-[-10px]">
              <input type="password" name="new-password" id="new-password" placeholder="New Password" className="w-[100%] py-[14px] px-[13px] bg-[#fcfdfe] border border-r-0 border-[#dedede] rounded-l-[10px] focus:outline-none" />
              <img src={getImageUrl("EyeSlash", "svg")} alt="eye" className="cursor-pointer bg-[#fcfdfe] border border-l-0 border-[#dedede] rounded-r-[10px] py-[18px]  px-[13px]" />
            </div>
            <label htmlFor="confirm-password" className=" text-xl font-medium">
              Confirm New Password
            </label>
            <div className="password-cont flex items-center  mt-[-10px]">
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                placeholder="Confirm Password"
                className="w-[100%] py-[14px] px-[13px] bg-[#fcfdfe] border border-r-0 border-[#dedede] rounded-l-[10px] focus:outline-none"
              />
              <img src={getImageUrl("EyeSlash", "svg")} alt="eye" className="cursor-pointer bg-[#fcfdfe] border border-l-0 border-[#dedede] rounded-r-[10px] py-[18px]  px-[13px]" />
            </div>
            <p className={"password-message text-center font-bold text-[#ff0000] " + (passwordMessage === "" ? "hidden" : "")}>{passwordMessage}</p>

            <div className="flex flex-col md:flex-row gap-3 w-full mt-6">
              <button type="submit" className="close-modal bg-white rounded-md w-full p-[10px] hover:bg-[#dedede] border border-color-1 text-lg font-medium">
                Confirm
              </button>
              <button type="button" className="close-modal bg-color-1 rounded-md w-full p-[10px] hover:bg-color-1-hover text-lg font-medium" onClick={changePwdModalHandler}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </section>

      <main className="px-[15px] md:px-[3vw] xl:px-[9vw] mt-[7.5vh] mb-[4vh]">
        <h2 className="title text-color-2 text-[48px] font-medium text-center lg:text-start">Profile</h2>
        <form className="profile-cont mt-[4vh] flex flex-col lg:flex-row gap-[20px]" onSubmit={changeSubmit}>
          <section className="profile-left lg:w-[33%] h-fit py-[24px] px-[28px] flex flex-col items-center gap-[15px] border border-[#e8e8e8]">
            <p className="name text-color-2 text-[22px] font-medium">{fullName}</p>
            <p className="email text-[#4f5665]">{email}</p>
            <div className="h-[113px] w-[113px] rounded-full overflow-hidden">
              <img height={"113px"} width={"113px"} src={userPic ? userPic : getImageUrl("noImage", "svg")} alt="profile-pic" className="rounded-full" />
            </div>
            <label htmlFor="profileImage" className="upload-photo text-center w-[100%] py-[12px] px-[18px] bg-color-1 hover:bg-color-1-hover cursor-pointer rounded-[5px] text-color-2 text-sm font-medium tracking-[.75px]">
              Upload New Photo
            </label>
            <input type="file" name="" id="profileImage" className="hidden" onChange={onImageChange} />
            <p className="join-date text-[#4f5665]">
              Since <span className="font-semibold">20 January 2022</span>
            </p>
          </section>
          <section className="profile-right pt-[23px] px-[50px] pb-[41px] flex flex-col gap-[25px] border border-[#e8e8e8] w-[100%]">
            <label className="mb-[-12px] text-color-2 font-semibold" htmlFor="full-name">
              Full Name
            </label>
            <input className="py-[14px] px-[13px] bg-[#fcfdfe] border border-[#dedede] rounded-[10px] bg-[url(./assets/images/Profile.svg)] bg-no-repeat bg-[center_left_13px] pl-[45px]" type="text" id="full-name" defaultValue={fullName} />
            <label className="mb-[-12px] text-color-2 font-semibold" htmlFor="email">
              Email
            </label>
            <input className="py-[14px] px-[13px] bg-[#fcfdfe] border border-[#dedede] rounded-[10px] bg-[url(./assets/images/mail-logo.svg)] bg-no-repeat bg-[center_left_16px] pl-[45px]" type="text" id="email" defaultValue={email} />
            <label className="mb-[-12px] text-color-2 font-semibold" htmlFor="phone">
              Phone
            </label>
            <input
              className="py-[14px] px-[13px] bg-[#fcfdfe] border border-[#dedede] rounded-[10px] bg-[url(./assets/images/PhoneCall.svg)] bg-no-repeat bg-[center_left_15px] pl-[45px]"
              type="number"
              id="phone"
              placeholder="Masukkan Nomor Telefon Anda"
              defaultValue={phone === null ? "" : phone}
            />
            <div className="flex justify-between">
              <label className="password-label relative mb-[-12px] text-color-2 font-semibold" htmlFor="password">
                Password
              </label>
              <p className="cursor-pointer text-color-1 hover:text-color-1-hover" onClick={changePwdModalHandler}>
                Set New Password
              </p>
            </div>
            <span className="eye-slash relative before:absolute before:bg-[url(./assets/images/EyeSlash.svg)] before:bg-no-repeat before:w-[16px] before:h-[16px] before:top-[30%] before:right-[15px] before:z-[1]">
              <input
                className="w-[100%] py-[14px] px-[13px] bg-[#fcfdfe] border border-[#dedede] rounded-[10px] bg-[url(./assets/images/password-logo.svg)] bg-no-repeat bg-[center_left_16px] pl-[45px]"
                type="password"
                id="password"
                defaultValue="12345"
                disabled
              />
            </span>
            <label className="mb-[-12px] text-color-2 font-semibold" htmlFor="address">
              Address
            </label>
            <input
              className="py-[14px] px-[13px] bg-[#fcfdfe] border border-[#dedede] rounded-[10px] bg-[url(./assets/images/Location.svg)] bg-no-repeat bg-[center_left_15px] pl-[45px]"
              type="text"
              id="address"
              placeholder="Masukan Alamat Anda"
              defaultValue={address}
            />
            <button type="submit" className="py-[12px] px-[18px] bg-color-1 cursor-pointer hover:bg-color-1-hover rounded-[10px] text-color-2 text-sm font-medium tracking-[.75px]">
              Submit
            </button>
          </section>
        </form>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Profile;
