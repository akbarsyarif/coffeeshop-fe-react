import React from "react";
import getImageUrl from "../utils/imageGetter";

function AdminProductList({ data, card }) {
  return (
    <>
      {card % 2 === 0 ? (
        <div className="grid grid-cols-9 bg-[#F9FAFB] items-center py-3 border-b border-[#e8e8e8]/[.30]">
          <div className="w-4 h-4 cursor-pointer border border-[#e8e8e8] rounded-md"></div>
          <div className="flex justify-center">
            <img height={"48px"} width={"48px"} src={getImageUrl("product-1", "webp")} alt="productimgae" className="rounded-md" />
          </div>
          <p className="text-center text-[#4f5665] text-sm ">{data["Product Name"]}</p>
          <p className="text-center text-[#4f5665] text-sm ">{`IDR. ${data.price}`}</p>
          <p className="text-center text-[#4f5665] text-xs h-[50px] overflow-hidden">{data.description}</p>
          <p className="text-center text-[#4f5665] text-sm ">Regular, Medium, Large</p>
          <p className="text-center text-[#4f5665] text-sm ">Dine In, Delivery</p>
          <p className="text-center text-[#4f5665] text-sm ">200</p>
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
        <div className="grid grid-cols-9 items-center py-3 border-b border-[#e8e8e8]/[.30]">
          <div className="w-4 h-4 cursor-pointer border border-[#e8e8e8] rounded-md"></div>
          <div className="flex justify-center">
            <img height={"48px"} width={"48px"} src={getImageUrl("product-1", "webp")} alt="productimgae" className="rounded-md" />
          </div>
          <p className="text-center text-[#4f5665] text-sm ">{data["Product Name"]}</p>
          <p className="text-center text-[#4f5665] text-sm ">{`IDR. ${data.price}`}</p>
          <p className="text-center text-[#4f5665] text-xs ">{data.description}</p>
          <p className="text-center text-[#4f5665] text-sm ">Regular, Medium, Large</p>
          <p className="text-center text-[#4f5665] text-sm ">Dine In, Delivery</p>
          <p className="text-center text-[#4f5665] text-sm ">200</p>
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

export default AdminProductList;
