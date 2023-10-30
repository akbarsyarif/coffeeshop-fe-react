import React from "react";

function TopSales({ info, card }) {
  return (
    <>
      {card % 2 === 0 ? (
        <div className="flex justify-between items-center bg-[#F9FAFB] border-b border-[#eaecf0]">
          <p className="py-4 w-1/12 text-center px-6 text-[#4f5665] text-sm ">{card + 1}</p>
          <p className="py-4 w-full text-center px-6 text-[#4f5665] text-sm ">{info.productName}</p>
          <p className="py-4 w-full text-center px-6 text-[#4f5665] text-sm ">{info.quantity > 1 ? `${info.quantity} Pcs` : `${info.quantity}Pc`}</p>
          <p className="py-4 w-full text-center px-6 text-[#00A700] text-sm ">{info.profit > 1 ? `IDR. ${info.profit}` : `IDR. ${info.profit}`}</p>
        </div>
      ) : (
        <div className="flex justify-between items-center border-b border-[#eaecf0]">
          <p className="py-4 w-1/12 text-center px-6 text-[#4f5665] text-sm ">{card + 1}</p>
          <p className="py-4 w-full text-center px-6 text-[#4f5665] text-sm ">{info.productName}</p>
          <p className="py-4 w-full text-center px-6 text-[#4f5665] text-sm ">{info.quantity > 1 ? `${info.quantity} Pcs` : `${info.quantity}Pc`}</p>
          <p className="py-4 w-full text-center px-6 text-[#00A700] text-sm ">{info.profit > 1 ? `IDR. ${info.profit}` : `IDR. ${info.profit}`}</p>
        </div>
      )}
    </>
  );
}

export default TopSales;
