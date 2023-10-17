import React from "react";
import getImageUrl from "../utils/imageGetter";
import Header from "../components/HeaderUser";
import Footer from "../components/Footer";
// import { useNavigate } from "react-router-dom"; gunakan ketika ada logika sebelum navigasi
import { Link } from "react-router-dom";

function productDetail() {
  return (
    <>
      <Header></Header>
      <main className="py-4 md:py-[5vh] px-[15px] md:items-start md:px-[3vw] xl:px-[9vw] xl:py-[8vh]">
        <section className="lg:flex gap-[20px] mb-[70px]">
          <section className="left mb-7 lg:flex-1">
            <img className="mb-[5px] mx-auto xl:mb-[27px] w-[330px] md:w-[500px] lg:w-[500px] xl:w-[580px]" src={getImageUrl("product-4", "webp")} alt="" />
            <div className="flex justify-center gap-[5px] xl:gap-[20px]">
              <img className="w-[106px] md:w-[163px] lg:w-[151px] xl:w-[177px]" src={getImageUrl("product-4-1", "webp")} alt="image-1" />
              <img className="w-[106px] md:w-[163px] lg:w-[151px] xl:w-[177px]" src={getImageUrl("product-4-2", "webp")} alt="image-2" />
              <img className="w-[106px] md:w-[163px] lg:w-[151px] xl:w-[177px]" src={getImageUrl("product-4-3", "webp")} alt="image-3" />
            </div>
          </section>
          <section className="right flex flex-col gap-[16px] lg:flex-1">
            <div className="">
              <p className="flash w-fit bg-[#d00000] p-[10px] rounded-3xl text-white text-lg font-bold">FLASH SALE!</p>
            </div>
            <h1 className="product-name text-[#0b0909] text-[48px] font-medium">Hazelnut Latte</h1>
            <div className="price flex gap-[12px] items-center">
              <p className="actual-price text-[#d00000] text-xs font-medium line-through">IDR 20.000</p>
              <p className="discount-price text-color-1 text-[22px] font-medium">IDR 10.000</p>
            </div>
            <div className="rating-cont flex gap-[10px]">
              <img src={getImageUrl("star-orange", "svg")} alt="star" />
              <img src={getImageUrl("star-orange", "svg")} alt="star" />
              <img src={getImageUrl("star-orange", "svg")} alt="star" />
              <img src={getImageUrl("star-orange", "svg")} alt="star" />
              <img src={getImageUrl("star-orange", "svg")} alt="star" />
              <p className="rating text-[#4f5665] text-sm">5.0</p>
            </div>
            <div className="review flex flex-col md:flex-row gap-[16px] text-lg text-[#4f5665]">
              <p className="review-text">200+ Review</p>
              <p className="hidden md:block">|</p>
              <div className="recom-cont flex gap-[16px] mt-[-20px] md:mt-[0px]">
                <p className="recom">Recommendation</p>
                <img className="w-[24px] h-[28px]" src={getImageUrl("ThumbsUp", "svg")} alt="thumbsUp" />
              </div>
            </div>
            <p className="product-desc text-[#4f5665]">
              Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.
            </p>
            <div className="quantity-cont flex items-center">
              <div className="cursor-pointer select-none minus border border-color-1 rounded p-[9px]">
                <img src={getImageUrl("minus", "svg")} alt="minus" />
              </div>
              <div className="quantity-text w-[46px] h-[36px] text-center border-t border-b border-[#e8e8e8]">
                <p className="text-color-2 text-lg font-bold leading-9">1</p>
              </div>
              <div className="cursor-pointer select-none plus border bg-color-1 border-transparent rounded p-[9px]">
                <img src={getImageUrl("plus", "svg")} alt="plus" />
              </div>
            </div>
            <p className="choose-size text-[#0b0909] text-lg font-bold">Choose Size</p>
            <div className="size-cont flex flex-col md:flex-row gap-[5px] md:gap-[31px]">
              <div className="active flex-1 p-[10px] border border-color-1 text-center">
                <p className="text-[#0b0909]">Regular</p>
              </div>
              <div className="flex-1 p-[10px] border border-[#4f5665] text-center">
                <p className="text-[#4f5665]">Medium</p>
              </div>
              <div className="flex-1 p-[10px] border border-[#4f5665] text-center">
                <p className="text-[#4f5665]">Large</p>
              </div>
            </div>
            <p className="hot-ice text-[#0b0909] text-lg font-bold">Hot/Ice?</p>
            <div className="flex flex-col md:flex-row gap-[5px] md:gap-[31px] mb-[40px] lg:mb-[59px]">
              <div className="active flex-1 p-[10px] border border-color-1 text-center">
                <p className="text-[#0b0909]">Ice</p>
              </div>
              <div className="flex-1 p-[10px] border border-[#4f5665] text-center">
                <p className="text-[#4f5665]">hot</p>
              </div>
            </div>
            <div className="button-cont flex flex-col md:flex-row gap-[5px] md:gap-[17px]">
              <div className="buy p-[10px] bg-color-1 rounded-md flex-1 text-color-2 text-sm font-medium text-center">Buy</div>
              <div className="cart flex gap-[10px] justify-center items-center p-[10px] bg-white border border-color-1 rounded-md flex-1 text-color-2 text-sm font-medium">
                <img src={getImageUrl("ShoppingCart", "svg")} alt="cart" />
                <p className="text-color-1 text-sm font-medium">Add to cart</p>
              </div>
            </div>
          </section>
        </section>

        <section>
          <p className="text-[#0b0909] text-center md:text-start text-[40px] md:text-[48px] font-medium mb-[25px]">
            Recommendation <span className="text-[#8e6447]">For You</span>
          </p>
          <section className="product-cont grid gap-y-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mb-[20px] lg:mb-[57px]">
            <section className="product-info">
              <section className="product-img-1 relative w-[310px] xl:w-[377px] h-[350px] bg-[url(./assets/images/product-3.webp)] bg-cover z-[-1]">
                <p className="flash-sale absolute top-[15px] left-[15px] font-bold p-[10px] bg-[#d00000] text-white rounded-[25px] w-fit">FLASH SALE!</p>
              </section>
              <section className="product-text mt-[-50px] mx-auto p-[10px] bg-white w-[300px] xl:w-[345px]">
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
            {/* <!--  --> */}
            <section className="product-info">
              <section className="product-img-2 relative w-[310px] xl:w-[377px] h-[350px] bg-[url(./assets/images/product-4.webp)] bg-cover z-[-1]">
                <p className="flash-sale absolute top-[15px] left-[15px] font-bold p-[10px] bg-[#d00000] text-white rounded-[25px] w-fit">FLASH SALE!</p>
              </section>
              <section className="product-text mt-[-50px] mx-auto p-[10px] bg-white w-[300px] xl:w-[345px]">
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
            {/* <!--  --> */}
            <section className="product-info">
              <section className="product-img-1 relative w-[310px] xl:w-[377px] h-[350px] bg-[url(./assets/images/product-3.webp)] bg-cover z-[-1]">
                <p className="flash-sale absolute top-[15px] left-[15px] font-bold p-[10px] bg-[#d00000] text-white rounded-[25px] w-fit">FLASH SALE!</p>
              </section>
              <section className="product-text mt-[-50px] mx-auto p-[10px] bg-white w-[300px] xl:w-[345px]">
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
          </section>
          <section className="product-pages mt-[5px] md:col-span-2 2xl:col-span-3 flex gap-[20px] justify-center items-center text-[#a0a3bd] font-medium">
            <p className="active cursor-pointer w-[40px] h-[40px] bg-color-1 hover:bg-color-1-hover rounded-full text-[#0b0909] text-center leading-[39px]">1</p>
            <p className="cursor-pointer w-[40px] h-[40px] bg-[#e8e8e8] hover:bg-[#d2d2d2] rounded-full text-[#0b0909] text-center leading-[39px]">2</p>
            <p className="cursor-pointer w-[40px] h-[40px] bg-[#e8e8e8] hover:bg-[#d2d2d2] rounded-full text-[#0b0909] text-center leading-[39px]">3</p>
            <p className="cursor-pointer w-[40px] h-[40px] bg-[#e8e8e8] hover:bg-[#d2d2d2] rounded-full text-[#0b0909] text-center leading-[39px]">4</p>
            <div className="next cursor-pointer w-[40px] h-[40px] bg-color-1 hover:bg-color-1-hover rounded-full bg-[url(./assets/images/arrow-right-white.svg)] bg-no-repeat bg-center"></div>
          </section>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default productDetail;
