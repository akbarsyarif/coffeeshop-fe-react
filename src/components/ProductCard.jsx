import React from "react";
import getImageUrl from "../utils/imageGetter";
import { useNavigate } from "react-router-dom";

function ProductCard(props) {
  const navigate = useNavigate();

  const toDetail = () => {
    navigate(`/product-detail/${props.info.id}`);
  };

  const toCheckout = (e) => {
    e.stopPropagation();
    navigate("/checkout");
  };

  return (
    <section className="product-info cursor-pointer" onClick={toDetail}>
      <section className="product-img-1 relative w-[350px] xl:w-[377px] h-[360px] bg-[url(./assets/images/product-3.webp)] bg-cover z-[-1]">
        <p className="flash-sale absolute top-[15px] left-[15px] font-bold p-[10px] bg-[#d00000] text-white rounded-[25px] w-fit">FLASH SALE!</p>
      </section>
      <section className="product-text mt-[-50px] mx-auto p-[10px] bg-white w-[320px] xl:w-[345px]">
        <p className="product-name mb-[12px] text-color-2 text-[22px] font-medium">{props.info["Product Name"]}</p>
        <p className="mb-[12px] text-[color-2] text-sm h-[65px]">{props.info.description}</p>
        <section className="star-cont mb-[12px] text-sm flex gap-[10px] text-[#4f5665]">
          <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
          <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
          <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
          <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
          <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
          <p className="star">5.0</p>
        </section>
        <section className="price flex gap-[12px] items-center mb-[12px] text-color-1 text-[22px] font-medium">
          <p className="price-slash text-[#d00000] line-through text-xs">IDR 20.000</p>
          <p className="price-actual">{`IDR ${props.info.price}`}</p>
        </section>
        <section className="button-cont flex items-center gap-[10px] mt-auto">
          <button className="buy cursor-pointer hover:bg-color-1-hover w-[80%] h-[35px] bg-color-1 rounded-[5px] text-color-2 text-sm font-medium">Buy</button>
          <img src={getImageUrl("ShoppingCart", "svg")} alt="shopping-cart" className="cart cursor-pointer hover:bg-[#e8e8e8] w-[58px] h-[35px] border border-color-1 rounded-[5px]" />
        </section>
      </section>
    </section>
  );
}

export default ProductCard;

