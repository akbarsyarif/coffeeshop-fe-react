import React from "react";
import getImageUrl from "../utils/imageGetter";

function AdminOrderList({ data, card }) {
  return (
    <>
      {card % 2 === 0 ? (
        <div className="grid grid-cols-7 bg-[#F9FAFB] items-center py-3 border-b border-[#e8e8e8]/[.30]">
          <div className="w-4 h-4 cursor-pointer border border-[#e8e8e8] rounded-md"></div>
          <p className="text-center text-[#4f5665] text-sm ">{data.id}</p>
          <p className="text-center text-[#4f5665] text-sm ">{data.date}</p>
          <p className="text-center text-[#4f5665] text-sm ">Regular, Medium, Large</p>
          <p className="text-center text-[#4f5665] text-sm ">{data.Status}</p>
          <p className="text-center text-[#4f5665] text-sm ">{`IDR. ${data.total}`}</p>
          <div className="flex justify-center gap-[10px]">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-color-1/[0.1] cursor-pointer">
              <img src={getImageUrl("edit", "svg")} alt="edit" />
            </div>
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#d00000]/[0.1] cursor-pointer">
              <img src={getImageUrl("Delete", "svg")} alt="delete" />
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-7 items-center py-3 border-b border-[#e8e8e8]/[.30]">
          <div className="w-4 h-4 cursor-pointer border border-[#e8e8e8] rounded-md"></div>
          <p className="text-center text-[#4f5665] text-sm ">{data.id}</p>
          <p className="text-center text-[#4f5665] text-sm ">{data.date}</p>
          <p className="text-center text-[#4f5665] text-sm ">Regular, Medium, Large</p>
          <p className="text-center text-[#4f5665] text-sm ">{data.Status}</p>
          <p className="text-center text-[#4f5665] text-sm ">{`IDR. ${data.total}`}</p>
          <div className="flex justify-center gap-[10px]">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-color-1/[0.1] cursor-pointer">
              <img src={getImageUrl("edit", "svg")} alt="edit" />
            </div>
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#d00000]/[0.1] cursor-pointer">
              <img src={getImageUrl("Delete", "svg")} alt="delete" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AdminOrderList;
