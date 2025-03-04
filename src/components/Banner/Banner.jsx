import React from "react";
import BannerImg from "../../assets/bannerImage.jpeg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero bg-base-200 w-[90%] rounded-lg mt-5 mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          //   src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          src={BannerImg}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">
            "Bright Smiles, Healthy Teeth – Your Trusted Dental Care!"
          </h1>
          <p className="py-6">
            Experience top-quality dental care for a brighter, healthier smile.
            Book your appointment today!
          </p>
         <Link to='bookMark'> <button className="btn btn-primary">BOOK NOW </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
