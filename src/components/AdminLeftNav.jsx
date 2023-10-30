import React from "react";
import getImageUrl from "../utils/imageGetter";

function AdminLeftNav({ setLeftNav, status }) {
  return (
    <section className="h-auto flex flex-col gap-[16px] py-6 pr-2 border-r border-[#e8e8e8] w-[188px]">
      {status === 1 ? (
        <div className="flex gap-2 cursor-pointer select-none bg-color-1 rounded-md py-1 px-2 w-max lg:w-full" onClick={() => setLeftNav(1)}>
          <img src={getImageUrl("dashboard-active", "svg")} alt="dashboard-logo" />
          <p className="text-color-2 font-semibold tracking-[.096px]">DashBoard</p>
        </div>
      ) : (
        <div className="flex gap-2 cursor-pointer select-none py-1 px-2" onClick={() => setLeftNav(1)}>
          <img src={getImageUrl("dashboard", "svg")} alt="dashboard-logo" />
          <p className="text-[#4f5665] font-semibold tracking-[.096px]">DashBoard</p>
        </div>
      )}
      {status === 2 ? (
        <div className="flex gap-2 cursor-pointer select-none bg-color-1 rounded-md py-1 px-2" onClick={() => setLeftNav(2)}>
          <img src={getImageUrl("glass-tea-active", "svg")} alt="glass-tea" />
          <p className="text-color-2 tracking-[.084px]">Product</p>
        </div>
      ) : (
        <div className="flex gap-2 cursor-pointer select-none py-1 px-2" onClick={() => setLeftNav(2)}>
          <img src={getImageUrl("glass-tea", "svg")} alt="glass-tea" />
          <p className="text-[#4f5665] tracking-[.084px]">Product</p>
        </div>
      )}
      {status === 3 ? (
        <div className="flex gap-2 cursor-pointer select-none bg-color-1 rounded-md py-1 px-2" onClick={() => setLeftNav(3)}>
          <img src={getImageUrl("Bag-active", "svg")} alt="bag" />
          <p className="text-color-2 tracking-[.084px]">Order</p>
        </div>
      ) : (
        <div className="flex gap-2 cursor-pointer select-none py-1 px-2" onClick={() => setLeftNav(3)}>
          <img src={getImageUrl("Bag", "svg")} alt="bag" />
          <p className="text-[#4f5665] tracking-[.084px]">Order</p>
        </div>
      )}
      {status === 4 ? (
        <div className="flex gap-2 cursor-pointer select-none bg-color-1 rounded-md py-1 px-2" onClick={() => setLeftNav(4)}>
          <img src={getImageUrl("2User-active", "svg")} alt="2user" />
          <p className="text-color-2 tracking-[.084px]">User</p>
        </div>
      ) : (
        <div className="flex gap-2 cursor-pointer select-none py-1 px-2" onClick={() => setLeftNav(4)}>
          <img src={getImageUrl("2User", "svg")} alt="2user" />
          <p className="text-[#4f5665] tracking-[.084px]">User</p>
        </div>
      )}
      {status === 5 ? (
        <div className="flex gap-2 cursor-pointer select-none bg-color-1 rounded-md py-1 px-2" onClick={() => setLeftNav(5)}>
          <img src={getImageUrl("logout", "svg")} alt="logout" />
          <p className="text-color-2 tracking-[.084px]">Keluar</p>
        </div>
      ) : (
        <div className="flex gap-2 cursor-pointer select-none  py-1 px-2" onClick={() => setLeftNav(5)}>
          <img src={getImageUrl("logout", "svg")} alt="logout" />
          <p className="text-[#4f5665] tracking-[.084px]">Keluar</p>
        </div>
      )}
    </section>
  );
}

export default AdminLeftNav;