{
  /* <section className="product-list grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 items-center gap-[20px]">
              <section className="product-info">
                <section className="product-img-1 relative w-[350px] xl:w-[377px] h-[360px] bg-[url(./assets/images/product-3.webp)] bg-cover z-[-1]">
                  <p className="flash-sale absolute top-[15px] left-[15px] font-bold p-[10px] bg-[#d00000] text-white rounded-[25px] w-fit">FLASH SALE!</p>
                </section>
                <section className="product-text mt-[-50px] mx-auto p-[10px] bg-white w-[320px] xl:w-[345px]">
                  <p className="product-name mb-[12px] text-color-2 text-[22px] font-medium">Hazelnut Latte</p>
                  <p className="mb-[12px] text-[color-2] text-sm">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                  <section className="star-cont mb-[12px] text-sm flex gap-[10px] text-[#4f5665]">
                    <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
                    <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
                    <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
                    <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
                    <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
                    <p className="star">5.0</p>
                  </section>
                  <section className="price flex gap-[12px] items-center mb-[12px] text-color-1 text-[22px] font-medium">
                    <p className="price-slash text-[#d00000] line-through text-xs">IDR 20.000</p>
                    <p className="price-actual">IDR 10.000</p>
                  </section>
                  <section className="button-cont flex items-center gap-[10px]">
                    <button className="buy cursor-pointer hover:bg-color-1-hover w-[80%] h-[35px] bg-color-1 rounded-[5px] text-color-2 text-sm font-medium">Buy</button>
                    <img src={getImageUrl("ShoppingCart", "svg")} alt="shopping-cart" className="cart cursor-pointer hover:bg-[#e8e8e8] w-[58px] h-[35px] border border-color-1 rounded-[5px]" />
                  </section>
                </section>
              </section>
              {/* <!--  --> */
}
//   <section className="product-info">
//     <section className="product-img-2 relative w-[350px] xl:w-[377px] h-[360px] bg-[url(./assets/images/product-4.webp)] bg-cover z-[-1]">
//       <p className="flash-sale absolute top-[15px] left-[15px] font-bold p-[10px] bg-[#d00000] text-white rounded-[25px] w-fit">FLASH SALE!</p>
//     </section>
//     <section className="product-text mt-[-50px] mx-auto p-[10px] bg-white w-[320px] xl:w-[345px]">
//       <p className="product-name mb-[12px] text-color-2 text-[22px] font-medium">Hazelnut Latte</p>
//       <p className="mb-[12px] text-[color-2] text-sm">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
//       <section className="star-cont mb-[12px] text-sm flex gap-[10px] text-[#4f5665]">
//         <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
//         <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
//         <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
//         <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
//         <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
//         <p className="star">5.0</p>
//       </section>
//       <section className="price flex gap-[12px] items-center mb-[12px] text-color-1 text-[22px] font-medium">
//         <p className="price-slash text-[#d00000] line-through text-xs">IDR 20.000</p>
//         <p className="price-actual">IDR 10.000</p>
//       </section>
//       <section className="button-cont flex items-center gap-[10px]">
//         <button className="buy cursor-pointer hover:bg-color-1-hover w-[80%] h-[35px] bg-color-1 rounded-[5px] text-color-2 text-sm font-medium">Buy</button>
//         <img src={getImageUrl("ShoppingCart", "svg")} alt="shopping-cart" className="cart cursor-pointer hover:bg-[#e8e8e8] w-[58px] h-[35px] border border-color-1 rounded-[5px]" />
//       </section>
//     </section>
//   </section>
{
  /* <!--  --> */
}
//   <section className="product-info">
//     <section className="product-img-1 relative w-[350px] xl:w-[377px] h-[360px] bg-[url(./assets/images/product-3.webp)] bg-cover z-[-1]">
//       <p className="flash-sale absolute top-[15px] left-[15px] font-bold p-[10px] bg-[#d00000] text-white rounded-[25px] w-fit">FLASH SALE!</p>
//     </section>
//     <section className="product-text mt-[-50px] mx-auto p-[10px] bg-white w-[320px] xl:w-[345px]">
//       <p className="product-name mb-[12px] text-color-2 text-[22px] font-medium">Hazelnut Latte</p>
//       <p className="mb-[12px] text-[color-2] text-sm">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
//       <section className="star-cont mb-[12px] text-sm flex gap-[10px] text-[#4f5665]">
//         <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
//         <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
//         <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
//         <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
//         <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
//         <p className="star">5.0</p>
//       </section>
//       <section className="price flex gap-[12px] items-center mb-[12px] text-color-1 text-[22px] font-medium">
//         <p className="price-slash text-[#d00000] line-through text-xs">IDR 20.000</p>
//         <p className="price-actual">IDR 10.000</p>
//       </section>
//       <section className="button-cont flex items-center gap-[10px]">
//         <button className="buy cursor-pointer hover:bg-color-1-hover w-[80%] h-[35px] bg-color-1 rounded-[5px] text-color-2 text-sm font-medium">Buy</button>
//         <img src={getImageUrl("ShoppingCart", "svg")} alt="shopping-cart" className="cart cursor-pointer hover:bg-[#e8e8e8] w-[58px] h-[35px] border border-color-1 rounded-[5px]" />
//       </section>
//     </section>
//   </section>
{
  /* <!--  --> */
}
//   <section className="product-info">
//     <section className="product-img-2 relative w-[350px] xl:w-[377px] h-[360px] bg-[url(./assets/images/product-4.webp)] bg-cover z-[-1]">
//       <p className="flash-sale absolute top-[15px] left-[15px] font-bold p-[10px] bg-[#d00000] text-white rounded-[25px] w-fit">FLASH SALE!</p>
//     </section>
//     <section className="product-text mt-[-50px] mx-auto p-[10px] bg-white w-[320px] xl:w-[345px]">
//       <p className="product-name mb-[12px] text-color-2 text-[22px] font-medium">Hazelnut Latte</p>
//       <p className="mb-[12px] text-[color-2] text-sm">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
//       <section className="star-cont mb-[12px] text-sm flex gap-[10px] text-[#4f5665]">
//         <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
//         <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
//         <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
//         <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
//         <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
//         <p className="star">5.0</p>
//       </section>
//       <section className="price flex gap-[12px] items-center mb-[12px] text-color-1 text-[22px] font-medium">
//         <p className="price-slash text-[#d00000] line-through text-xs">IDR 20.000</p>
//         <p className="price-actual">IDR 10.000</p>
//       </section>
//       <section className="button-cont flex items-center gap-[10px]">
//         <button className="buy cursor-pointer hover:bg-color-1-hover w-[80%] h-[35px] bg-color-1 rounded-[5px] text-color-2 text-sm font-medium">Buy</button>
//         <img src={getImageUrl("ShoppingCart", "svg")} alt="shopping-cart" className="cart cursor-pointer hover:bg-[#e8e8e8] w-[58px] h-[35px] border border-color-1 rounded-[5px]" />
//       </section>
//     </section>
//   </section>
{
  /* <!--  --> */
}
//   <section className="product-info">
//     <section className="product-img-1 relative w-[350px] xl:w-[377px] h-[360px] bg-[url(./assets/images/product-3.webp)] bg-cover z-[-1]">
//       <p className="flash-sale absolute top-[15px] left-[15px] font-bold p-[10px] bg-[#d00000] text-white rounded-[25px] w-fit">FLASH SALE!</p>
//     </section>
//     <section className="product-text mt-[-50px] mx-auto p-[10px] bg-white w-[320px] xl:w-[345px]">
//       <p className="product-name mb-[12px] text-color-2 text-[22px] font-medium">Hazelnut Latte</p>
//       <p className="mb-[12px] text-[color-2] text-sm">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
//       <section className="star-cont mb-[12px] text-sm flex gap-[10px] text-[#4f5665]">
//         <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
//         <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
//         <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
//         <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
//         <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
//         <p className="star">5.0</p>
//       </section>
//       <section className="price flex gap-[12px] items-center mb-[12px] text-color-1 text-[22px] font-medium">
//         <p className="price-slash text-[#d00000] line-through text-xs">IDR 20.000</p>
//         <p className="price-actual">IDR 10.000</p>
//       </section>
//       <section className="button-cont flex items-center gap-[10px]">
//         <button className="buy cursor-pointer hover:bg-color-1-hover w-[80%] h-[35px] bg-color-1 rounded-[5px] text-color-2 text-sm font-medium">Buy</button>
//         <img src={getImageUrl("ShoppingCart", "svg")} alt="shopping-cart" className="cart cursor-pointer hover:bg-[#e8e8e8] w-[58px] h-[35px] border border-color-1 rounded-[5px]" />
//       </section>
//     </section>
//   </section>
{
  /* <!--  --> */
}
//   <section className="product-info">
//     <section className="product-img-2 relative w-[350px] xl:w-[377px] h-[360px] bg-[url(./assets/images/product-4.webp)] bg-cover z-[-1]">
//       <p className="flash-sale absolute top-[15px] left-[15px] font-bold p-[10px] bg-[#d00000] text-white rounded-[25px] w-fit">FLASH SALE!</p>
//     </section>
//     <section className="product-text mt-[-50px] mx-auto p-[10px] bg-white w-[320px] xl:w-[345px]">
//       <p className="product-name mb-[12px] text-color-2 text-[22px] font-medium">Hazelnut Latte</p>
//       <p className="mb-[12px] text-[color-2] text-sm">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
//       <section className="star-cont mb-[12px] text-sm flex gap-[10px] text-[#4f5665]">
//         <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
//         <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
//         <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
//         <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
//         <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
//         <p className="star">5.0</p>
//       </section>
//       <section className="price flex gap-[12px] items-center mb-[12px] text-color-1 text-[22px] font-medium">
//         <p className="price-slash text-[#d00000] line-through text-xs">IDR 20.000</p>
//         <p className="price-actual">IDR 10.000</p>
//       </section>
//       <section className="button-cont flex items-center gap-[10px]">
//         <button className="buy cursor-pointer hover:bg-color-1-hover w-[80%] h-[35px] bg-color-1 rounded-[5px] text-color-2 text-sm font-medium">Buy</button>
//         <img src={getImageUrl("ShoppingCart", "svg")} alt="shopping-cart" className="cart cursor-pointer hover:bg-[#e8e8e8] w-[58px] h-[35px] border border-color-1 rounded-[5px]" />
//       </section>
//     </section>
//   </section>
//   <section className="product-pages mt-[5px] md:col-span-2 2xl:col-span-3 flex gap-[20px] justify-center items-center text-[#a0a3bd] font-medium">
//     <p className="active cursor-pointer w-[40px] h-[40px] bg-color-1 hover:bg-color-1-hover rounded-full text-[#0b0909] text-center leading-[39px]">1</p>
//     <p className="cursor-pointer w-[40px] h-[40px] bg-[#e8e8e8] hover:bg-[#d2d2d2] rounded-full text-[#0b0909] text-center leading-[39px]">2</p>
//     <p className="cursor-pointer w-[40px] h-[40px] bg-[#e8e8e8] hover:bg-[#d2d2d2] rounded-full text-[#0b0909] text-center leading-[39px]">3</p>
//     <p className="cursor-pointer w-[40px] h-[40px] bg-[#e8e8e8] hover:bg-[#d2d2d2] rounded-full text-[#0b0909] text-center leading-[39px]">4</p>
//     <div className="next cursor-pointer w-[40px] h-[40px] bg-color-1 hover:bg-color-1-hover rounded-full bg-[url(./assets/images/arrow-right-white.svg)] bg-no-repeat bg-center"></div>
//   </section>
// </section> */}
