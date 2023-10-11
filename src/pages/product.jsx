import React from "react";
import getImageUrl from "../utils/imageGetter";
import Header from "../components/HeaderUser";
import Footer from "../components/Footer";
// import { useNavigate } from "react-router-dom"; gunakan ketika ada logika sebelum navigasi
import { Link } from "react-router-dom";

function product() {
  return (
    <>
      <Header></Header>
      <main className="">
        <section className="hero py-4 md:py-[2vh] lg:py-[5vh] px-[15px] md:px-[3vw] xl:px-[9vw] xl:py-[8vh] md:h-[30vh] bg-[url(./assets/images/product-hero.webp)] bg-cover bg-no-repeat mb-[4vh] bg-[right_-210px_center] md:bg-center">
          <h1 className="hero-text text-center md:text-start text-white text-[48px] font-medium md:w-[80%] 2xl:w-[55%]">We Provide Good Coffee and Healthy Meals</h1>
        </section>

        <section className="promo py-4 select-none">
          <section className="promo-head px-[15px] md:px-[3vw] xl:px-[9vw] mb-[36px] flex flex-col gap-[15px] md:gap-[0px] md:flex-row justify-between items-center">
            <h2 className="text-[#0b0909] text-[48px] font-medium">
              Today <span className="text-[48px] font-medium text-[#8e6447]">Promo</span>
            </h2>
            <section className="page-nav flex w-full md:w-fit justify-evenly gap-[9px]">
              <div className="back select-none cursor-pointer w-[47px] h-[47px] rounded-full bg-[#e8e8e8] hover:bg-[#c6c6c6] bg-[url(./assets/images/arrow-left.svg)] bg-no-repeat bg-center"></div>
              <div className="next select-none cursor-pointer w-[47px] h-[47px] rounded-full bg-color-1 hover:bg-color-1-hover bg-[url(./assets/images/arrow-right.svg)] bg-no-repeat bg-center"></div>
            </section>
          </section>
          <section className="promo-cont flex gap-[4vw] overflow-visible overflow-y-hidden whitespace-nowrap">
            <section className="card pt-[11px] pr-[20px] pl-[15px] min-w-[335px] max-w-[335px] bg-[#88b788] rounded-[20px] flex gap-[9px]">
              <img className="w-[82px] h-[106px] mb-[-5px]" src={getImageUrl("promo-1", "webp")} alt="promo-1" />
              <section className="card-text flex flex-col text-sm font-bold text-black whitespace-pre-line">
                <p className="card-name">Happy Mother's Day!</p>
                <p className="card-desc font-normal mb-[10px]">Get one of our favorite menu for free</p>
                <p className="claim font-medium text-white">Klaim Kupon</p>
              </section>
            </section>
            <section className="card pt-[11px] pr-[20px] pl-[15px] min-w-[335px] max-w-[335px] bg-[#88b788] rounded-[20px] flex gap-[9px]">
              <img className="w-[82px] h-[106px] mb-[-5px]" src={getImageUrl("promo-1", "webp")} alt="promo-1" />
              <section className="card-text flex flex-col text-sm font-bold text-black whitespace-pre-line">
                <p className="card-name">Happy Mother's Day!</p>
                <p className="card-desc font-normal mb-[10px]">Get one of our favorite menu for free</p>
                <p className="claim font-medium text-white">Klaim Kupon</p>
              </section>
            </section>
            <section className="card pt-[11px] pr-[20px] pl-[15px] min-w-[335px] max-w-[335px] bg-[#88b788] rounded-[20px] flex gap-[9px]">
              <img className="w-[82px] h-[106px] mb-[-5px]" src={getImageUrl("promo-1", "webp")} alt="promo-1" />
              <section className="card-text flex flex-col text-sm font-bold text-black whitespace-pre-line">
                <p className="card-name">Happy Mother's Day!</p>
                <p className="card-desc font-normal mb-[10px]">Get one of our favorite menu for free</p>
                <p className="claim font-medium text-white">Klaim Kupon</p>
              </section>
            </section>
            <section className="card pt-[11px] pr-[20px] pl-[15px] min-w-[335px] max-w-[335px] bg-[#f5c361] rounded-[20px] flex gap-[9px]">
              <img className="w-[95px] h-[106px] mb-[-5px]" src={getImageUrl("promo-2", "webp")} alt="promo-2" />
              <section className="card-text flex flex-col justify-center text-sm font-bold whitespace-pre-line text-black">
                <p className="card-name mb-[11px]">Get a cup of coffee for free on sunday morning</p>
                <p className="card-desc font-normal">Only at 7 to 9 AM</p>
                {/* <!-- <p className="claim">Klaim Kupon</p> --> */}
              </section>
            </section>
          </section>
          <section className="page mt-[40px] px-[15px] md:px-[3vw] xl:px-[9vw] flex gap-[10px]">
            <div className="active w-[26px] h-[8px] bg-color-1 rounded-full"></div>
            <div className="w-[8px] h-[8px] bg-[#dde0e4] rounded-full"></div>
            <div className="w-[8px] h-[8px] bg-[#dde0e4] rounded-full"></div>
            <div className="w-[8px] h-[8px] bg-[#dde0e4] rounded-full"></div>
          </section>
        </section>

        <section className="product-cont px-[15px] md:px-[2vw] xl:px-[9vw] mt-[25px] mb-[32px]">
          <section className="product-head flex flex-col md:flex-row gap-[5px] justify-between items-center mb-[25px]">
            <h2 className="text-color-2 text-[48px] font-medium">
              Our <span className="text-[#8e6447] text-[48px] font-medium">Product</span>
            </h2>
            <button type="button" className="lg:hidden min-w-[100px] p-[5px] bg-color-1 hover:bg-color-1-hover text-[#0b0909] text-lg font-medium rounded-lg">
              Filter
            </button>
          </section>
          <section className="product flex gap-[15px] xl:gap-[25px]">
            <section className="product-filter hidden w-[240px] xl:w-[383px] h-min text-white text-lg lg:flex flex-col gap-[16px] bg-[#0b0909] rounded-[15px] px-[20px] pt-[27px] xl:pr-[38px] pb-[42px] xl:pl-[30px]">
              <section className="filter flex justify-between items-center">
                <p className="text-[22px] font-semibold">Filter</p>
                <p className="reset-filter font-bold">Reset Filter</p>
              </section>
              <label htmlFor="search-bar" className="filter-head font-bold">
                Search
              </label>
              <input
                type="text"
                id="search-bar"
                placeholder="Search Your Product"
                className="search-bar w-[100%] mt-[-6px] pt-[22px] pr-[55px] pb-[25px] pl-[20px] border border-[#dedede] bg-[#fcfdfe] rounded-md text-[#696f79] text-sm font-normal tracking-[.75px]"
              />
              <p className="filter-head font-bold">Category</p>
              <section className="checkbox flex gap-[15px]">
                <div className="no-check w-[24px] h-[24px] border border-[#a0a3bd] rounded-md"></div>
                <p className="filter-list">Favorite Product</p>
              </section>
              <section className="checkbox flex gap-[15px]">
                <div className="checked w-[24px] h-[24px] bg-color-1 bg-[url(./assets/images/u_check.svg)] rounded-md"></div>
                <p className="filter-list">Coffee</p>
              </section>
              <section className="checkbox flex gap-[15px]">
                <div className="no-check w-[24px] h-[24px] border border-[#a0a3bd] rounded-md"></div>
                <p className="filter-list">Non Coffee</p>
              </section>
              <section className="checkbox flex gap-[15px]">
                <div className="no-check w-[24px] h-[24px] border border-[#a0a3bd] rounded-md"></div>
                <p className="filter-list">Foods</p>
              </section>
              <section className="checkbox flex gap-[15px]">
                <div className="no-check w-[24px] h-[24px] border border-[#a0a3bd] rounded-md"></div>
                <p className="filter-list">Add-On</p>
              </section>
              {/* <!--  --> */}
              <p className="filter-head font-bold">Sort By</p>
              <section className="checkbox flex gap-[15px]">
                <div className="no-check w-[24px] h-[24px] border border-[#a0a3bd] rounded-md"></div>
                <p className="filter-list">Buy 1 get 1</p>
              </section>
              <section className="checkbox flex gap-[15px]">
                <div className="checked w-[24px] h-[24px] bg-color-1 bg-[url(./assets/images/u_check.svg)] rounded-md"></div>
                <p className="filter-list">Flash Sale</p>
              </section>
              <section className="checkbox flex gap-[15px]">
                <div className="no-check w-[24px] h-[24px] border border-[#a0a3bd] rounded-md"></div>
                <p className="filter-list">Birthday Package</p>
              </section>
              <section className="checkbox flex gap-[15px]">
                <div className="no-check w-[24px] h-[24px] border border-[#a0a3bd] rounded-md"></div>
                <p className="filter-list">Cheap</p>
              </section>
              <p className="filter-head font-bold">Range Price</p>
              <section className="range">
                <div className="range-slider h-[8px] relative bg-[#f5f6f8] rounded-[25px]">
                  <span className="range-selected h-[100%] absolute left-[20%] right-[30%] rounded-[25px] bg-color-1"></span>
                </div>
                <section className="slider relative">
                  <input className="min absolute w-[100%] h-[5px] top-[-7px] bg-none appearance-none pointer-events-none" min="330" max="580" type="range" defaultValue="374" />
                  <input className="max absolute w-[100%] h-[5px] top-[-7px] bg-none appearance-none pointer-events-none" min="330" max="580" type="range" defaultValue="500" />
                </section>
                <div className="range-price flex justify-evenly mt-[8px] text-xs leading-[24px]">
                  <p>
                    Idr.<span className="min">374</span>
                  </p>
                  <p>
                    Idr.<span className="max">500</span>
                  </p>
                </div>
              </section>
              <button type="button " className="cursor-pointer [-8px] py-[12px] px-[18px] bg-color-1 hover:bg-color-1-hover rounded text-[#0b0909] text-sm font-medium tracking-[.75px]">
                Apply Filter
              </button>
            </section>
            <section className="product-list grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 items-center gap-[20px]">
              <section className="product-info">
                <section className="product-img-1 relative w-[350px] xl:w-[377px] h-[360px] bg-[url(./assets/images/product-3.webp)] bg-cover z-[-1]">
                  <p className="flash-sale absolute top-[15px] left-[15px] font-bold p-[10px] bg-[#d00000] text-white rounded-[25px] w-fit">FLASH SALE!</p>
                </section>
                <section className="product-text mt-[-50px] mx-auto p-[10px] bg-white w-[320px] xl:w-[345px]">
                  <p className="product-name mb-[12px] text-color-2 text-[22px] font-medium">Hazelnut Latte</p>
                  <p className="mb-[12px] text-[color-2] text-sm">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                  <section className="star-cont mb-[12px] text-sm flex gap-[10px] text-[#4f5665]">
                    <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
                    <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
                    <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
                    <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
                    <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
                    <p className="star">5.0</p>
                  </section>
                  <section className="price flex gap-[12px] items-center mb-[12px] text-color-1 text-[22px] font-medium">
                    <p className="price-slash text-[#d00000] line-through text-xs">IDR 20.000</p>
                    <p className="price-actual">IDR 10.000</p>
                  </section>
                  <section className="button-cont flex items-center gap-[10px]">
                    <button className="buy cursor-pointer hover:bg-color-1-hover w-[80%] h-[35px] bg-color-1 rounded-[5px] text-color-2 text-sm font-medium">Buy</button>
                    <img src={getImageUrl("ShoppingCart", "svg")} alt="shopping-cart" className="cart cursor-pointer hover:bg-[#e8e8e8] w-[58px] h-[35px] border border-color-1 rounded-[5px]" />
                  </section>
                </section>
              </section>
              {/* <!--  --> */}
              <section className="product-info">
                <section className="product-img-2 relative w-[350px] xl:w-[377px] h-[360px] bg-[url(./assets/images/product-4.webp)] bg-cover z-[-1]">
                  <p className="flash-sale absolute top-[15px] left-[15px] font-bold p-[10px] bg-[#d00000] text-white rounded-[25px] w-fit">FLASH SALE!</p>
                </section>
                <section className="product-text mt-[-50px] mx-auto p-[10px] bg-white w-[320px] xl:w-[345px]">
                  <p className="product-name mb-[12px] text-color-2 text-[22px] font-medium">Hazelnut Latte</p>
                  <p className="mb-[12px] text-[color-2] text-sm">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                  <section className="star-cont mb-[12px] text-sm flex gap-[10px] text-[#4f5665]">
                    <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
                    <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
                    <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
                    <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
                    <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
                    <p className="star">5.0</p>
                  </section>
                  <section className="price flex gap-[12px] items-center mb-[12px] text-color-1 text-[22px] font-medium">
                    <p className="price-slash text-[#d00000] line-through text-xs">IDR 20.000</p>
                    <p className="price-actual">IDR 10.000</p>
                  </section>
                  <section className="button-cont flex items-center gap-[10px]">
                    <button className="buy cursor-pointer hover:bg-color-1-hover w-[80%] h-[35px] bg-color-1 rounded-[5px] text-color-2 text-sm font-medium">Buy</button>
                    <img src={getImageUrl("ShoppingCart", "svg")} alt="shopping-cart" className="cart cursor-pointer hover:bg-[#e8e8e8] w-[58px] h-[35px] border border-color-1 rounded-[5px]" />
                  </section>
                </section>
              </section>
              {/* <!--  --> */}
              <section className="product-info">
                <section className="product-img-1 relative w-[350px] xl:w-[377px] h-[360px] bg-[url(./assets/images/product-3.webp)] bg-cover z-[-1]">
                  <p className="flash-sale absolute top-[15px] left-[15px] font-bold p-[10px] bg-[#d00000] text-white rounded-[25px] w-fit">FLASH SALE!</p>
                </section>
                <section className="product-text mt-[-50px] mx-auto p-[10px] bg-white w-[320px] xl:w-[345px]">
                  <p className="product-name mb-[12px] text-color-2 text-[22px] font-medium">Hazelnut Latte</p>
                  <p className="mb-[12px] text-[color-2] text-sm">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                  <section className="star-cont mb-[12px] text-sm flex gap-[10px] text-[#4f5665]">
                    <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
                    <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
                    <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
                    <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
                    <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
                    <p className="star">5.0</p>
                  </section>
                  <section className="price flex gap-[12px] items-center mb-[12px] text-color-1 text-[22px] font-medium">
                    <p className="price-slash text-[#d00000] line-through text-xs">IDR 20.000</p>
                    <p className="price-actual">IDR 10.000</p>
                  </section>
                  <section className="button-cont flex items-center gap-[10px]">
                    <button className="buy cursor-pointer hover:bg-color-1-hover w-[80%] h-[35px] bg-color-1 rounded-[5px] text-color-2 text-sm font-medium">Buy</button>
                    <img src={getImageUrl("ShoppingCart", "svg")} alt="shopping-cart" className="cart cursor-pointer hover:bg-[#e8e8e8] w-[58px] h-[35px] border border-color-1 rounded-[5px]" />
                  </section>
                </section>
              </section>
              {/* <!--  --> */}
              <section className="product-info">
                <section className="product-img-2 relative w-[350px] xl:w-[377px] h-[360px] bg-[url(./assets/images/product-4.webp)] bg-cover z-[-1]">
                  <p className="flash-sale absolute top-[15px] left-[15px] font-bold p-[10px] bg-[#d00000] text-white rounded-[25px] w-fit">FLASH SALE!</p>
                </section>
                <section className="product-text mt-[-50px] mx-auto p-[10px] bg-white w-[320px] xl:w-[345px]">
                  <p className="product-name mb-[12px] text-color-2 text-[22px] font-medium">Hazelnut Latte</p>
                  <p className="mb-[12px] text-[color-2] text-sm">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                  <section className="star-cont mb-[12px] text-sm flex gap-[10px] text-[#4f5665]">
                    <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
                    <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
                    <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
                    <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
                    <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
                    <p className="star">5.0</p>
                  </section>
                  <section className="price flex gap-[12px] items-center mb-[12px] text-color-1 text-[22px] font-medium">
                    <p className="price-slash text-[#d00000] line-through text-xs">IDR 20.000</p>
                    <p className="price-actual">IDR 10.000</p>
                  </section>
                  <section className="button-cont flex items-center gap-[10px]">
                    <button className="buy cursor-pointer hover:bg-color-1-hover w-[80%] h-[35px] bg-color-1 rounded-[5px] text-color-2 text-sm font-medium">Buy</button>
                    <img src={getImageUrl("ShoppingCart", "svg")} alt="shopping-cart" className="cart cursor-pointer hover:bg-[#e8e8e8] w-[58px] h-[35px] border border-color-1 rounded-[5px]" />
                  </section>
                </section>
              </section>
              {/* <!--  --> */}
              <section className="product-info">
                <section className="product-img-1 relative w-[350px] xl:w-[377px] h-[360px] bg-[url(./assets/images/product-3.webp)] bg-cover z-[-1]">
                  <p className="flash-sale absolute top-[15px] left-[15px] font-bold p-[10px] bg-[#d00000] text-white rounded-[25px] w-fit">FLASH SALE!</p>
                </section>
                <section className="product-text mt-[-50px] mx-auto p-[10px] bg-white w-[320px] xl:w-[345px]">
                  <p className="product-name mb-[12px] text-color-2 text-[22px] font-medium">Hazelnut Latte</p>
                  <p className="mb-[12px] text-[color-2] text-sm">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                  <section className="star-cont mb-[12px] text-sm flex gap-[10px] text-[#4f5665]">
                    <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
                    <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
                    <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
                    <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
                    <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
                    <p className="star">5.0</p>
                  </section>
                  <section className="price flex gap-[12px] items-center mb-[12px] text-color-1 text-[22px] font-medium">
                    <p className="price-slash text-[#d00000] line-through text-xs">IDR 20.000</p>
                    <p className="price-actual">IDR 10.000</p>
                  </section>
                  <section className="button-cont flex items-center gap-[10px]">
                    <button className="buy cursor-pointer hover:bg-color-1-hover w-[80%] h-[35px] bg-color-1 rounded-[5px] text-color-2 text-sm font-medium">Buy</button>
                    <img src={getImageUrl("ShoppingCart", "svg")} alt="shopping-cart" className="cart cursor-pointer hover:bg-[#e8e8e8] w-[58px] h-[35px] border border-color-1 rounded-[5px]" />
                  </section>
                </section>
              </section>
              {/* <!--  --> */}
              <section className="product-info">
                <section className="product-img-2 relative w-[350px] xl:w-[377px] h-[360px] bg-[url(./assets/images/product-4.webp)] bg-cover z-[-1]">
                  <p className="flash-sale absolute top-[15px] left-[15px] font-bold p-[10px] bg-[#d00000] text-white rounded-[25px] w-fit">FLASH SALE!</p>
                </section>
                <section className="product-text mt-[-50px] mx-auto p-[10px] bg-white w-[320px] xl:w-[345px]">
                  <p className="product-name mb-[12px] text-color-2 text-[22px] font-medium">Hazelnut Latte</p>
                  <p className="mb-[12px] text-[color-2] text-sm">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                  <section className="star-cont mb-[12px] text-sm flex gap-[10px] text-[#4f5665]">
                    <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
                    <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
                    <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
                    <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
                    <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
                    <p className="star">5.0</p>
                  </section>
                  <section className="price flex gap-[12px] items-center mb-[12px] text-color-1 text-[22px] font-medium">
                    <p className="price-slash text-[#d00000] line-through text-xs">IDR 20.000</p>
                    <p className="price-actual">IDR 10.000</p>
                  </section>
                  <section className="button-cont flex items-center gap-[10px]">
                    <button className="buy cursor-pointer hover:bg-color-1-hover w-[80%] h-[35px] bg-color-1 rounded-[5px] text-color-2 text-sm font-medium">Buy</button>
                    <img src={getImageUrl("ShoppingCart", "svg")} alt="shopping-cart" className="cart cursor-pointer hover:bg-[#e8e8e8] w-[58px] h-[35px] border border-color-1 rounded-[5px]" />
                  </section>
                </section>
              </section>
              <section className="product-pages mt-[5px] md:col-span-2 2xl:col-span-3 flex gap-[20px] justify-center items-center text-[#a0a3bd] font-medium">
                <p className="active cursor-pointer w-[40px] h-[40px] bg-color-1 hover:bg-color-1-hover rounded-full text-[#0b0909] text-center leading-[39px]">1</p>
                <p className="cursor-pointer w-[40px] h-[40px] bg-[#e8e8e8] hover:bg-[#d2d2d2] rounded-full text-[#0b0909] text-center leading-[39px]">2</p>
                <p className="cursor-pointer w-[40px] h-[40px] bg-[#e8e8e8] hover:bg-[#d2d2d2] rounded-full text-[#0b0909] text-center leading-[39px]">3</p>
                <p className="cursor-pointer w-[40px] h-[40px] bg-[#e8e8e8] hover:bg-[#d2d2d2] rounded-full text-[#0b0909] text-center leading-[39px]">4</p>
                <div className="next cursor-pointer w-[40px] h-[40px] bg-color-1 hover:bg-color-1-hover rounded-full bg-[url(./assets/images/arrow-right-white.svg)] bg-no-repeat bg-center"></div>
              </section>
            </section>
          </section>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default product;
