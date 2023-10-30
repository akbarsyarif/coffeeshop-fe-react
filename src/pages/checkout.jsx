import { useState } from "react";
import getImageUrl from "../utils/imageGetter";
import Header from "../components/HeaderUser";
import Footer from "../components/Footer";
import ProductList from "../components/CheckoutProduct";
// import { useNavigate } from "react-router-dom"; gunakan ketika ada logika sebelum navigasi
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { axiosCreateOrder } from "../https/order";
import { checkOut } from "../redux/slices/userCart";

function Checkout() {
  const [checkoutModal, setCheckoutModal] = useState(false);
  const user = useSelector((state) => state.user);
  const userCart = useSelector((state) => state.userCart);
  const dispatch = useDispatch();

  const doNothing = () => {};

  const modalHandler = () => {
    setCheckoutModal((state) => !state);
  };

  const sumOrder = () => {
    let priceCont = [];
    let sum = 0;
    for (let i = 0; i < userCart.product.length; i++) {
      priceCont.push(userCart.product[i][4]);
    }
    for (let j = 0; j < priceCont.length; j++) {
      sum += priceCont[j];
    }
    return sum;
  };

  const checkOutOrder = async () => {
    const body = {
      status_id: 1,
      total: sumOrder(),
      shipping_id: 1,
      product: userCart.product,
    };
    console.log(body);
    const path = user.userInfo.id;
    const jwt = user.token;
    try {
      await axiosCreateOrder(body, jwt, path);
      dispatch({
        type: checkOut,
      });
      setCheckoutModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header></Header>
      <main className="py-4 md:py-[5vh] px-[15px] md:items-start md:px-[3vw] xl:px-[9vw] xl:py-[8vh]">
        {/* <!-- modal fflex --> */}
        <section className={"modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black/75 z-[2] " + (checkoutModal ? "" : "hidden")}>
          <div className="modal-cont border-2 border-color-1 bg-white rounded shadow-lg w-[95%] lg:w-2/3 p-[15px] md:p-10 flex flex-col justify-between gap-[20px]">
            <p className="modal-text text-3xl md:text-4xl font-medium">This is your order:</p>
            <div className="flex justify-between">
              <p className="order text-[#4f5665] text-lg font-bold">Order</p>
              <p className="order-total text-color-2 text-lg font-bold">{`IDR. ${sumOrder()}`}</p>
            </div>
            <div className="flex justify-between">
              <p className="deliv text-[#4f5665] text-lg font-bold">Delivery</p>
              <p className="deliv-total text-color-2 text-lg font-bold">IDR. 0</p>
            </div>
            <div className="flex justify-between">
              <p className="tax text-[#4f5665] text-lg font-bold">Tax</p>
              <p className="tax-total text-color-2 text-lg font-bold">IDR. 0</p>
            </div>
            <div className="dashed border-b border-[#e8e8e8]"></div>
            <div className="flex justify-between">
              <p className="sub text-[#4f5665] text-lg font-bold">Sub Total</p>
              <p className="sub-total text-color-2 text-lg font-bold">{`IDR. ${sumOrder()}`}</p>
            </div>
            <div className="flex flex-col mt-[20px] lg:mt-[40px] gap-[10px] lg:gap-[30px] xl:gap-[60px] w-full md:flex-row">
              <button type="button" className="close-modal bg-[#d00000] rounded-md w-full p-[10px] hover:bg-color-1-hover text-white text-lg font-medium" onClick={modalHandler}>
                Cancel
              </button>
              <button type="button" className="close-modal bg-color-1 rounded-md w-full p-[10px] hover:bg-color-1-hover text-lg font-medium" onClick={checkOutOrder}>
                Confirm
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
                  <Link to="/product">
                    <p className="text-color-2 text-sm font-medium">Add Menu</p>
                  </Link>
                </div>
              </div>
              {userCart.productInfo.length > 0 ? userCart.productInfo.map((product, idx) => <ProductList key={idx} info={product}></ProductList>) : <p className="text-center my-10 text-2xl"> No Product Found</p>}
              {/* {productData ? productData.map((product, idx) => <ProductCards key={idx} info={product}></ProductCards>) : <p> No Product Found</p>} */}
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
                  defaultValue={user.userInfo.email}
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
                  defaultValue={user.userInfo.full_name}
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
                <p className="order-total text-color-2 text-lg font-bold">{`IDR. ${sumOrder()}`}</p>
              </div>
              <div className="flex justify-between">
                <p className="deliv text-[#4f5665] text-lg font-bold">Delivery</p>
                <p className="deliv-total text-color-2 text-lg font-bold">IDR. 0</p>
              </div>
              <div className="flex justify-between">
                <p className="tax text-[#4f5665] text-lg font-bold">Tax</p>
                <p className="tax-total text-color-2 text-lg font-bold">IDR. 0</p>
              </div>
              <div className="dashed border-b border-[#e8e8e8]"></div>
              <div className="flex justify-between">
                <p className="sub text-[#4f5665] text-lg font-bold">Sub Total</p>
                <p className="sub-total text-color-2 text-lg font-bold">{`IDR. ${sumOrder()}`}</p>
              </div>
              <button className="select-none cursor-pointer bg-color-1 rounded-md p-[10px] text-color-2 text-sm font-medium hover:bg-color-1-hover show-modal" onClick={sumOrder() ? modalHandler : doNothing}>
                Checkout
              </button>
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

export default Checkout;
