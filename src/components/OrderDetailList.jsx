import React from "react";
import getImageUrl from "../utils/imageGetter";

function OrderDetailList(props) {
  return (
    <>
      <section className="product-cont flex flex-col items-center md:flex-row gap-[15px] md:gap-[28px] pr-8 xl:pr-24 2xl:pr-36 mb-[11px] p-[10px] bg-[#e8e8e8]/[0.3]">
        <img className="lg:w-[178px]" src={getImageUrl("product-4", "webp")} alt="product-image" />
        <div className="product-text flex flex-col w-[100%] items-start gap-[15px]">
          <p className="flash w-fit bg-[#d00000] p-[10px] rounded-3xl text-white text-xs font-bold">FLASH SALE!</p>
          <p className="product-name text-[#0b0909] text-lg font-bold">{props.info["Product Name"]}</p>
          <p className="product-desc text-[#4f5665] text-lg self-stretch">{`${props.info.Quantity === 1 ? `${props.info.Quantity}pc` : `${props.info.Quantity}pcs`} | ${props.info.Size} | ${props.info["With Ice?"] ? "Ice" : "Hot"} | ${
            props.info.Shipping
          }`}</p>
          <div className="price flex gap-[12px] items-center">
            <p className="actual-price text-[#d00000] text-xs font-medium line-through">IDR 40.000</p>
            <p className="discount-price text-color-1 text-[22px] font-medium">{`IDR. ${props.info["Sub Total"]}`}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default OrderDetailList;
