import React from "react";
import getImageUrl from "../utils/imageGetter";
import Header from "../components/HeaderUser";
import Footer from "../components/Footer";

function OrderDetail() {
  return (
    <>
      <Header></Header>
      <main className="py-4 md:py-[5vh] px-[15px] md:items-start md:px-[3vw] xl:px-[9vw] xl:py-[8vh]">
        <h1 className="text-center md:text-start text-[0b0909] text-[40px] md:text-[48px] font-medium ">
          Order <span className=" font-bold"> #12354-09893</span>
        </h1>
        <p className="text-[#4f5665] mb-[30px] md:mb-[27px] text-center md:text-start">21 March 2023 at 10:30 AM</p>
        <section className="lg:flex gap-[20px]">
          <section className="left mb-[50px] lg:flex-1">
            <section className="top mb-[39px]">
              <p className="text-color-2 text-[22px] font-medium mb-[15px] text-center md:text-start">Order Information</p>

              <section className="left">
                <div className="flex flex-col py-[20px] px-[10px] border-b border-[#e8e8e8]">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-[8px]">
                      <img src={getImageUrl("Profile", "svg")} alt="profileimg" />
                      <p className="text-[#4f5665] font-medium">Full Name</p>
                    </div>
                    <p className=" text-color-2 font-bold">Ghaluh Wizard Anggoro</p>
                  </div>
                </div>
                <div className="flex flex-col py-[20px] px-[10px] border-b border-[#e8e8e8]">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-[8px]">
                      <img src={getImageUrl("Location", "svg")} alt="profileimg" />
                      <p className="text-[#4f5665] font-medium">Address</p>
                    </div>
                    <p className=" text-color-2 font-bold">Griya Bandung Indah</p>
                  </div>
                </div>
                <div className="flex flex-col py-[20px] px-[10px] border-b border-[#e8e8e8]">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-[8px]">
                      <img src={getImageUrl("PhoneCall", "svg")} alt="profileimg" />
                      <p className="text-[#4f5665] font-medium">Phone</p>
                    </div>
                    <p className=" text-color-2 font-bold">082116304338</p>
                  </div>
                </div>
                <div className="flex flex-col py-[20px] px-[10px] border-b border-[#e8e8e8]">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-[8px]">
                      <img src={getImageUrl("u_postcard", "svg")} alt="profileimg" />
                      <p className="text-[#4f5665] font-medium">Payment Method</p>
                    </div>
                    <p className=" text-color-2 font-bold">Cash</p>
                  </div>
                </div>
                <div className="flex flex-col py-[20px] px-[10px] border-b border-[#e8e8e8]">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-[8px]">
                      <img src={getImageUrl("truck", "svg")} alt="profileimg" />
                      <p className="text-[#4f5665] font-medium">Shipping</p>
                    </div>
                    <p className=" text-color-2 font-bold">Dine In</p>
                  </div>
                </div>
                <div className="flex flex-col py-[20px] px-[10px] border-b border-[#e8e8e8]">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-[8px]">
                      <img src={getImageUrl("u_process", "svg")} alt="profileimg" />
                      <p className="text-[#4f5665] font-medium">Status</p>
                    </div>
                    <p className=" text-[#00a700] text-xs font-bold p-[10px] bg-[#00a700]/[.20] rounded-3xl">Done</p>
                  </div>
                </div>
                <div className="flex flex-col py-[20px] px-[10px]">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-[8px]">
                      <img src={getImageUrl("Profile", "svg")} alt="profileimg" />
                      <p className="text-[#4f5665] font-medium">Total transaksi</p>
                    </div>
                    <p className=" text-color-1 font-bold">Idr 40.000</p>
                  </div>
                </div>
              </section>
            </section>
          </section>
          <section className="right">
            <p className="text-color-2 text-[22px] font-medium mb-[21px] text-center md:text-start">Your Order</p>
            <section className="product-cont flex flex-col items-center md:flex-row gap-[15px] md:gap-[28px] pr-8 xl:pr-24 2xl:pr-36 mb-[11px] p-[10px] bg-[#e8e8e8]/[0.3]">
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
            </section>
            <section className="product-cont flex flex-col items-center md:flex-row gap-[15px] md:gap-[28px] pr-8 xl:pr-24 2xl:pr-36 mb-[11px] p-[10px] bg-[#e8e8e8]/[0.3]">
              <img className="lg:w-[178px]" src={getImageUrl("product-4", "webp")} alt="product-image" />
              <div className="product-text flex flex-col w-[100%] items-start gap-[15px]">
                <p className="flash w-fit bg-[#d00000] p-[10px] rounded-3xl text-white text-xs font-bold">FLASH SALE!</p>
                <p className="product-name text-[#0b0909] text-lg font-bold">Hazelnut Latte</p>
                <p className="product-desc text-[#4f5665] text-lg self-stretch text-center md:text-start">2pcs | Regular | Ice | Dine In</p>
                <div className="price flex gap-[12px] items-center justify-center md:justify-start w-full">
                  <p className="actual-price text-[#d00000] text-xs font-medium line-through">IDR 40.000</p>
                  <p className="discount-price text-color-1 text-[22px] font-medium">IDR 20.000</p>
                </div>
              </div>
            </section>
          </section>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default OrderDetail;
