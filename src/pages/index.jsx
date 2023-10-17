import { useState } from "react";
import getImageUrl from "../utils/imageGetter";
import Footer from "../components/Footer";
// import { useNavigate } from "react-router-dom"; gunakan ketika ada logika sebelum navigasi
import { Link } from "react-router-dom";

function index() {
  const [navShown, setNavShown] = useState(false);

  const navIcon = () => {
    if (navShown) return "XCircle";
    return "hamburger-menu";
  };

  const showNavHandler = () => {
    setNavShown((state) => !state);
  };
  return (
    <>
      <header className="absolute w-[100%] z-[1] flex py-[2vh] px-[15px] items-center bg-[#0b0909]/[0.13] justify-between md:py-[2vh] md:px-[3vw] xl:px-[9vw]">
        <section className="left-head flex md:flex md:gap-[3.5vw]">
          <section className="coffee-logo flex gap-[15px] items-center">
            <img className="select-none" src={getImageUrl("coffee-logo-white", "svg")} alt="coffee-shop-logo" />
            <h1 className="text-white text-xl font-sacramento select-none cursor-pointer font-normal">Coffee Shop</h1>
          </section>
          <nav className="left-nav items-center hidden md:flex md:gap-[3vw] text-sm font-medium">
            <p className="active text-white select-none cursor-pointer pb-2 border-b border-color-1">Home</p>
            <Link to="./product">
              <p className="text-white select-none cursor-pointer pb-2">Product</p>
            </Link>
          </nav>
        </section>
        <img className="hamburger w-[30px] h-[30px] cursor-pointer md:hidden select-none" id="hamburger-menu" src={getImageUrl(navIcon(), "svg")} alt="hamburger" onClick={showNavHandler} />
        <div className={" nav-down absolute top-[65px] right-[0px] w-screen h-screen p-5 bg-black flex flex-col gap-3 items-center md:hidden " + (navShown ? "true" : "hidden")}>
          <input type="text" placeholder="Search" className="w-full text-white p-3 pl-10 rounded-md mb-4 bg-[#aeaeae] bg-[url(./assets/images/Search.svg)] bg-no-repeat bg-[center_left_10px] placeholder:text-white" />
          <p className="active text-color-1 text-xl select-none cursor-pointer mb-4">Home</p>
          <Link to="/product">
            <p className="text-white text-xl select-none cursor-pointer mb-4">Product</p>
          </Link>
          <Link to="/checkout" className="flex gap-[15px] items-center mb-4">
            <img className="w-[24px] h-[24px] max-w-none" src={getImageUrl("ShoppingCart -white", "svg")} alt="shopping-cart" />
            <p className="your-cart text-white text-xl select-none cursor-pointer">Your Cart</p>
          </Link>
          <Link to="/login" className="w-full">
            <button type="button" className=" text-xl text-white bg-transparent border border-white hover:bg-white/50 px-2 md:px-[18px] py-2 md:py-[12px] rounded-md w-[100%] hover:bg-color-1-hover">
              Sign In
            </button>
          </Link>
          <Link to="/register" className="w-full">
            <button type="button" className=" text-xl text-color-2 bg-color-1 border border-transparent px-2 md:px-[18px] py-2 md:py-[12px] rounded-md w-full hover:bg-color-1-hover">
              Sign Up
            </button>
          </Link>
        </div>
        <nav className="right-nav hidden md:flex md:items-center md:gap-[22px]">
          <img className="w-[24px] h-[24px]" src={getImageUrl("Search", "svg")} alt="search" />
          <Link to="/checkout">
            <img className="w-[24px] h-[24px] max-w-none" src={getImageUrl("ShoppingCart -white", "svg")} alt="shopping-cart" />
          </Link>
          <Link to="/login" className="w-full">
            <button type="button" className="whitespace-nowrap text-sm text-white bg-transparent border border-white hover:bg-white/50 px-2 md:px-[18px] py-2 md:py-[12px] rounded-md w-[100%] hover:bg-color-1-hover">
              Sign In
            </button>
          </Link>
          <Link to="/register">
            <button type="button" className="text-sm text-color-2 bg-color-1 border border-transparent px-2 md:px-[18px] py-2 md:py-[12px] rounded-md w-[100%] hover:bg-color-1-hover whitespace-nowrap">
              Sign Up
            </button>
          </Link>
        </nav>
      </header>

      <main className="">
        <section className="hero bg-gradient-to-t from-[#0b0909] to-[#777c82] flex pl-[15px] md:pl-[3vw] xl:pl-[9vw]">
          <section className="left-hero flex flex-col items-center lg:items-start gap-[25px] py-[10vh] md:py-[20vh] lg:py-[30vh] w-[100%] lg:w-[50%] xl:w-[46%] pr-[3vw] lg:pr-[15vw]">
            <h1 className="text-white text-[48px] font-medium text-center lg:text-start">Start Your Day with Coffee and Good Meals</h1>
            <p className="text-white text-center lg:text-start">We provide quality beans, good taste, and healthy meals made by love just for you. Start your day with us for a bigger smile!</p>
            <button type="button" className="w-[143px] h-[50px] p-[10px] bg-color-1 hover:bg-color-1-hover cursor-pointer text-color-2 text-sm font-medium rounded-[5px]">
              Get Started
            </button>
            <section className="shop-info flex flex-col md:flex-row gap-[30px] justify-between text-white">
              <section className="info w-[130px] md:border-r">
                <p className="number text-color-1 text-[48px] font-medium">90+</p>
                <p className="text">Staffs</p>
              </section>
              <section className="info w-[130px] md:border-r">
                <p className="number text-color-1 text-[48px] font-medium">30+</p>
                <p className="text">Stores</p>
              </section>
              <section className="info-last w-[130px]">
                <p className="number text-color-1 text-[48px] font-medium">800+</p>
                <p className="text">Customers</p>
              </section>
            </section>
          </section>
          <section className="right-hero hidden lg:block relative bg-[url(./assets/images/home-hero.webp)] bg-cover w-[80%] pr-[15px] md:pr-[3vw] xl:pr-[9vw]">
            {/* <!-- <img src="./assets/images/hero.bg.webp" alt="" /> --> */}
            <section className="chat-circle w-[80px] h-[80px] absolute top-[80%] right-[14%] bg-color-1 bg-[url(./assets/images/ChatCircleDots.svg)] bg-no-repeat bg-center rounded-full"></section>
          </section>
        </section>

        <section className="info-1 flex pl-[15px] md:pl-[3vw] xl:pl-[9vw]">
          <section className="info-1-left w-[100%] lg:w-[50%] xl:w-[46%] flex flex-col gap-[25px] pr-[3vw] xl:pr-[5vw]">
            <h2 className="relative text-center lg:text-start text-color-2 text-[48px] font-medium pt-[6vh] lg:pl-[24px] lg:pr-[15%] lg:before:absolute lg:before:h-[68px] lg:before:top-[125px] lg:before:left-[0] lg:before:border-4 lg:before:border-color-1">
              We Provide <span className="info-1-head text-[#8e6447]">Good Coffee</span> and <span className="info-1-head text-[#8e6447]">Healthy Meals</span>
            </h2>
            <div className="underlined h-[7px] w-[68px] bg-color-1 mx-auto lg:hidden"></div>
            <p className="text-[#4f5665] text-center lg:text-start">You can explore the menu that we provide with fun and have their own taste and make your day better</p>
            <ul className="list-none text-[#4f5665] text-sm leading-[30px]">
              <li className="before:inline-block before:h-[24px] before:w-[24px] before:mr-[12px] before:bg-[url(./assets/images/green-check-circle.svg)] before:translate-y-[7px] pb-[25px]">High quality beans</li>
              <li className="before:inline-block before:h-[24px] before:w-[24px] before:mr-[12px] before:bg-[url(./assets/images/green-check-circle.svg)] before:translate-y-[7px] pb-[25px]">
                Healthy meals, you can request the ingredients
              </li>
              <li className="before:inline-block before:h-[24px] before:w-[24px] before:mr-[12px] before:bg-[url(./assets/images/green-check-circle.svg)] before:translate-y-[7px] pb-[25px]">
                Chat with our staff to get better experience for ordering
              </li>
              <li className="before:inline-block before:h-[24px] before:w-[24px] before:mr-[12px] before:bg-[url(./assets/images/green-check-circle.svg)] before:translate-y-[7px] pb-[25px] lg:pb-[20vh]">
                Free member card with a minimum purchase of IDR 200.000.
              </li>
            </ul>
          </section>
          <section className="info-1-right bg-[url(./assets/images/info-1-pic.webp)] bg-cover bg-no-repeat lg:w-[50%] xl:w-[54%] 2xl:w-[62%] bg-[center_left_-400px] xl:bg-center"></section>
        </section>

        <section className="favorite-cont flex flex-col gap-[25px] items-center px-[15px] md:px-[3vw] xl:px-[9vw] py-[8vh]">
          <h2 className="text-color-2 text-[48px] font-medium text-center">
            Here is People's <span className="text-[#8e6447]">Favorite</span>
          </h2>
          <div className="underlined h-[7px] w-[68px] bg-color-1"></div>
          <p className="text-[#4f5665]">Let's choose and have a bit taste of people's favorite. It might be yours too!</p>
          <section className="favorite-list mt-[3.5vh] grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]">
            {/* <!-- PRODUCT 1 --> */}
            <section className="product-info">
              <section className="product-img w-[280px] h-[268px] bg-[url(./assets/images/product-1.webp)]"></section>
              <section className="product-text mt-[-50px] mx-auto pt-[11px] px-[10px] pb-[25px] bg-white w-[262px] shadow-md shadow-black/50">
                <p className="product-name mb-[12px] text-color-2 text-[22px] font-medium">Hazelnut Latte</p>
                <p className="mb-[12px] text-[#4f5665] text-sm">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                <p className="price mb-[12px] text-color-1 text-[22px] font-medium">IDR 20.000</p>
                <section className="button-cont flex items-center gap-[10px]">
                  <button className="buy w-[177px] h-[35px] bg-color-1 hover:bg-color-1-hover cursor-pointer border border-transparent rounded-[5px] text-color-2 text-sm font-medium">Buy</button>
                  <img src={getImageUrl("ShoppingCart", "svg")} alt="shopping-cart" className="cart w-[58px] h-[35px] border border-color-1 rounded-[5px] cursor-pointer hover:bg-[#e8e8e8]" />
                </section>
              </section>
            </section>
            {/* <!-- PRODUCT 2 --> */}
            <section className="product-info hidden md:block">
              <section className="product-img-2 w-[280px] h-[268px] bg-[url(./assets/images/product-2.webp)]"></section>
              <section className="product-text mt-[-50px] mx-auto pt-[11px] px-[10px] pb-[25px] bg-white w-[262px] shadow-md shadow-black/50">
                <p className="product-name mb-[12px] text-color-2 text-[22px] font-medium">Hazelnut Latte</p>
                <p className="mb-[12px] text-[#4f5665] text-sm">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                <p className="price mb-[12px] text-color-1 text-[22px] font-medium">IDR 20.000</p>
                <section className="button-cont flex items-center gap-[10px]">
                  <button className="buy w-[177px] h-[35px] bg-color-1 hover:bg-color-1-hover cursor-pointer border border-transparent rounded-[5px] text-color-2 text-sm font-medium">Buy</button>
                  <img src={getImageUrl("ShoppingCart", "svg")} alt="shopping-cart" className="cart w-[58px] h-[35px] border border-color-1 rounded-[5px] cursor-pointer hover:bg-[#e8e8e8]" />
                </section>
              </section>
            </section>
            {/* <!-- PRODUCT 3 --> */}
            <section className="product-info hidden lg:block">
              <section className="product-img-3 w-[280px] h-[268px] bg-[url(./assets/images/product-3.webp)]"></section>
              <section className="product-text mt-[-50px] mx-auto pt-[11px] px-[10px] pb-[25px] bg-white w-[262px] shadow-md shadow-black/50">
                <p className="product-name mb-[12px] text-color-2 text-[22px] font-medium">Hazelnut Latte</p>
                <p className="mb-[12px] text-[#4f5665] text-sm">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                <p className="price mb-[12px] text-color-1 text-[22px] font-medium">IDR 20.000</p>
                <section className="button-cont flex items-center gap-[10px]">
                  <button className="buy w-[177px] h-[35px] bg-color-1 hover:bg-color-1-hover cursor-pointer border border-transparent rounded-[5px] text-color-2 text-sm font-medium">Buy</button>
                  <img src={getImageUrl("ShoppingCart", "svg")} alt="shopping-cart" className="cart w-[58px] h-[35px] border border-color-1 rounded-[5px] cursor-pointer hover:bg-[#e8e8e8]" />
                </section>
              </section>
            </section>
            {/* <!-- PRODUCT 4 --> */}
            <section className="product-info hidden xl:block">
              <section className="product-img-4 w-[280px] h-[268px] bg-[url(./assets/images/product-4.webp)]"></section>
              <section className="product-text mt-[-50px] mx-auto pt-[11px] px-[10px] pb-[25px] bg-white w-[262px] shadow-md shadow-black/50">
                <p className="product-name mb-[12px] text-color-2 text-[22px] font-medium">Hazelnut Latte</p>
                <p className="mb-[12px] text-[#4f5665] text-sm">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                <p className="price mb-[12px] text-color-1 text-[22px] font-medium">IDR 20.000</p>
                <section className="button-cont flex items-center gap-[10px]">
                  <button className="buy w-[177px] h-[35px] bg-color-1 hover:bg-color-1-hover cursor-pointer border border-transparent rounded-[5px] text-color-2 text-sm font-medium">Buy</button>
                  <img src={getImageUrl("ShoppingCart", "svg")} alt="shopping-cart" className="cart w-[58px] h-[35px] border border-color-1 rounded-[5px] cursor-pointer hover:bg-[#e8e8e8]" />
                </section>
              </section>
            </section>
          </section>
        </section>

        <section className="globe flex flex-col gap-[25px] items-center px-[15px] md:px-[3vw] xl:px-[9vw] py-[8vh]">
          <h2 className="globe-header text-color-2 text-[48px] font-medium text-center">
            <span className="text-[#8e6447]">Visit Our Store </span>in the Spot on the Map Below
          </h2>
          <div className="underlined h-[7px] w-[68px] bg-color-1"></div>
          <p className="globe-text text-[#4f5665]">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
          <img src={getImageUrl("Huge-Global", "webp")} alt="Huge-Global" />
        </section>

        <section className="testimony bg-gradient-to-b from-[#777c82] to-[#0b0909] flex flex-col items-center lg:flex-row gap-[25px] px-[15px] md:px-[3vw] xl:px-[9vw] py-[8vh]">
          <img className="sm:w-[300px] md:w-[500px] xl:w-[578px] sm:h-[250px] md:h-[400px] xl:-h[432px]" src={getImageUrl("testimony-1", "webp")} alt="testimony-1" />
          <section className="testi-box flex flex-col gap-[25px] text-white">
            <p>TESTIMONIAL</p>
            <h2 className="testi-name relative pl-[25px] text-[48px] font-medium before:absolute before:h-[68px] before:border-l-4 before:border-color-1 before:left-[0px]">Viezh Robert</h2>
            <p className="testi-job text-color-1">Manager Coffee Shop</p>
            <p>“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!“</p>
            <section className="star-cont flex gap-[25px]">
              <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
              <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
              <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
              <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
              <img src={getImageUrl("star-orange", "svg")} alt="star-orange" />
              <p className="star">5.0</p>
            </section>
            <section className="page-nav flex gap-[10px]">
              <div className="back cursor-pointer hover:bg-[#e8e8e8] w-[47px] h-[47px] bg-white rounded-full bg-[url(assets/images/arrow-left.svg)] bg-no-repeat bg-center"></div>
              <div className="next cursor-pointer hover:bg-color-1-hover w-[47px] h-[47px] bg-color-1 rounded-full bg-[url(assets/images/arrow-right.svg)] bg-no-repeat bg-center"></div>
            </section>
            <section className="page flex gap-[10px]">
              <div className="active w-[26px] h-[8px] bg-color-1 rounded-full"></div>
              <div className="w-[8px] h-[8px] bg-[#dde0e4] rounded-full"></div>
              <div className="w-[8px] h-[8px] bg-[#dde0e4] rounded-full"></div>
              <div className="w-[8px] h-[8px] bg-[#dde0e4] rounded-full"></div>
            </section>
          </section>
        </section>
      </main>

      <Footer></Footer>
    </>
  );
}

export default index;
