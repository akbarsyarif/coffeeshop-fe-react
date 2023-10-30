import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import getImageUrl from "../utils/imageGetter";
import HistoryList from "../components/HistoryList";
import Header from "../components/HeaderUser";
import Footer from "../components/Footer";
// import { useNavigate } from "react-router-dom"; gunakan ketika ada logika sebelum navigasi
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { axiosGetUserOrder } from "../https/order";

function History() {
  const user = useSelector((state) => state.user);
  const isUser = user.isUserAvailable;
  const [productData, setProductData] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams({ status: "On Progress" });
  const [totalData, setTotalData] = useState();
  const [filter, setFilter] = useState(1);

  const changeFilter = (e) => {
    e.preventDefault();
    if (e.target.innerText === "On Progress") {
      setFilter(1);
      setSearchParams({ status: "On Progress" });
    }
    if (e.target.innerText === "Sending Goods") {
      setFilter(2);
      setSearchParams({ status: "Sending Goods" });
    }
    if (e.target.innerText === "Finish Order") {
      setFilter(3);
      setSearchParams({ status: "Finished Order" });
    }
  };

  useEffect(() => {
    async function fetchData() {
      if (!isUser) return navigate("/login");
      setSearchParams({ status: "On Progress" });
      const path = user.userInfo.id;
      const jwt = user.token;
      let query;
      for (const entry of searchParams.entries()) {
        const [param, value] = entry;
        // console.log(param, value);
        query = `?${param}=${value}`;
        // console.log(query);
      }
      try {
        const result = await axiosGetUserOrder(jwt, path, query);
        // console.log(result.data.result[0]);
        setTotalData(result.data.result.length);
        setProductData(result.data.result);
        // console.log(result.data.result);
        // console.log(result);
      } catch (error) {
        console.log(error);
        if (error.response.data.msg === "Please Login Again") navigate("/login");
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      if (!isUser) return navigate("/login");
      // setSearchParams({ status: "On Progress" });
      const path = user.userInfo.id;
      const jwt = user.token;
      let query;
      for (const entry of searchParams.entries()) {
        const [param, value] = entry;
        // console.log(param, value);
        query = `?${param}=${value}`;
        // console.log(query);
      }
      try {
        const result = await axiosGetUserOrder(jwt, path, query);
        // console.log(result.data.result[0]);
        setTotalData(result.data.result.length);
        setProductData(result.data.result);
        // console.log(result);
        console.log(result.data.result);
      } catch (error) {
        console.log(error);
        if (error.response.data.msg === "Please Login Again") navigate("/login");
      }
    }
    fetchData();
  }, [filter]);

  return (
    <>
      <Header></Header>
      <main className="flex flex-col items-center py-4 md:py-[5vh] px-[15px] md:items-start md:px-[3vw] xl:px-[9vw] xl:py-[8vh]">
        <div className="flex items-center gap-[35px] mb-[38px]">
          <h1 className="text-3xl md:text-5xl font-medium">History Order</h1>
          <div className="w-[45px] bg-[#e8e8e8]">
            <p className="py-2.5 px-2.5 text-center">{totalData ? totalData : "0"}</p>
          </div>
        </div>
        <section className="flex flex-col lg:flex-row gap-[20px]">
          <section className="flex flex-col gap-[12px]">
            <section className="flex flex-col items-center gap-[10px] font-medium md:flex-row md:items-start mb-7 md: justify-between">
              <div className="bg-[#f1f1f1] px-[10px] py-[10px] w-[90vw] md:w-max md:flex">
                <p className={`px-[10px] py-[10px] ${filter === 1 ? "bg-white" : ""} w-full md:w-max cursor-pointer select-none`} onClick={changeFilter}>
                  On Progress
                </p>
                <p className={`px-[10px] py-[10px] ${filter === 2 ? "bg-white" : ""} w-full md:w-max cursor-pointer select-none`} onClick={changeFilter}>
                  Sending Goods
                </p>
                <p className={`px-[10px] py-[10px] ${filter === 3 ? "bg-white" : ""} w-full md:w-max cursor-pointer select-none`} onClick={changeFilter}>
                  Finish Order
                </p>
              </div>
              <div className="flex justify-between gap-10px bg-[#f1f1f1] px-[10px] py-[10px] items-center w-[90vw] md:w-fit">
                <p className="w-max pl-[30px] px-[10px] py-[10px] before:bg-[url('./assets/images/Calendar.svg')] before:w-[24px] before:h-[24px] before:absolute before:top-[20%] before:left-0 relative">January 2023</p>
                <div className="bg-[url('./assets/images/arrow-down-black.svg')] w-[24px] h-[24px]"></div>
              </div>
            </section>
            {/* <!--  --> */}
            <section className="flex md:flex-col gap-[12px] justify-center">
              {productData && productData.length > 0 ? productData.map((product, idx) => <HistoryList key={idx} info={product}></HistoryList>) : <p className="text-center my-10 text-2xl"> No Product Found</p>}
            </section>
            {productData && productData.length > 0 ? (
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
            ) : (
              ""
            )}
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

export default History;
