import React from "react";
import getImageUrl from "../utils/imageGetter";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addInfo } from "../redux/slices/userHistory";
import moment from "moment";

function HistoryList(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log(userHistory);
  const toOrderDetail = () => {
    // <Link to="/order-detail">
    dispatch({
      type: addInfo,
      payload: props.info.id,
    });
    navigate("/order-detail");
  };

  const status = () => {
    let status;
    if (props.info.Status === "On Progress") return (status = "On Progress");
    if (props.info.Status === "Sending Goods") return (status = "Sending");
    if (props.info.Status === "Finished Order") return (status = "Done");
  };

  const orderDate = () => {
    let formatedDate = moment(props.info.Date).format("D MMMM YYYY");
    return formatedDate;
  };

  return (
    <div className="flex flex-col md:flex-row gap-[25px] items-center bg-[#e8e8e8]/[0.3] p-[10px] pr-[20px] w-max md:w-full lg:w-max select-none">
      <img src={getImageUrl("history-product", "webp")} alt="product-image" />
      <div>
        <div className="flex gap-[8px] mb-[10px] justify-center md:justify-start">
          <img src={getImageUrl("u_glass-tea", "svg")} alt="glass-tea" />
          <p className="text-[#4f5665] font-medium">No.order</p>
        </div>
        <p className="mb-[15px] text-color-2 font-bold">{`# ${props.info.id}`}</p>

        <p className="text-sm text-color-1 underline font-medium cursor-pointer hover:text-color-1-hover" onClick={toOrderDetail}>
          Views Order Detail
        </p>
      </div>
      <div>
        <div className="flex gap-[8px] mb-[10px] md:mt-[-20px] items-center justify-center md:justify-start">
          <img className="w-[16px] h-[16px]" src={getImageUrl("Calendar", "svg")} alt="calendar" />
          <p className="text-[#4f5665] font-medium">Date</p>
        </div>
        <p className="mb-[15px] text-color-2 font-bold">{orderDate()}</p>
      </div>
      <div>
        <div className="flex gap-[8px] mb-[10px] md:mt-[-20px] items-center justify-center md:justify-start md:w-[100px]">
          <img className="w-[16px] h-[16px]" src={getImageUrl("Repeat", "svg")} alt="repeat" />
          <p className="text-[#4f5665] font-medium">Total</p>
        </div>
        <p className="mb-[15px] text-color-2 font-bold">{`IDR. ${props.info.total}`}</p>
      </div>
      <div>
        <div className="flex gap-[8px] mb-[10px] md:mt-[-20px] items-center justify-center md:justify-start">
          <img className="w-[16px] h-[16px]" src={getImageUrl("u_process", "svg")} alt="process" />
          <p className="text-[#4f5665] font-medium">Status</p>
        </div>
        <p
          className={
            status() === "Done"
              ? "mb-[15px] text-[#00A700] text-xs text-center font-bold bg-[#00A700]/[0.2] rounded-3xl px-[10px] py-[5px] w-[100px]"
              : "mb-[15px] text-color-1 text-xs text-center font-bold bg-[#ff8906]/[0.2] rounded-3xl px-[10px] py-[5px] w-[100px]"
          }
        >
          {status()}
        </p>
      </div>
    </div>
  );
}

export default HistoryList;
