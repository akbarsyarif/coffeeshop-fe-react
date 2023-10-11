import React from "react";
import getImageUrl from "../utils/imageGetter";

function Footer() {
  return (
    <footer className="py-[2vh] px-[15px] bg-[#f8f8f8] md:py-[2vh] md:px-[3vw] xl:px-[9vw]">
      <section className="bio flex flex-col md:flex-row gap-[30px] lg:gap-[60px]">
        <section className="footer-left flex flex-col gap-[24px] mt-[15px]">
          <section className="coffee-logo flex gap-[15px] items-center">
            <img className="coffee" src={getImageUrl("Vector", "svg")} alt="coffe.png" />
            <p className="font-sacramento text-xl text-color-3">Coffee Shop</p>
          </section>
          <p className="bio-desc text-[#4f5665] mb-[8px]">
            Coffee Shop is a store that sells some good <br />
            meals, and especially coffee. We provide <br />
            high quality beans
          </p>
          <p className="trademarks text-[#afb5c0]">©2020CoffeeStore</p>
        </section>
        <section className="footer-product flex flex-col gap-[10px]">
          <p className="footer-title mb-[10px] text-color-2 text-lg font-medium">Product</p>
          <p className="footer-desc text-[#4f5665]">Our Product</p>
          <p className="footer-desc text-[#4f5665]">Pricing</p>
          <p className="footer-desc text-[#4f5665]">Locations</p>
          <p className="footer-desc text-[#4f5665]">Countries</p>
          <p className="footer-desc text-[#4f5665]">Blog</p>
        </section>
        <section className="engage flex flex-col gap-[10px]">
          <p className="footer-title mb-[10px] text-color-2 text-lg font-medium">Engage</p>
          <p className="footer-desc text-[#4f5665]">Partner</p>
          <p className="footer-desc text-[#4f5665]">FAQ</p>
          <p className="footer-desc text-[#4f5665]">About Us</p>
          <p className="footer-desc text-[#4f5665]">Privacy Policy</p>
          <p className="footer-desc text-[#4f5665]">Terms of Service</p>
        </section>
        <section className="social-media flex flex-col gap-[10px]">
          <p className="footer-title mb-[10px] text-color-2 text-lg font-medium">Social Media</p>
          <div className="flex">
            <img className="FB w-[60px] h-[60px] ml-[-13px]" src={getImageUrl("Facebook", "svg")} alt="Facebook.svg" />
            <img className="TWT w-[60px] h-[60px]" src={getImageUrl("Twitter", "svg")} alt="Twitter.svg" />
            <img className="IG w-[60px] h-[60px]" src={getImageUrl("Instagram", "svg")} alt="Instagram.svg" />
          </div>
        </section>
      </section>
    </footer>
  );
}

export default Footer;
