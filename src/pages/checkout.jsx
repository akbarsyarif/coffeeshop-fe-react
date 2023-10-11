import React from "react";
import getImageUrl from "../utils/imageGetter";
import Header from "../components/HeaderUser";
import Footer from "../components/Footer";
// import { useNavigate } from "react-router-dom"; gunakan ketika ada logika sebelum navigasi
import { Link } from "react-router-dom";

function checkout() {
  return (
    <>
      <Header></Header>
      <main className="py-4 md:py-[5vh] px-[15px] md:items-start md:px-[3vw] xl:px-[9vw] xl:py-[8vh]">
        {/* <!-- modal fflex --> */}
        <section className="modal h-screen w-full fixed left-0 top-0 justify-center items-center bg-black/75 hidden">
          <div className="modal-cont border-2 border-color-1 bg-white rounded shadow-lg w-[95%] lg:w-2/3 p-[15px] md:p-10 flex flex-col justify-between gap-[20px]">
            <p className="modal-text text-3xl md:text-4xl font-medium">This is your order:</p>
            <div className="flex justify-between">
              <p className="order text-[#4f5665] text-lg font-bold">Order</p>
              <p className="order-total text-color-2 text-lg font-bold">Idr. 40.000</p>
            </div>
            <div className="flex justify-between">
              <p className="deliv text-[#4f5665] text-lg font-bold">Delivery</p>
              <p className="deliv-total text-color-2 text-lg font-bold">Idr. 0</p>
            </div>
            <div className="flex justify-between">
              <p className="tax text-[#4f5665] text-lg font-bold">Tax</p>
              <p className="tax-total text-color-2 text-lg font-bold">Idr. 4.000</p>
            </div>
            <div className="dashed border-b border-[#e8e8e8]"></div>
            <div className="flex justify-between">
              <p className="sub text-[#4f5665] text-lg font-bold">Sub Total</p>
              <p className="sub-total text-color-2 text-lg font-bold">Idr. 44.000</p>
            </div>
            <div className="flex flex-col mt-[20px] lg:mt-[40px] gap-[10px] lg:gap-[30px] xl:gap-[60px] w-full md:flex-row">
              <button type="button" className="close-modal bg-color-1 rounded-md w-full p-[10px] hover:bg-color-1-hover text-lg font-medium">
                Yes
              </button>
              <button type="button" className="close-modal bg-[#d00000] rounded-md w-full p-[10px] hover:bg-color-1-hover text-white text-lg font-medium">
                Cancel
              </button>
            </div>
          </div>
        </section>
        {/* <!-- modal --> */}
        <h1 className="text-center md:text-start text-[0b0909] text-[40px] md:text-[48px] font-medium mb-[30px] md:mb-[64px]">Payment Details</h1>
        <section className="lg:flex gap-[20px]">
          <section className="left mb-[50px] lg:flex-1">
            <section className="top mb-[39px]">
              <div className="left-head flex justify-between items-center mb-[15px]">
                <p className="text-color-2 text-[22px] font-medium">Your Order</p>

                <div className="cursor-pointer select-none flex gap-[10px] items-center bg-color-1 hover:bg-color-1-hover p-[10px] rounded-md">
                  <img src={getImageUrl("plus", "svg")} alt="plus" />
                  <p className="text-color-2 text-sm font-medium">Add Menu</p>
                </div>
              </div>
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
              </section>
            </section>
            <section className="bottom">
              <p className="info mb-[39px] text-color-2 text-[22px] font-medium">Payment Info & Delivery</p>
              <form className="flex flex-col gap-[13px]">
                <label htmlFor="email" className="text-color-2 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  name=""
                  id="email"
                  placeholder="Enter Your Email"
                  className="email py-[14px] px-[13px] pl-[38px] text-xs bg-[#fcfdfe] border border-[#dedede] rounded-lg bg-[url('./assets/images/mail-logo.svg')] bg-no-repeat bg-[left_13px_top_50%]"
                />
                <label htmlFor="full-name" className="text-color-2 font-semibold">
                  Full Name
                </label>
                <input
                  type="text"
                  name=""
                  id="full-name"
                  placeholder="Enter Your Full Name"
                  className="full-name py-[14px] px-[13px] pl-[38px] text-xs bg-[#fcfdfe] border border-[#dedede] rounded-lg bg-[url('./assets/images/profile.svg')] bg-[length:16px_16px] bg-no-repeat bg-[left_13px_top_50%]"
                />
                <label htmlFor="address" className="text-color-2 font-semibold">
                  Address
                </label>
                <input
                  type="text"
                  name=""
                  id="address"
                  placeholder="Enter Your Address"
                  className="address py-[14px] px-[13px] pl-[38px] text-xs bg-[#fcfdfe] border border-[#dedede] rounded-lg bg-[url('./assets/images/Location.svg')] bg-no-repeat bg-[left_13px_top_50%]"
                />
                <p className="delivery text-color-2 font-semibold">Delivery</p>
                <div className="deliv-option flex flex-col md:flex-row gap-[10px] md:gap-[31px] md:justify-between">
                  <p className="dine-in cursor-pointer select-none flex-1 text-center p-[10px] border border-color-1 rounded-md text-[#0b0909]">Dine in</p>
                  <p className="door-deliv cursor-pointer select-none flex-1 text-center p-[10px] border border-[#e8e8e8] rounded-md text-[#4f5665]">Door Delivery</p>
                  <p className="pickup cursor-pointer select-none flex-1 text-center p-[10px] border border-[#e8e8e8] rounded-md text-[#4f5665]">Pick Up</p>
                </div>
              </form>
            </section>
          </section>
          <section className="right">
            <p className="text-color-2 text-[22px] font-medium mb-[21px]">Total</p>
            <section className="payment-info-cont flex flex-col gap-[19px] p-[20px] bg-[#e8e8e8]/[0.3]">
              <div className="flex justify-between">
                <p className="order text-[#4f5665] text-lg font-bold">Order</p>
                <p className="order-total text-color-2 text-lg font-bold">Idr. 40.000</p>
              </div>
              <div className="flex justify-between">
                <p className="deliv text-[#4f5665] text-lg font-bold">Delivery</p>
                <p className="deliv-total text-color-2 text-lg font-bold">Idr. 0</p>
              </div>
              <div className="flex justify-between">
                <p className="tax text-[#4f5665] text-lg font-bold">Tax</p>
                <p className="tax-total text-color-2 text-lg font-bold">Idr. 4.000</p>
              </div>
              <div className="dashed border-b border-[#e8e8e8]"></div>
              <div className="flex justify-between">
                <p className="sub text-[#4f5665] text-lg font-bold">Sub Total</p>
                <p className="sub-total text-color-2 text-lg font-bold">Idr. 44.000</p>
              </div>
              <button className="select-none cursor-pointer bg-color-1 rounded-md p-[10px] text-color-2 text-sm font-medium hover:bg-color-1-hover show-modal">Checkout</button>
              <p className="text-[#4f5665]">We Accept</p>
              <div className="accept flex justify-between">
                <img src={getImageUrl("bri-logo", "svg")} alt="bank-bri" />
                <img src={getImageUrl("dana-logo", "svg")} alt="dana" />
                <img src={getImageUrl("bca-logo", "svg")} alt="bca" />
                <img src={getImageUrl("gopay-logo", "svg")} alt="gopay" />
                <img src={getImageUrl("ovo-logo", "svg")} alt="ovo" />
                <img src={getImageUrl("paypal-logo", "svg")} alt="paypal" />
              </div>
              <p className="text-[#4f5665]">*Get Discount if you pay with Bank Central Asia</p>
            </section>
          </section>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default checkout;
