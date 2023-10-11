import React from "react";
import getImageUrl from "../utils/imageGetter";
import Header from "../components/HeaderUser";
import Footer from "../components/Footer";
// import { useNavigate } from "react-router-dom"; gunakan ketika ada logika sebelum navigasi
import { Link } from "react-router-dom";

function productDetail() {
  return (
    <>
      <Header></Header>
      <main className="py-4 md:py-[5vh] px-[15px] md:items-start md:px-[3vw] xl:px-[9vw] xl:py-[8vh]">
        <section className="lg:flex gap-[20px]">
          <section className="left mb-7 lg:flex-1">
            <img className="mb-[5px] mx-auto xl:mb-[27px] w-[330px] md:w-[500px] lg:w-[500px] xl:w-[580px]" src={getImageUrl("product-4", "webp")} alt="" />
            <div className="flex justify-center gap-[5px] xl:gap-[20px]">
              <img className="w-[106px] md:w-[163px] lg:w-[151px] xl:w-[177px]" src={getImageUrl("product-4-1", "webp")} alt="image-1" />
              <img className="w-[106px] md:w-[163px] lg:w-[151px] xl:w-[177px]" src={getImageUrl("product-4-2", "webp")} alt="image-2" />
              <img className="w-[106px] md:w-[163px] lg:w-[151px] xl:w-[177px]" src={getImageUrl("product-4-3", "webp")} alt="image-3" />
            </div>
          </section>
          <section className="right flex flex-col gap-[16px] lg:flex-1">
            <div className="">
              <p className="flash w-fit bg-[#d00000] p-[10px] rounded-3xl text-white text-lg font-bold">FLASH SALE!</p>
            </div>
            <h1 className="product-name text-[#0b0909] text-[48px] font-medium">Hazelnut Latte</h1>
            <div className="price flex gap-[12px] items-center">
              <p className="actual-price text-[#d00000] text-xs font-medium line-through">IDR 20.000</p>
              <p className="discount-price text-color-1 text-[22px] font-medium">IDR 10.000</p>
            </div>
            <div className="rating-cont flex gap-[10px]">
              <img src={getImageUrl("star-orange", "svg")} alt="star" />
              <img src={getImageUrl("star-orange", "svg")} alt="star" />
              <img src={getImageUrl("star-orange", "svg")} alt="star" />
              <img src={getImageUrl("star-orange", "svg")} alt="star" />
              <img src={getImageUrl("star-orange", "svg")} alt="star" />
              <p className="rating text-[#4f5665] text-sm">5.0</p>
            </div>
            <div className="review flex flex-col md:flex-row gap-[16px] text-lg text-[#4f5665]">
              <p className="review-text">200+ Review</p>
              <p className="hidden md:block">|</p>
              <div className="recom-cont flex gap-[16px] mt-[-20px] md:mt-[0px]">
                <p className="recom">Recommendation</p>
                <img className="w-[24px] h-[28px]" src={getImageUrl("ThumbsUp", "svg")} alt="thumbsUp" />
              </div>
            </div>
            <p className="product-desc text-[#4f5665]">
              Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.
            </p>
            <div className="quantity-cont flex items-center">
              <div className="cursor-pointer select-none minus border border-color-1 rounded p-[9px]">
                <img src={getImageUrl("minus", "svg")} alt="minus" />
              </div>
              <div className="quantity-text w-[46px] h-[36px] text-center border-t border-b border-[#e8e8e8]">
                <p className="text-color-2 text-lg font-bold leading-9">1</p>
              </div>
              <div className="cursor-pointer select-none plus border bg-color-1 border-transparent rounded p-[9px]">
                <img src={getImageUrl("plus", "svg")} alt="plus" />
              </div>
            </div>
            <p className="choose-size text-[#0b0909] text-lg font-bold">Choose Size</p>
            <div className="size-cont flex flex-col md:flex-row gap-[5px] md:gap-[31px]">
              <div className="active flex-1 p-[10px] border border-color-1 text-center">
                <p className="text-[#0b0909]">Regular</p>
              </div>
              <div className="flex-1 p-[10px] border border-[#4f5665] text-center">
                <p className="text-[#4f5665]">Medium</p>
              </div>
              <div className="flex-1 p-[10px] border border-[#4f5665] text-center">
                <p className="text-[#4f5665]">Large</p>
              </div>
            </div>
            <p className="hot-ice text-[#0b0909] text-lg font-bold">Hot/Ice?</p>
            <div className="flex flex-col md:flex-row gap-[5px] md:gap-[31px] mb-[40px] lg:mb-[59px]">
              <div className="active flex-1 p-[10px] border border-color-1 text-center">
                <p className="text-[#0b0909]">Ice</p>
              </div>
              <div className="flex-1 p-[10px] border border-[#4f5665] text-center">
                <p className="text-[#4f5665]">hot</p>
              </div>
            </div>
            <div className="button-cont flex flex-col md:flex-row gap-[5px] md:gap-[17px]">
              <div className="buy p-[10px] bg-color-1 rounded-md flex-1 text-color-2 text-sm font-medium text-center">Buy</div>
              <div className="cart flex gap-[10px] justify-center items-center p-[10px] bg-white border border-color-1 rounded-md flex-1 text-color-2 text-sm font-medium">
                <img src={getImageUrl("ShoppingCart", "svg")} alt="cart" />
                <p className="text-color-1 text-sm font-medium">Add to cart</p>
              </div>
            </div>
          </section>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default productDetail;
