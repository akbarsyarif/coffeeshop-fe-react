import { useState, useEffect } from "react";
import getImageUrl from "../utils/imageGetter";
import chartjs from "chart.js/auto";
import { CategoryScale } from "chart.js";
import LineChart from "./DashboardChart";
import TopSales from "./topSales";

chartjs.register(CategoryScale);

function AdminDashboard({ info, label, topSales, trackOrder }) {
  const [chartData, setChartData] = useState(null);
  // console.log(data);

  useEffect(() => {
    setChartData({
      labels: label.map((data) => data.date),
      datasets: [
        {
          label: "Sales Per Day",
          data: label.map((data) => data["total sales"]),
          lineTension: 0.5,
          backgroundColor: ["rgba(0,167,0,0.1)"],
          fill: { target: "origin" },
          borderColor: "#00A700",
        },
      ],
    });
  }, [label]);

  return (
    <>
      <section className=" flex-none xl:flex-1">
        <section className="top flex flex-col lg:flex-row gap-5 py-6 w-full h-min ">
          <div className="w-full bg-[#6fc276] px-6 py-4 rounded-md">
            <div className="flex gap-2 mb-4 items-center">
              <div className="bg-white rounded-full p-3">
                <img src={getImageUrl("glass-tea-orange", "svg")} alt="glass-tea" />
              </div>
              <p className="text-sm font-semibold text-white">Order On Progress</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-white text-2xl font-semibold">200</p>
              <p className="text-white text-xs ">+11.01%</p>
              <img src={getImageUrl("ArrowRise", "svg")} alt="arrowrise" />
            </div>
          </div>
          <div className="w-full bg-[#6c69d4] px-6 py-4 rounded-md">
            <div className="flex gap-2 mb-4 items-center">
              <div className="bg-white rounded-full p-3">
                <img src={getImageUrl("truck-orange", "svg")} alt="glass-tea" />
              </div>
              <p className="text-sm font-semibold text-white">Order Shipping</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-white text-2xl font-semibold">200</p>
              <p className="text-white text-xs ">+11.01%</p>
              <img src={getImageUrl("ArrowRise", "svg")} alt="arrowrise" />
            </div>
          </div>
          <div className="w-full bg-[#c56fbc] px-6 py-4 rounded-md">
            <div className="flex gap-2 mb-4 items-center">
              <div className="bg-white rounded-full p-3">
                <img src={getImageUrl("user-check", "svg")} alt="glass-tea" />
              </div>
              <p className="text-sm font-semibold text-white">Order Done</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-white text-2xl font-semibold">200</p>
              <p className="text-white text-xs ">+11.01%</p>
              <img src={getImageUrl("ArrowRise", "svg")} alt="arrowrise" />
            </div>
          </div>
        </section>
        <section className="">{!chartData ? <div></div> : <LineChart chartData={chartData} info={info}></LineChart>}</section>
        <section className="mt-6 mb-16 p-6 border border-[#e8e8e8] rounded-md">
          <div className="flex justify-between items-center">
            <p className="text-color-2 text-sm font-semibold">Produk Terlaris</p>
            <input type="date" name="" id="" className="bg-[#e8e8e8] rounded-md p-[10px]" />
          </div>
          <div className="flex justify-between items-center mt-4 border-b border-[#eaecf0]">
            <p className="py-3 px-6 text-[#4f5665] text-xs font-medium">No</p>
            <p className="py-3 w-full text-center px-6 text-[#4f5665] text-xs font-medium">Nama Produk</p>
            <p className="py-3 w-full text-center px-6 text-[#4f5665] text-xs font-medium">Terjual</p>
            <p className="py-3 w-full text-center px-6 text-[#4f5665] text-xs font-medium">Keuntungan</p>
          </div>
          {topSales ? topSales.map((data, idx) => <TopSales key={idx} info={data} card={idx}></TopSales>) : <p className=" text-center text-xl">No Product Found</p>}
          {/* {recomendationData ? recomendationData.map((product, idx) => <ProductCard key={idx} info={product}></ProductCard>) : <p> No Product Found</p>} */}
        </section>
      </section>
    </>
  );
}

export default AdminDashboard;
