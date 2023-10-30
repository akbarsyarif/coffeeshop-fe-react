import React from "react";
import getImageUrl from "../utils/imageGetter";

function CheckoutProduct(props) {
  return (
    <>
      <section className="product-cont flex flex-col items-center md:flex-row gap-[15px] md:gap-[28px] mb-[11px] p-[10px] bg-[#e8e8e8]/[0.3]">
        <img className="lg:w-[178px]" src={getImageUrl("product-4", "webp")} alt="product-image" />
        <div className="product-text flex flex-col w-[100%] items-start gap-[15px]">
          <p className="flash w-fit bg-[#d00000] p-[10px] rounded-3xl text-white text-xs font-bold">FLASH SALE!</p>
          <p className="product-name text-[#0b0909] text-lg font-bold">{props.info[0]}</p>
          <p className="product-desc text-[#4f5665] text-lg self-stretch">{`${props.info[1]}pcs | ${props.info[2]} | ${props.info[3]} | Dine In`}</p>
          <div className="price flex gap-[12px] items-center">
            <p className="actual-price text-[#d00000] text-xs font-medium line-through">IDR 40.000</p>
            <p className="discount-price text-color-1 text-[22px] font-medium">{`IDR. ${props.info[4]}`}</p>
          </div>
        </div>
        <img className="w-[24px] h-[24px] hover:cursor-pointer md:mr-[50px] lg:mr-[10px] xl:mr-[50px]" src={getImageUrl("XCircle", "svg")} alt="x-circle" />
      </section>
    </>
  );
}

export default CheckoutProduct;

{
  /* <section className="product-cont flex flex-col items-center md:flex-row gap-[15px] md:gap-[28px] mb-[11px] p-[10px] bg-[#e8e8e8]/[0.3]">
                <img className="lg:w-[178px]" src={getImageUrl("product-4", "webp")} alt="product-image" />
                <div className="product-text flex flex-col w-[100%] items-start gap-[15px]">
                  <p className="flash w-fit bg-[#d00000] p-[10px] rounded-3xl text-white text-xs font-bold">FLASH SALE!</p>
                  <p className="product-name text-[#0b0909] text-lg font-bold">Hazelnut Latte</p>
                  <p className="product-desc text-[#4f5665] text-lg self-stretch">2pcs | Regular | Ice | Dine In</p>
                  <div className="price flex gap-[12px] items-center">
                    <p className="actual-price text-[#d00000] text-xs font-medium line-through">IDR 40.000</p>
                    <p className="discount-price text-color-1 text-[22px] font-medium">IDR 20.000</p>
                  </div>
                </div>
                <img className="w-[24px] h-[24px] hover:cursor-pointer md:mr-[50px] lg:mr-[10px] xl:mr-[50px]" src={getImageUrl("XCircle", "svg")} alt="x-circle" />
              </section>
              <section className="product-cont flex flex-col items-center md:flex-row gap-[15px] md:gap-[28px] mb-[11px] p-[10px] bg-[#e8e8e8]/[0.3]">
                <img className="lg:w-[178px]" src={getImageUrl("product-4", "webp")} alt="product-image" />
                <div className="product-text flex flex-col w-[100%] items-start gap-[15px]">
                  <p className="flash w-fit bg-[#d00000] p-[10px] rounded-3xl text-white text-xs font-bold">FLASH SALE!</p>
                  <p className="product-name text-[#0b0909] text-lg font-bold">Hazelnut Latte</p>
                  <p className="product-desc text-[#4f5665] text-lg self-stretch">2pcs | Regular | Ice | Dine In</p>
                  <div className="price flex gap-[12px] items-center">
                    <p className="actual-price text-[#d00000] text-xs font-medium line-through">IDR 40.000</p>
                    <p className="discount-price text-color-1 text-[22px] font-medium">IDR 20.000</p>
                  </div>
                </div>
                <img className="w-[24px] h-[24px] hover:cursor-pointer md:mr-[50px] lg:mr-[10px] xl:mr-[50px]" src={getImageUrl("XCircle", "svg")} alt="x-circle" />
              </section> */
}
