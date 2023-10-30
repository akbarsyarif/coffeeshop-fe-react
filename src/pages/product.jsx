import React, { useEffect, useState } from "react";
import getImageUrl from "../utils/imageGetter";
import ProductCards from "../components/ProductCard";
import Header from "../components/HeaderUser";
import Footer from "../components/Footer";
// import { useNavigate } from "react-router-dom"; gunakan ketika ada logika sebelum navigasi
import { Link, useSearchParams } from "react-router-dom";
import { axiosgetProduct } from "../https/product";

const FilterRadio = ({ category, onChangeHandler }) => (
  <>
    <input type="radio" name="filter" id={category} className="hidden" onChange={onChangeHandler} />
    <label htmlFor={category} className="filter-button cursor-pointer">
      {category}
    </label>
  </>
);

function Product() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [productData, setProductData] = useState(null);
  // const filterList = ["Favorite Product", "Coffee", "Non Coffee", "Foods", "Add-On"];
  // const sortList = [];

  useEffect(() => {
    async function fetchData() {
      const url = import.meta.env.VITE_BE_HOST + "/product" + "?" + searchParams.toString();
      try {
        const result = await axiosgetProduct(url);
        console.log(result);
        setProductData(result.data.result);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const searchHandler = async (e) => {
    e.preventDefault();
    const url = import.meta.env.VITE_BE_HOST + "/product" + "?" + searchParams.toString();

    try {
      const result = await axiosgetProduct(url);
      console.log(result);
      setProductData(result.data.result);
    } catch (error) {
      console.log(error);
      setProductData();
    }
    // let category = "";
    // for (let i = 0; i < e.target.filter.length; i++) {
    //   if (e.target.filter[i].checked) {
    //     category = e.target.filter[i].id;
    //   }
    // }
  };

  const resetFilter = async () => {
    const url = import.meta.env.VITE_BE_HOST + "/product";
    setSearchParams((prev) => {
      delete prev.search;
      delete prev.category;
    });
    try {
      const result = await axiosgetProduct(url);
      setProductData(result.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  const searchChange = (e) => {
    setSearchParams((prev) => {
      const prevSearchParams = {};
      prev.forEach((value, key) => {
        Object.assign(prevSearchParams, { [key]: value });
      });
      return {
        ...prevSearchParams,
        search: e.target.value,
      };
    });
  };

  const categoryChange = (e) => {
    setSearchParams((prev) => {
      const prevSearchParams = {};
      prev.forEach((value, key) => {
        Object.assign(prevSearchParams, { [key]: value });
      });
      return {
        ...prevSearchParams,
        category: e.target.value,
      };
    });
    console.log(e.target);
  };

  const sortName = (e) => {
    setSearchParams((prev) => {
      const prevSearchParams = {};
      prev.forEach((value, key) => {
        Object.assign(prevSearchParams, { [key]: value });
      });
      return {
        ...prevSearchParams,
        product_name: e.target.value,
      };
    });
  };
  const sortPrice = (e) => {
    setSearchParams((prev) => {
      const prevSearchParams = {};
      prev.forEach((value, key) => {
        Object.assign(prevSearchParams, { [key]: value });
      });
      return {
        ...prevSearchParams,
        price: e.target.value,
      };
    });
  };
  const minSliderChange = (e) => {
    let minRange = parseInt(e.target.value);
    setSearchParams((prev) => {
      const prevSearchParams = {};
      prev.forEach((value, key) => {
        Object.assign(prevSearchParams, { [key]: value });
      });
      return {
        ...prevSearchParams,
        min_price: minRange,
      };
    });
    return minRange;
  };
  const maxSliderChange = (e) => {
    let maxRange = parseInt(e.target.value);
    setSearchParams((prev) => {
      const prevSearchParams = {};
      prev.forEach((value, key) => {
        Object.assign(prevSearchParams, { [key]: value });
      });
      return {
        ...prevSearchParams,
        max_price: maxRange,
      };
    });
    return maxRange;
  };

  const isCategory = (value) => {
    const prevCategory = searchParams.get("category");
    if (!prevCategory) return false;
    return prevCategory.split(",").includes(value.toString());
  };
  const isSortName = (value) => {
    const prevCategory = searchParams.get("product_name");
    if (!prevCategory) return false;
    return prevCategory.split(",").includes(value.toString());
  };
  const isSortPrice = (value) => {
    const prevCategory = searchParams.get("price");
    if (!prevCategory) return false;
    return prevCategory.split(",").includes(value.toString());
  };

  //   setSearchParams((prev) => ({
  //     ...prev,
  //     search: e.target["search-bar"].value,
  //     category: category,
  //   }));
  //   console.log(e.target.filter);
  //   console.log(e.target["search-bar"]);
  // };

  // const filterHandler = (e) => {
  //   setFilterParams((prev) => ({
  //     ...prev,
  //     category: e.target.id,
  //   }));
  // };

  return (
    <>
      <Header></Header>
      <main className="">
        <section className="hero py-4 md:py-[2vh] lg:py-[5vh] px-[15px] md:px-[3vw] xl:px-[9vw] xl:py-[8vh] md:h-[30vh] bg-[url(./assets/images/product-hero.webp)] bg-cover bg-no-repeat mb-[4vh] bg-[right_-210px_center] md:bg-center">
          <h1 className="hero-text text-center lg:text-start mx-auto lg:mx-0 text-white text-[48px] font-medium md:w-[80%] 2xl:w-[55%]">We Provide Good Coffee and Healthy Meals</h1>
        </section>

        <section className="promo py-4 select-none">
          <section className="promo-head px-[15px] md:px-[3vw] xl:px-[9vw] mb-[36px] flex flex-col gap-[15px] md:gap-[0px] md:flex-row justify-between items-center">
            <h2 className="text-[#0b0909] text-[48px] font-medium">
              Today <span className="text-[48px] font-medium text-[#8e6447]">Promo</span>
            </h2>
            <section className="page-nav flex w-full md:w-fit justify-evenly gap-[9px]">
              <div className="back select-none cursor-pointer w-[47px] h-[47px] rounded-full bg-[#e8e8e8] hover:bg-[#c6c6c6] bg-[url(./assets/images/arrow-left.svg)] bg-no-repeat bg-center"></div>
              <div className="next select-none cursor-pointer w-[47px] h-[47px] rounded-full bg-color-1 hover:bg-color-1-hover bg-[url(./assets/images/arrow-right.svg)] bg-no-repeat bg-center"></div>
            </section>
          </section>
          <section className="promo-cont flex gap-[4vw] overflow-visible overflow-y-hidden whitespace-nowrap">
            <section className="card pt-[11px] pr-[20px] pl-[15px] min-w-[335px] max-w-[335px] bg-[#88b788] rounded-[20px] flex gap-[9px]">
              <img className="w-[82px] h-[106px] mb-[-5px]" src={getImageUrl("promo-1", "webp")} alt="promo-1" />
              <section className="card-text flex flex-col text-sm font-bold text-black whitespace-pre-line">
                <p className="card-name font-bold">Happy Mother's Day!</p>
                <p className="card-desc font-normal mb-[10px]">Get one of our favorite menu for free</p>
                <p className="claim font-medium text-white">Klaim Kupon</p>
              </section>
            </section>
            <section className="card pt-[11px] pr-[20px] pl-[15px] min-w-[335px] max-w-[335px] bg-[#88b788] rounded-[20px] flex gap-[9px]">
              <img className="w-[82px] h-[106px] mb-[-5px]" src={getImageUrl("promo-1", "webp")} alt="promo-1" />
              <section className="card-text flex flex-col text-sm font-bold text-black whitespace-pre-line">
                <p className="card-name font-bold">Happy Mother's Day!</p>
                <p className="card-desc font-normal mb-[10px]">Get one of our favorite menu for free</p>
                <p className="claim font-medium text-white">Klaim Kupon</p>
              </section>
            </section>
            <section className="card pt-[11px] pr-[20px] pl-[15px] min-w-[335px] max-w-[335px] bg-[#88b788] rounded-[20px] flex gap-[9px]">
              <img className="w-[82px] h-[106px] mb-[-5px]" src={getImageUrl("promo-1", "webp")} alt="promo-1" />
              <section className="card-text flex flex-col text-sm font-bold text-black whitespace-pre-line">
                <p className="card-name font-bold">Happy Mother's Day!</p>
                <p className="card-desc font-normal mb-[10px]">Get one of our favorite menu for free</p>
                <p className="claim font-medium text-white">Klaim Kupon</p>
              </section>
            </section>
            <section className="card pt-[11px] pr-[20px] pl-[15px] min-w-[335px] max-w-[335px] bg-[#f5c361] rounded-[20px] flex gap-[9px]">
              <img className="w-[95px] h-[106px] mb-[-5px]" src={getImageUrl("promo-2", "webp")} alt="promo-2" />
              <section className="card-text flex flex-col justify-center text-sm font-bold whitespace-pre-line text-black">
                <p className="card-name font-bold mb-[11px]">Get a cup of coffee for free on sunday morning</p>
                <p className="card-desc font-normal">Only at 7 to 9 AM</p>
                {/* <!-- <p className="claim">Klaim Kupon</p> --> */}
              </section>
            </section>
          </section>
          <section className="page mt-[40px] px-[15px] md:px-[3vw] xl:px-[9vw] flex gap-[10px]">
            <div className="active w-[26px] h-[8px] bg-color-1 rounded-full"></div>
            <div className="w-[8px] h-[8px] bg-[#dde0e4] rounded-full"></div>
            <div className="w-[8px] h-[8px] bg-[#dde0e4] rounded-full"></div>
            <div className="w-[8px] h-[8px] bg-[#dde0e4] rounded-full"></div>
          </section>
        </section>

        <section className="product-cont px-[15px] md:px-[2vw] xl:px-[9vw] mt-[25px] mb-[32px]">
          <section className="product-head flex flex-col md:flex-row gap-[5px] justify-between items-center mb-[25px]">
            <h2 className="text-color-2 text-[48px] font-medium">
              Our <span className="text-[#8e6447] text-[48px] font-medium">Product</span>
            </h2>
            <button type="button" className="lg:hidden min-w-[100px] p-[5px] bg-color-1 hover:bg-color-1-hover text-[#0b0909] text-lg font-medium rounded-lg">
              Filter
            </button>
          </section>
          <section className="product flex gap-[15px] xl:gap-[25px]">
            <section className="product-filter hidden w-[240px] xl:w-[383px] h-min text-white text-lg lg:flex flex-col gap-[16px] bg-[#0b0909] rounded-[15px] px-[20px] pt-[27px] xl:pr-[38px] pb-[42px] xl:pl-[30px]">
              <section className="filter flex justify-between items-center">
                <p className="text-[22px] font-semibold">Filter</p>
                <p className="reset-filter font-bold cursor-pointer select-none hover:bg-slate-800 rounded-md p-2" onClick={resetFilter}>
                  Reset Filter
                </p>
              </section>
              <form className="flex flex-col gap-[16px]" onSubmit={searchHandler}>
                <label htmlFor="search-bar" className="filter-head font-bold">
                  Search
                </label>
                <input
                  onChange={searchChange}
                  defaultValue={searchParams.get("search")}
                  type="text"
                  id="search-bar"
                  placeholder="Search Your Product"
                  className="search-bar w-[100%] mt-[-6px] pt-[22px] pr-[55px] pb-[25px] pl-[20px] border border-[#dedede] bg-[#fcfdfe] rounded-md text-[#696f79] text-sm font-normal tracking-[.75px]"
                />
                <p className="filter-head font-bold">Category</p>
                <input onChange={categoryChange} checked={isCategory("Favorite Product")} defaultValue={"Favorite Product"} type="radio" name="filter" id="favorite-product" className="hidden" />
                <label htmlFor="favorite-product" className="filter-button cursor-pointer">
                  Favorite Product
                </label>
                <input onChange={categoryChange} checked={isCategory("Coffee")} defaultValue={"Coffee"} type="radio" name="filter" id="coffee" className="hidden" />
                <label htmlFor="coffee" className="filter-button cursor-pointer">
                  Coffee
                </label>
                <input onChange={categoryChange} checked={isCategory("Non Coffee")} defaultValue={"Non Coffee"} type="radio" name="filter" id="non-coffee" className="hidden" />
                <label htmlFor="non-coffee" className="filter-button cursor-pointer">
                  Non Coffee
                </label>
                <input onChange={categoryChange} checked={isCategory("Foods")} defaultValue={"Foods"} type="radio" name="filter" id="foods" className="hidden" />
                <label htmlFor="foods" className="filter-button cursor-pointer">
                  Foods
                </label>
                <input onChange={categoryChange} checked={isCategory("Add-On")} defaultValue={"Add-On"} type="radio" name="filter" id="add-on" className="hidden" />
                <label htmlFor="add-on" className="filter-button cursor-pointer">
                  Add-On
                </label>
                <p className="filter-head font-bold">Sort By</p>
                <p className="filter-head font-medium text-sm my-[-10px]">Product Name</p>
                <input onChange={sortName} checked={isSortName("asc")} defaultValue={"asc"} type="radio" name="sort-name" id="name-asc" className="hidden" />
                <label htmlFor="name-asc" className="filter-button cursor-pointer">
                  A - z
                </label>
                <input onChange={sortName} checked={isSortName("desc")} defaultValue={"desc"} type="radio" name="sort-name" id="name-desc" className="hidden" />
                <label htmlFor="name-desc" className="filter-button cursor-pointer">
                  Z - a
                </label>
                <p className="filter-head font-medium text-sm mb-[-10px]">Product Price</p>
                <input onChange={sortPrice} checked={isSortPrice("asc")} defaultValue={"asc"} type="radio" name="sort-price" id="price-asc" className="hidden" />
                <label htmlFor="price-asc" className="filter-button cursor-pointer">
                  From Cheapest
                </label>
                <input onChange={sortPrice} checked={isSortPrice("desc")} defaultValue={"desc"} type="radio" name="sort-price" id="price-desc" className="hidden" />
                <label htmlFor="price-desc" className="filter-button cursor-pointer">
                  From Priciest
                </label>
                <p className="filter-head font-bold">Range Price</p>
                <section className="range">
                  <div className="range-slider h-[8px] relative bg-[#f5f6f8] rounded-[25px]">
                    <span className={`range-selected h-[100%] absolute left-[0%] right-[0%] rounded-[25px] bg-color-1`}></span>
                  </div>
                  <section className="slider relative">
                    <input id="min" onChange={minSliderChange} className="min absolute w-[100%] h-[5px] top-[-7px] bg-none appearance-none pointer-events-none" min="10000" max="100000" step={"1000"} type="range" defaultValue="10000" />
                    <input id="max" onChange={maxSliderChange} className="max absolute w-[100%] h-[5px] top-[-7px] bg-none appearance-none pointer-events-none" min="10000" max="100000" step={"1000"} type="range" defaultValue="100000" />
                  </section>
                  <div className="range-price flex justify-between mt-[8px] text-xs leading-[24px]">
                    <p>{`IDR. ${searchParams.get("min_price") ? searchParams.get("min_price") : 10000}`}</p>
                    <p>
                      <p>{`IDR. ${searchParams.get("max_price") ? searchParams.get("max_price") : 100000}`}</p>
                    </p>
                  </div>
                </section>
                <button type="button " className="cursor-pointer [-8px] py-[12px] px-[18px] bg-color-1 hover:bg-color-1-hover rounded text-[#0b0909] text-sm font-medium tracking-[.75px]">
                  Apply Filter
                </button>
              </form>
            </section>
            {/*  */}
            <section className="product-list grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-[20px]">
              {productData ? productData.map((product, idx) => <ProductCards key={idx} info={product}></ProductCards>) : <p className="col-span-2  w-full text-2xl text-center"> No Product Found...</p>}
            </section>
          </section>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Product;
