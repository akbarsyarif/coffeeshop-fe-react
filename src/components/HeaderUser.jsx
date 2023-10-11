import React from "react";
import getImageUrl from "../utils/imageGetter";
import { Link } from "react-router-dom";

function HeaderUser() {
  return (
    <>
      <header className="flex py-[2vh] px-[15px] items-center bg-black justify-between md:py-[2vh] md:px-[3vw] xl:px-[9vw]">
        <section className="left-head flex md:flex md:gap-[3.5vw]">
          <section className="coffee-logo flex gap-[15px] items-center">
            <img className="select-none" src={getImageUrl("coffee-logo-white", "svg")} alt="coffee-shop-logo" />
            <h1 className="text-white font-sacramento select-none cursor-pointer text-xl font-normal">Coffee Shop</h1>
          </section>
          <nav className="left-nav items-center hidden md:flex md:gap-[3vw] text-sm font-medium">
            <Link to="/">
              <p className="text-white select-none cursor-pointer pb-2">Home</p>
            </Link>
            <Link to="/product">
              <p className="active text-white select-none cursor-pointer pb-2 border-b border-color-1">Product</p>
            </Link>
          </nav>
        </section>
        <img className="hamburger cursor-pointer md:hidden select-none" id="hamburger-menu" src={getImageUrl("hamburger-menu", "svg")} alt="hamburger" onclick="toggleNavBar(); return false" />
        <nav className="right-nav hidden md:flex md:items-center md:gap-[22px]">
          <img className="w-[24px] h-[24px]" src={getImageUrl("Search", "svg")} alt="search" />
          <img className="w-[24px] h-[24px]" src={getImageUrl("ShoppingCart -white", "svg")} alt="shopping-cart" />
          <Link to="/login">
            <button type="button" className="text-sm text-white bg-transparent border border-white hover:bg-white/50 px-2 md:px-[18px] py-2 md:py-[12px] rounded-md w-[100%] hover:bg-color-1-hover">
              Sign In
            </button>
          </Link>
          <Link to="/register">
            <button type="button" className="text-sm text-color-2 bg-color-1 border border-transparent px-2 md:px-[18px] py-2 md:py-[12px] rounded-md w-[100%] hover:bg-color-1-hover whitespace-nowrap">
              Sign Up
            </button>
          </Link>
        </nav>
      </header>
    </>
  );
}

export default HeaderUser;
