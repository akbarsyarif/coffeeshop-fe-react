import { useState, useEffect } from "react";
import Header from "../components/HeaderAdmin";
import LeftNav from "../components/AdminLeftNav";
import AdminDashboard from "../components/AdminDashboard";
import AdminProduct from "../components/AdminProduct";
import AdminOrder from "../components/AdminOrder";
import AdminUser from "../components/AdminUser";
import { axiosGetAllUser } from "../https/user";
import { axiosgetProduct } from "../https/product";
import { axiosGetTotalSales, axiosGetAllOrder } from "../https/order";
import { useSelector } from "react-redux";
import { Data } from "../utils/forChartData";

function Admin() {
  const [leftNav, setLeftNav] = useState(1);
  const [totalSales, setTotalSales] = useState();
  const [salesInfo, setSalesInfo] = useState();
  const [topSales, setTopSales] = useState();
  const [trackOrderStatus, setTrackOrderStatus] = useState();
  const [productData, setProductData] = useState();
  const [productMeta, setProductMeta] = useState();
  const [orderData, setOrderData] = useState();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    async function fetchData() {
      const url = import.meta.env.VITE_BE_HOST + "/product";

      try {
        const jwt = user.token;
        // const data = await axiosGetAllOrder(jwt);
        const productData = await axiosgetProduct(url);
        const result = await axiosGetTotalSales(jwt);
        const orderData = await axiosGetAllOrder(jwt);
        setTotalSales(result.data.result.totalSales[0]);
        setSalesInfo(result.data.result.salesPerDay);
        setTopSales(result.data.result.topSales);
        setTrackOrderStatus(result.data.result.orderStatus);
        setProductData(productData.data.result);
        setProductMeta(productData.data.meta.totalData);
        setOrderData(orderData.data.result);
        // console.log(productData.data.meta);
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Header></Header>
      <main className=" relative z-0 flex px-[15px] md:px-[3vw] xl:px-[5vw] gap-8">
        <LeftNav setLeftNav={setLeftNav} status={leftNav}></LeftNav>
        {leftNav === 1 ? (
          <AdminDashboard info={totalSales ? totalSales : { sum: 0 }} label={salesInfo ? salesInfo : Data} topSales={topSales ? topSales : []} trackOrder={trackOrderStatus ? trackOrderStatus : []}></AdminDashboard>
        ) : leftNav === 2 ? (
          <AdminProduct info={productData ? productData : []} meta={productMeta ? productMeta : "0"}></AdminProduct>
        ) : leftNav === 3 ? (
          <AdminOrder info={orderData ? orderData : []}></AdminOrder>
        ) : (
          <AdminUser></AdminUser>
        )}
      </main>
    </>
  );
}

export default Admin;
