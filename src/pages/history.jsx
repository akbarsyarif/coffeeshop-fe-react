import React from "react";
import getImageUrl from "../utils/imageGetter";
import Header from "../components/HeaderUser";
import Footer from "../components/Footer";
// import { useNavigate } from "react-router-dom"; gunakan ketika ada logika sebelum navigasi
import { Link } from "react-router-dom";

function history() {
  return (
    <>
      <Header></Header>
      <main className="flex flex-col items-center py-4 md:py-[5vh] px-[15px] md:items-start md:px-[3vw] xl:px-[9vw] xl:py-[8vh]">
        <div className="flex items-center gap-[35px] mb-[38px]">
          <h1 className="text-3xl md:text-5xl font-medium">History Order</h1>
          <div className="w-[45px] bg-[#e8e8e8]">
            <p className="py-2.5 px-2.5 text-center">2</p>
          </div>
        </div>
        <section className="flex flex-col lg:flex-row gap-[20px]">
          <section className="flex flex-col gap-[12px]">
            <section className="flex flex-col items-center gap-[10px] font-medium md:flex-row md:items-start mb-7 md: justify-between">
              <div className="bg-[#f1f1f1] px-[10px] py-[10px] w-[90vw] md:w-max md:flex">
                <p className="px-[10px] py-[10px] bg-white w-full md:w-max cursor-pointer select-none">On Progress</p>
                <p className="px-[10px] py-[10px] w-full md:w-max cursor-pointer select-none">Sending Goods</p>
                <p className="px-[10px] py-[10px] w-full md:w-max cursor-pointer select-none">Finish Order</p>
              </div>
              <div className="flex justify-between gap-10px bg-[#f1f1f1] px-[10px] py-[10px] items-center w-[90vw] md:w-fit">
                <p className="w-max pl-[30px] px-[10px] py-[10px] before:bg-[url('./assets/images/Calendar.svg')] before:w-[24px] before:h-[24px] before:absolute before:top-[20%] before:left-0 relative">January 2023</p>
                <div className="bg-[url('./assets/images/arrow-down-black.svg')] w-[24px] h-[24px]"></div>
              </div>
            </section>
            {/* <!--  --> */}
            <section className="flex md:flex-col gap-[12px] justify-center">
              <div className="flex flex-col md:flex-row gap-[25px] items-center bg-[#e8e8e8]/[0.3] p-[10px] pr-[20px] w-max">
                <img src={getImageUrl("history-product", "webp")} alt="product-image" />
                <div>
                  <div className="flex gap-[8px] mb-[10px] justify-center md:justify-start">
                    <img src={getImageUrl("u_glass-tea", "svg")} alt="glass-tea" />
                    <p className="text-[#4f5665] font-medium">No.order</p>
                  </div>
                  <p className="mb-[15px] text-color-2 font-bold">#12354-09893</p>
                  <p className="text-sm text-color-1 underline font-medium">Views Order Detail</p>
                </div>
                <div>
                  <div className="flex gap-[8px] mb-[10px] md:mt-[-20px] items-center justify-center md:justify-start">
                    <img className="w-[16px] h-[16px]" src={getImageUrl("Calendar", "svg")} alt="calendar" />
                    <p className="text-[#4f5665] font-medium">Date</p>
                  </div>
                  <p className="mb-[15px] text-color-2 font-bold">23 January 2023</p>
                </div>
                <div>
                  <div className="flex gap-[8px] mb-[10px] md:mt-[-20px] items-center justify-center md:justify-start">
                    <img className="w-[16px] h-[16px]" src={getImageUrl("Repeat", "svg")} alt="repeat" />
                    <p className="text-[#4f5665] font-medium">Total</p>
                  </div>
                  <p className="mb-[15px] text-color-2 font-bold">Idr 40.000</p>
                </div>
                <div>
                  <div className="flex gap-[8px] mb-[10px] md:mt-[-20px] items-center justify-center md:justify-start">
                    <img className="w-[16px] h-[16px]" src={getImageUrl("u_process", "svg")} alt="process" />
                    <p className="text-[#4f5665] font-medium">Status</p>
                  </div>
                  <p className="mb-[15px] text-color-1 text-xs font-bold bg-[#ff8906]/[0.2] rounded-3xl px-[10px] py-[5px]">On Progress</p>
                </div>
              </div>
              {/* <!--  --> */}
              <div className="flex flex-col md:flex-row gap-[25px] items-center bg-[#e8e8e8]/[0.3] p-[10px] pr-[20px] w-max">
                <img src={getImageUrl("history-product", "webp")} alt="product-image" />
                <div>
                  <div className="flex gap-[8px] mb-[10px] justify-center md:justify-start">
                    <img src={getImageUrl("u_glass-tea", "svg")} alt="glass-tea" />
                    <p className="text-[#4f5665] font-medium">No.order</p>
                  </div>
                  <p className="mb-[15px] text-color-2 font-bold">#12354-09893</p>
                  <p className="text-sm text-color-1 underline font-medium">Views Order Detail</p>
                </div>
                <div>
                  <div className="flex gap-[8px] mb-[10px] md:mt-[-20px] items-center justify-center md:justify-start">
                    <img className="w-[16px] h-[16px]" src={getImageUrl("Calendar", "svg")} alt="calendar" />
                    <p className="text-[#4f5665] font-medium">Date</p>
                  </div>
                  <p className="mb-[15px] text-color-2 font-bold">23 January 2023</p>
                </div>
                <div>
                  <div className="flex gap-[8px] mb-[10px] md:mt-[-20px] items-center justify-center md:justify-start">
                    <img className="w-[16px] h-[16px]" src={getImageUrl("Repeat", "svg")} alt="repeat" />
                    <p className="text-[#4f5665] font-medium">Total</p>
                  </div>
                  <p className="mb-[15px] text-color-2 font-bold">Idr 40.000</p>
                </div>
                <div>
                  <div className="flex gap-[8px] mb-[10px] md:mt-[-20px] items-center justify-center md:justify-start">
                    <img className="w-[16px] h-[16px]" src={getImageUrl("u_process", "svg")} alt="process" />
                    <p className="text-[#4f5665] font-medium">Status</p>
                  </div>
                  <p className="mb-[15px] text-color-1 text-xs font-bold bg-[#ff8906]/[0.2] rounded-3xl px-[10px] py-[5px]">On Progress</p>
                </div>
              </div>
              {/* <!--  --> */}
              <div className="hidden md:flex flex-col md:flex-row gap-[25px] items-center bg-[#e8e8e8]/[0.3] p-[10px] pr-[20px] w-max">
                <img src={getImageUrl("history-product", "webp")} alt="product-image" />
                <div>
                  <div className="flex gap-[8px] mb-[10px] justify-center md:justify-start">
                    <img src={getImageUrl("u_glass-tea", "svg")} alt="glass-tea" />
                    <p className="text-[#4f5665] font-medium">No.order</p>
                  </div>
                  <p className="mb-[15px] text-color-2 font-bold">#12354-09893</p>
                  <p className="text-sm text-color-1 underline font-medium">Views Order Detail</p>
                </div>
                <div>
                  <div className="flex gap-[8px] mb-[10px] md:mt-[-20px] items-center justify-center md:justify-start">
                    <img className="w-[16px] h-[16px]" src={getImageUrl("Calendar", "svg")} alt="calendar" />
                    <p className="text-[#4f5665] font-medium">Date</p>
                  </div>
                  <p className="mb-[15px] text-color-2 font-bold">23 January 2023</p>
                </div>
                <div>
                  <div className="flex gap-[8px] mb-[10px] md:mt-[-20px] items-center justify-center md:justify-start">
                    <img className="w-[16px] h-[16px]" src={getImageUrl("Repeat", "svg")} alt="repeat" />
                    <p className="text-[#4f5665] font-medium">Total</p>
                  </div>
                  <p className="mb-[15px] text-color-2 font-bold">Idr 40.000</p>
                </div>
                <div>
                  <div className="flex gap-[8px] mb-[10px] md:mt-[-20px] items-center justify-center md:justify-start">
                    <img className="w-[16px] h-[16px]" src={getImageUrl("u_process", "svg")} alt="process" />
                    <p className="text-[#4f5665] font-medium">Status</p>
                  </div>
                  <p className="mb-[15px] text-color-1 text-xs font-bold bg-[#ff8906]/[0.2] rounded-3xl px-[10px] py-[5px]">On Progress</p>
                </div>
              </div>
              {/* <!--  --> */}
              <div className="hidden md:flex flex-col md:flex-row gap-[25px] items-center bg-[#e8e8e8]/[0.3] p-[10px] pr-[20px] w-max">
                <img src={getImageUrl("history-product", "webp")} alt="product-image" />
                <div>
                  <div className="flex gap-[8px] mb-[10px] justify-center md:justify-start">
                    <img src={getImageUrl("u_glass-tea", "svg")} alt="glass-tea" />
                    <p className="text-[#4f5665] font-medium">No.order</p>
                  </div>
                  <p className="mb-[15px] text-color-2 font-bold">#12354-09893</p>
                  <p className="text-sm text-color-1 underline font-medium">Views Order Detail</p>
                </div>
                <div>
                  <div className="flex gap-[8px] mb-[10px] md:mt-[-20px] items-center justify-center md:justify-start">
                    <img className="w-[16px] h-[16px]" src={getImageUrl("Calendar", "svg")} alt="calendar" />
                    <p className="text-[#4f5665] font-medium">Date</p>
                  </div>
                  <p className="mb-[15px] text-color-2 font-bold">23 January 2023</p>
                </div>
                <div>
                  <div className="flex gap-[8px] mb-[10px] md:mt-[-20px] items-center justify-center md:justify-start">
                    <img className="w-[16px] h-[16px]" src={getImageUrl("Repeat", "svg")} alt="repeat" />
                    <p className="text-[#4f5665] font-medium">Total</p>
                  </div>
                  <p className="mb-[15px] text-color-2 font-bold">Idr 40.000</p>
                </div>
                <div>
                  <div className="flex gap-[8px] mb-[10px] md:mt-[-20px] items-center justify-center md:justify-start">
                    <img className="w-[16px] h-[16px]" src={getImageUrl("u_process", "svg")} alt="process" />
                    <p className="text-[#4f5665] font-medium">Status</p>
                  </div>
                  <p className="mb-[15px] text-color-1 text-xs font-bold bg-[#ff8906]/[0.2] rounded-3xl px-[10px] py-[5px]">On Progress</p>
                </div>
              </div>
            </section>
            <section className="pages flex gap-[20px] mt-[30px] mb-[30px] mx-auto">
              <div className="cursor-pointer select-none w-[40px] h-[40px] rounded-full flex items-center justify-center bg-color-1">
                <p className="text-[#0b0909] font-medium">1</p>
              </div>
              <div className="cursor-pointer select-none w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#e8e8e8]">
                <p className="text-[#a0a3bd] font-medium">2</p>
              </div>
              <div className="cursor-pointer select-none w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#e8e8e8]">
                <p className="text-[#a0a3bd] font-medium">3</p>
              </div>
              <div className="cursor-pointer select-none w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#e8e8e8]">
                <p className="text-[#a0a3bd] font-medium">4</p>
              </div>
              <div className="cursor-pointer select-none w-[40px] h-[40px] rounded-full flex items-center justify-center bg-color-1">
                <img src={getImageUrl("arrow-right-white", "svg")} alt="arrow-right" />
              </div>
            </section>
          </section>
          <div className="flex flex-col gap-[9px] p-[20px] border w-auto h-fit mb-[40px] 2xl:w-[30%]">
            <img className="w-[48px] h-[48px]" src={getImageUrl("message", "svg")} alt="message-icon" />
            <p className="text-[#4f5665] text-lg font-bold">Send Us message</p>
            <p className="text-[#4f5665]">if your unable to find answer or find your product quickly, please describe your problem and tell us. we will give you solution.</p>
            <button type="button" className="bg-color-1 hover:bg-color-1-hover py-[10px] rounded-md text-[#0b132a] text-sm font-medium">
              Send Message
            </button>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default history;
