import { React, useState } from "react";
import getImageUrl from "../utils/imageGetter";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/userContext";
import { axiosLogout } from "../https/auth";

function HeaderUser() {
  const [navShown, setNavShown] = useState(false);
  const [searchBar, setsearchBar] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const { user, changeUser } = useUserContext();
  const isUser = user.isUserAvailable;
  const navigate = useNavigate();

  const navIcon = () => {
    if (navShown) return "XCircle";
    return "hamburger-menu";
  };

  const searchBarHandler = () => {
    setsearchBar((state) => !state);
  };

  const showNavHandler = () => {
    setNavShown((state) => !state);
  };

  const dropDownHandler = () => {
    setDropDown((state) => !state);
  };

  const logoutModalHandler = () => {
    setLogoutModal((state) => !state);
  };

  const onLogoutHandler = async () => {
    delete user.userInfo;
    changeUser({
      isUserAvailable: false,
    });
    // await axiosLogout()
    return navigate("/");
  };

  return (
    <>
      <header className="flex py-[2vh] px-[15px] items-center bg-black justify-between md:py-[2vh] md:px-[3vw] xl:px-[9vw] select-none">
        <section className={"modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black/75 z-[2] " + (logoutModal ? "" : "hidden")}>
          <div className="modal-cont border-2 border-color-1 bg-white rounded shadow-lg w-[95%] lg:w-2/3 p-[15px] md:p-10 flex flex-col items-center justify-between gap-9">
            <p className="modal-text text-3xl md:text-4xl text-center font-medium">Anda Yakin Ingin Keluar?</p>
            <div className="flex flex-col md:flex-row gap-3 w-full">
              <button type="button" className="close-modal bg-white rounded-md w-full p-[10px] hover:bg-[#dedede] border border-color-1 text-lg font-medium" onClick={onLogoutHandler}>
                Yes
              </button>
              <button type="button" className="close-modal bg-color-1 rounded-md w-full p-[10px] hover:bg-color-1-hover text-lg font-medium" onClick={logoutModalHandler}>
                Cancel
              </button>
            </div>
          </div>
        </section>

        <section className="left-head flex md:flex md:gap-[3.5vw]">
          <section className="coffee-logo">
            <Link to="/" className="flex gap-[15px] items-center">
              <img className="select-none" src={getImageUrl("coffee-logo-white", "svg")} alt="coffee-shop-logo" />
              <h1 className="text-white font-sacramento select-none cursor-pointer text-xl font-normal">Coffee Shop</h1>
            </Link>
          </section>
          <nav className="left-nav items-center hidden lg:flex lg:gap-[3vw] text-sm font-medium">
            <Link to="/">
              <p className="text-white select-none cursor-pointer pb-2">Home</p>
            </Link>
            <Link to="/product">
              <p className="active text-white select-none cursor-pointer pb-2 border-b border-color-1">Product</p>
            </Link>
          </nav>
        </section>
        <img className="hamburger w-[30px] h-[30px] cursor-pointer lg:hidden select-none" id="hamburger-menu" src={getImageUrl(navIcon(), "svg")} alt="hamburger" onClick={showNavHandler} />
        <div className={" nav-down absolute top-[65px] right-[0px] w-screen h-screen p-5 bg-black flex flex-col gap-3 items-center lg:hidden " + (navShown ? "" : "hidden")}>
          <input type="text" placeholder="Search..." className="w-full text-white p-3 pl-10 rounded-md mb-4 bg-[#aeaeae] bg-[url(./assets/images/Search.svg)] bg-no-repeat bg-[center_left_10px] placeholder:text-white" />
          <Link to="/">
            <p className=" text-white text-xl select-none cursor-pointer mb-4">Home</p>
          </Link>
          <Link to="/product">
            <p className="active text-color-1 text-xl select-none cursor-pointer mb-4">Product</p>
          </Link>
          <Link to="/checkout" className="flex gap-[15px] items-center mb-4">
            <img className="w-[24px] h-[24px] max-w-none" src={getImageUrl("ShoppingCart -white", "svg")} alt="shopping-cart" />
            <p className="your-cart text-white text-xl select-none cursor-pointer">Your Cart</p>
          </Link>
          <Link to="/login" className={"w-full " + (isUser ? "hidden" : "")}>
            <button type="button" className=" text-xl text-white bg-transparent border border-white hover:bg-white/50 px-2 md:px-[18px] py-2 md:py-[12px] rounded-md w-[100%] hover:bg-color-1-hover">
              Sign In
            </button>
          </Link>
          <Link to="/register" className={"w-full " + (isUser ? "hidden" : "")}>
            <button type="button" className=" text-xl text-color-2 bg-color-1 border border-transparent px-2 md:px-[18px] py-2 md:py-[12px] rounded-md w-full hover:bg-color-1-hover">
              Sign Up
            </button>
          </Link>
          <Link to="/history" className={isUser ? "" : "hidden"}>
            <p className="history cursor-pointer text-white text-xl mb-[16px]">History</p>
          </Link>
          <Link to="/profile" className={"flex gap-4 items-center mb-[16px] " + (isUser ? "" : "hidden")}>
            <div className="profile-pic bg-[url(./assets/images/profile-pic-2.webp)] w-[48px] h-[48px]"></div>
            <p className="profile cursor-pointer text-white text-xl">Profile</p>
          </Link>
          <button type="button" className={"logout bg-color-1 p-2 rounded-md w-full hover:bg-color-1-hover " + (isUser ? "" : "hidden")} onClick={logoutModalHandler}>
            Logout
          </button>
        </div>
        <nav className="right-nav hidden lg:flex lg:items-center lg:gap-[22px]">
          <div className={"search-wrapper flex bg-white p-2 rounded-md transition-all items-center " + (!searchBar ? "hidden" : "")}>
            <input type="text" placeholder="Search..." className=" flex-1 rounded-md text-sm placeholder:text-sm focus:outline-none "></input>
            <img src={getImageUrl("x-icon", "svg")} alt="x-icon" className="cursor-pointer" onClick={searchBarHandler} />
          </div>
          <img className={"w-[24px] h-[24px] cursor-pointer " + (!searchBar ? "" : "hidden")} src={getImageUrl("Search", "svg")} alt="search" onClick={searchBarHandler} />
          <Link to="/checkout">
            <img className="cursor-pointer w-[24px] h-[24px]" src={getImageUrl("ShoppingCart -white", "svg")} alt="shopping-cart" />
          </Link>
          <Link to="/login" className={isUser ? "hidden" : ""}>
            <button type="button" className={"text-sm text-white bg-transparent border border-white hover:bg-white/50 px-2 md:px-[18px] py-2 md:py-[12px] rounded-md w-[100%] hover:bg-color-1-hover "}>
              Sign In
            </button>
          </Link>
          <Link to="/register" className={isUser ? "hidden" : ""}>
            <button type="button" className={"text-sm text-color-2 bg-color-1 border border-transparent px-2 md:px-[18px] py-2 md:py-[12px] rounded-md w-[100%] hover:bg-color-1-hover whitespace-nowrap "}>
              Sign Up
            </button>
          </Link>
          <div className={"hidden relative lg:flex items-center gap-2 " + (isUser ? "" : "lg:hidden")}>
            <div className="profile-pic bg-[url(./assets/images/profile-pic-2.webp)] w-[48px] h-[48px]"></div>
            <div className=" cursor-pointer">
              <img src={getImageUrl("Arrow - Down Circle", "svg")} alt="drop-down" onClick={dropDownHandler} />
            </div>
            <div className={"absolute flex flex-col gap-3 items-center bottom-[-160px] right-0 p-4 text-white bg-black rounded-sm w-[250%] " + (dropDown ? "" : "hidden")}>
              <Link to="/history">
                <p className="history cursor-pointer">History</p>
              </Link>
              <Link to="/profile">
                <p className="profile cursor-pointer">Profile</p>
              </Link>
              <button type="button" className="logout bg-color-1 p-2 rounded-md w-full hover:bg-color-1-hover" onClick={logoutModalHandler}>
                Logout
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default HeaderUser;
