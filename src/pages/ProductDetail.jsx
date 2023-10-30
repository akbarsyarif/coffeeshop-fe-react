import { useEffect, useState } from "react";
import getImageUrl from "../utils/imageGetter";
import ProductCard from "../components/ProductCard";
import Header from "../components/HeaderUser";
import Footer from "../components/Footer";
// import { useNavigate } from "react-router-dom"; gunakan ketika ada logika sebelum navigasi
import { Link, useParams } from "react-router-dom";
import { axiosgetProductDetail, axiosgetProduct } from "../https/product";
import { useSelector, useDispatch } from "react-redux";
import { addCart } from "../redux/slices/userCart";

function ProductDetail() {
  let { productId } = useParams();
  const [productData, setProductData] = useState(null);
  const [recomendationData, setRecomendationData] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("Regular");
  const [ice, setIce] = useState(true);
  const [navigateModal, setNavigateModal] = useState(false);
  const dispatch = useDispatch();

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity === 1) return quantity;
    setQuantity(quantity - 1);
  };

  const changeSize = (e) => {
    e.preventDefault();
    setSize(e.target.innerText);
  };

  const changeIce = (e) => {
    e.preventDefault();
    let isIce = true;
    if (e.target.innerText === "Hot") {
      isIce = false;
    }
    setIce(isIce);
  };

  const convertSize = () => {
    let sizeCode = 1;
    if (size === "Regular") return sizeCode;
    if (size === "Medium") return (sizeCode = 2);
    if (size === "Large") return (sizeCode = 3);
  };

  const sizeToPrice = () => {
    let addPrice = 1;
    if (size === "Regular") return addPrice;
    if (size === "Medium") return (addPrice = 1.1);
    if (size === "Large") return (addPrice = 1.2);
  };

  const convertIce = () => {
    let iceBool = "Ice";
    if (ice) return iceBool;
    if (!ice) return (iceBool = "Hot");
  };

  const addToCart = () => {
    const product = [parseInt(productId), quantity, convertSize(), ice, Math.round(productData[0].price * quantity * sizeToPrice())];
    const productInfo = [productData[0]["Product Name"], quantity, size, convertIce(), Math.round(productData[0].price * quantity * sizeToPrice())];
    dispatch({
      type: addCart,
      payload: { product, productInfo },
    });
    setNavigateModal(true);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axiosgetProductDetail(productId);
        setProductData(result.data.result);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const url = import.meta.env.VITE_BE_HOST + "/product" + `?category=${productData[0].Category}&limit=3&page=1`;
        // const url = `?category=${productData[0].Category}`;
        const result = await axiosgetProduct(url);
        setRecomendationData(result.data.result);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [productData]);

  return (
    <>
      <Header></Header>
      <section className={"modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black/75 z-[2] " + (navigateModal ? "" : "hidden")}>
        <div className="modal-cont border-2 border-color-1 bg-white rounded shadow-lg w-[95%] lg:w-2/3 p-[15px] md:p-10 flex flex-col items-center justify-between gap-9">
          <p className="text-3xl font-semibold">Continue Shopping?</p>
          <div className="flex flex-col md:flex-row gap-3 w-full mt-6">
            <Link to="/checkout" className="w-full">
              <button type="submit" className="close-modal bg-white rounded-md w-full p-[10px] hover:bg-[#dedede] border border-color-1 text-lg font-medium">
                No, I Want To Checkout
              </button>
            </Link>
            <Link to="/product" className="w-full">
              <button type="button" className="close-modal bg-color-1 rounded-md w-full p-[10px] hover:bg-color-1-hover text-lg font-medium">
                Yes
              </button>
            </Link>
          </div>
        </div>
      </section>

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
            {productData ? <h1 className="product-name text-[#0b0909] text-[48px] font-medium">{productData[0]["Product Name"]}</h1> : <p></p>}
            <div className="price flex gap-[12px] items-center">
              <p className="actual-price text-[#d00000] text-xs font-medium line-through">IDR 20.000</p>
              {productData ? <p className="discount-price text-color-1 text-[22px] font-medium">{`IDR ${Math.round(productData[0].price * quantity * sizeToPrice())}`}</p> : <p></p>}
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
            {productData ? <p className="product-desc text-[#4f5665]">{productData[0].description} </p> : <p></p>}
            <div className="quantity-cont flex items-center">
              <div className="cursor-pointer select-none minus border border-color-1 rounded p-[9px]" onClick={decreaseQuantity}>
                <img src={getImageUrl("minus", "svg")} alt="minus" />
              </div>
              <div className="quantity-text w-[46px] h-[36px] text-center border-t border-b border-[#e8e8e8]">
                <p className="text-color-2 text-lg font-bold leading-9">{quantity}</p>
              </div>
              <div className="cursor-pointer select-none plus border bg-color-1 border-transparent rounded p-[9px]" onClick={increaseQuantity}>
                <img src={getImageUrl("plus", "svg")} alt="plus" />
              </div>
            </div>
            <p className="choose-size text-[#0b0909] text-lg font-bold">Choose Size</p>
            <div className="size-cont flex flex-col md:flex-row gap-[5px] md:gap-[31px] select-none">
              <div className={`active flex-1 p-[10px] border ${size === "Regular" ? "border-color-1" : "border-[#4f5665]"} text-center cursor-pointer`} onClick={changeSize}>
                <p className={size === "Regular" ? "text-[#0b0909]" : "text-[#4f5665]"}>Regular</p>
              </div>
              <div className={`active flex-1 p-[10px] border ${size === "Medium" ? "border-color-1" : "border-[#4f5665]"} text-center cursor-pointer`} onClick={changeSize}>
                <p className={size === "Regular" ? "text-[#0b0909]" : "text-[#4f5665]"}>Medium</p>
              </div>
              <div className={`active flex-1 p-[10px] border ${size === "Large" ? "border-color-1" : "border-[#4f5665]"} text-center cursor-pointer`} onClick={changeSize}>
                <p className={size === "Regular" ? "text-[#0b0909]" : "text-[#4f5665]"}>Large</p>
              </div>
            </div>
            <p className="hot-ice text-[#0b0909] text-lg font-bold">Hot/Ice?</p>
            <div className="flex flex-col md:flex-row gap-[5px] md:gap-[31px] mb-[40px] lg:mb-[59px] select-none">
              <div className={`active flex-1 p-[10px] border ${ice ? "border-color-1" : "border-[#4f5665]"} text-center cursor-pointer`} onClick={changeIce}>
                <p className={ice ? "text-[#0b0909]" : "text-[#4f5665]"}>Ice</p>
              </div>
              <div className={`active flex-1 p-[10px] border ${!ice ? "border-color-1" : "border-[#4f5665]"} text-center cursor-pointer`} onClick={changeIce}>
                <p className={!ice ? "text-[#0b0909]" : "text-[#4f5665]"}>Hot</p>
              </div>
            </div>
            <div className="button-cont flex flex-col md:flex-row gap-[5px] md:gap-[17px]">
              <div className="buy p-[10px] bg-color-1 rounded-md flex-1 text-color-2 text-sm font-medium text-center cursor-pointer" onClick={addToCart}>
                Buy
              </div>
              <div className="cart flex gap-[10px] justify-center items-center p-[10px] bg-white border border-color-1 rounded-md flex-1 text-color-2 text-sm font-medium cursor-pointer">
                <img src={getImageUrl("ShoppingCart", "svg")} alt="cart" />
                <p className="text-color-1 text-sm font-medium">Add to cart</p>
              </div>
            </div>
          </section>
        </section>

        {recomendationData ? (
          <section>
            <p className="text-[#0b0909] text-center md:text-start text-[40px] md:text-[48px] font-medium mb-[25px]">
              Recommendation <span className="text-[#8e6447]">For You</span>
            </p>
            <section className="product-cont grid gap-y-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mb-[20px] lg:mb-[57px]">
              {recomendationData ? recomendationData.map((product, idx) => <ProductCard key={idx} info={product}></ProductCard>) : <p> No Product Found</p>}
            </section>
            <section className="product-pages mt-[5px] md:col-span-2 2xl:col-span-3 flex gap-[20px] justify-center items-center text-[#a0a3bd] font-medium">
              <p className="active cursor-pointer w-[40px] h-[40px] bg-color-1 hover:bg-color-1-hover rounded-full text-[#0b0909] text-center leading-[39px]">1</p>
              <p className="cursor-pointer w-[40px] h-[40px] bg-[#e8e8e8] hover:bg-[#d2d2d2] rounded-full text-[#0b0909] text-center leading-[39px]">2</p>
              <p className="cursor-pointer w-[40px] h-[40px] bg-[#e8e8e8] hover:bg-[#d2d2d2] rounded-full text-[#0b0909] text-center leading-[39px]">3</p>
              <p className="cursor-pointer w-[40px] h-[40px] bg-[#e8e8e8] hover:bg-[#d2d2d2] rounded-full text-[#0b0909] text-center leading-[39px]">4</p>
              <div className="next cursor-pointer w-[40px] h-[40px] bg-color-1 hover:bg-color-1-hover rounded-full bg-[url(./assets/images/arrow-right-white.svg)] bg-no-repeat bg-center"></div>
            </section>
          </section>
        ) : (
          ""
        )}
      </main>
      <Footer></Footer>
    </>
  );
}

export default ProductDetail;
