import { useEffect, useState } from "react";
import getImageUrl from "../utils/imageGetter";
import OrderDetailList from "../components/OrderDetailList";
import Header from "../components/HeaderUser";
import Footer from "../components/Footer";
import { axiosGetUserInfo } from "../https/user";
import { axiosGetUserOrderDetail } from "../https/order";
import { useSelector } from "react-redux";
import moment from "moment";

function OrderDetail() {
  const user = useSelector((state) => state.user);
  const productId = useSelector((state) => state.userHistory.productId);
  const [userAxios, setUserAxios] = useState();
  const [orderAxios, setOrderAxios] = useState();
  const [orderDate, setOrderDate] = useState();
  const isUser = user.isUserAvailable;

  useEffect(() => {
    async function fetchData() {
      if (!isUser) return navigate("/login");
      const userPath = user.userInfo.id;
      const orderPath = productId;
      const jwt = user.token;

      try {
        const userResult = await axiosGetUserInfo(userPath, jwt);
        const orderResult = await axiosGetUserOrderDetail(jwt, orderPath);

        setUserAxios(userResult.data.result[0]);
        setOrderAxios(orderResult.data.result);
      } catch (error) {
        console.log(error);
        if (error.response.data.msg === "Please Login Again") navigate("/login");
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    let rawDate;
    let rawTime;
    let formatedDate;

    if (orderAxios) {
      rawDate = moment(orderAxios[0].Date).format("D MMMM YYYY");
      rawTime = ` at ${moment(orderAxios[0].Date).format("h:mm a")}`;
      formatedDate = rawDate + rawTime;
    }
    setOrderDate(formatedDate);
  }, [orderAxios]);

  const sumOrder = () => {
    let priceCont = [];
    let sum = 0;
    for (let i = 0; i < orderAxios.length; i++) {
      priceCont.push(orderAxios[i]["Sub Total"]);
    }
    for (let k = 0; k < priceCont.length; k++) {
      sum += priceCont[k];
    }
    return sum;
  };

  return (
    <>
      <Header></Header>
      <main className="py-4 md:py-[5vh] px-[15px] md:items-start md:px-[3vw] xl:px-[9vw] xl:py-[8vh]">
        <h1 className="text-center md:text-start text-[0b0909] text-[40px] md:text-[48px] font-medium ">
          Order <span className=" font-bold">{orderAxios ? `#${orderAxios[0]["Order No."]}` : "Not Found"}</span>
        </h1>
        <p className="text-[#4f5665] mb-[30px] md:mb-[27px] text-center md:text-start">{orderAxios ? orderDate : ""}</p>
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
                    <p className=" text-color-2 font-bold">{userAxios ? userAxios.full_name : "-"}</p>
                  </div>
                </div>
                <div className="flex flex-col py-[20px] px-[10px] border-b border-[#e8e8e8]">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-[8px]">
                      <img src={getImageUrl("Location", "svg")} alt="profileimg" />
                      <p className="text-[#4f5665] font-medium">Address</p>
                    </div>
                    <p className=" text-color-2 font-bold">{userAxios && userAxios.address ? userAxios.address : "-"}</p>
                  </div>
                </div>
                <div className="flex flex-col py-[20px] px-[10px] border-b border-[#e8e8e8]">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-[8px]">
                      <img src={getImageUrl("PhoneCall", "svg")} alt="profileimg" />
                      <p className="text-[#4f5665] font-medium">Phone</p>
                    </div>
                    <p className=" text-color-2 font-bold">{userAxios && userAxios.phone_number ? userAxios.phone_number : "-"}</p>
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
                    <p className=" text-color-2 font-bold">{orderAxios ? `${orderAxios[0].Shipping}` : "-"}</p>
                  </div>
                </div>
                <div className="flex flex-col py-[20px] px-[10px] border-b border-[#e8e8e8]">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-[8px]">
                      <img src={getImageUrl("u_process", "svg")} alt="profileimg" />
                      <p className="text-[#4f5665] font-medium">Status</p>
                    </div>

                    <p
                      className={
                        orderAxios
                          ? orderAxios[0].Status === "Finished Order"
                            ? "text-[#00A700] text-xs text-center font-bold bg-[#00A700]/[0.2] rounded-3xl px-[10px] py-[5px]"
                            : "text-color-1 text-xs text-center font-bold bg-[#ff8906]/[0.2] rounded-3xl px-[10px] py-[5px]"
                          : "-"
                      }
                    >
                      {orderAxios ? (orderAxios[0].Status === "Finished Order" ? "Done" : orderAxios[0].Status) : "-"}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col py-[20px] px-[10px]">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-[8px]">
                      <img src={getImageUrl("Profile", "svg")} alt="profileimg" />
                      <p className="text-[#4f5665] font-medium">Total transaksi</p>
                    </div>
                    <p className=" text-color-1 font-bold">{orderAxios ? `IDR. ${sumOrder()}` : "IDR. 0"}</p>
                  </div>
                </div>
              </section>
            </section>
          </section>
          <section className="right">
            <p className="text-color-2 text-[22px] font-medium mb-[21px] text-center md:text-start">Your Order</p>
            {/* <OrderDetailList></OrderDetailList> */}
            {orderAxios && orderAxios.length > 0 ? orderAxios.map((product, idx) => <OrderDetailList key={idx} info={product}></OrderDetailList>) : <p className="mx-20 xl:mx-28 mt-11 text-xl md:text-4xl text-center">No Product Found</p>}
          </section>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default OrderDetail;
