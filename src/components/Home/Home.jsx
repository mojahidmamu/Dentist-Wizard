// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { authContext } from "../MainLayout/MainLayout";

import banner from "../../assets/image/hero.png";
import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import ServicesCard from "../ServicesCard/ServicesCard";
import FeedBack from "../FeedBack/FeedBack";
import TreadingPage from "../TreadingPage/TreadingPage";
// import AuthComponent from "../AuthComponent/AuthComponent";

const Home = () => {
  const services = useLoaderData();
  // console.log(services);
  const { servicesData, feedBackData } = services;

  // const contextValue = useContext(authContext);
  // const { handleGithubLogin, handleGoogleLogin, handleTwitterLogin } =
  //   contextValue;
  return (
    <div className="">
      <div className="hero-content text-center mt-7">
        <div className=" ">
          <h1 className="text-5xl font-bold">
            We Build <br /> <span style={{ color: "#632EE3" }}>Productive</span>{" "}
            Apps
          </h1>
          <p className="py-6" style={{ color: "#676282" }}>
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. <br />
            Our goal is to turn your ideas into digital experiences that truly
            make an impact.
          </p>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl mr-5">
            Google Play
          </button>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
            Apps Store{" "}
          </button>
        </div>
      </div>
      {/* Banner Section */}
      <div>
        <img className="w-auto h-80 mx-auto" src={banner} alt="" />
      </div>
      {/* Built for You */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-5 text-white">
        <h2 className="text-3xl font-bold text-center mb-7">
          {" "}
          Trusted by Millions, Built for You{" "}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-5 mb-10">
          {/* First Div */}
          <div className=" text-center">
            <p className=" mt-5" style={{ color: "#eae9edff" }}>
              Total Downloads
            </p>
            <h2 className="font-bold text-3xl">29.6M </h2>
            <p className="py-3" style={{ color: "#eae9edff" }}>
              21% more than last month
            </p>
          </div>
          {/*  */}
          <div className="  text-center">
            <p className=" mt-5" style={{ color: "#eae9edff" }}>
              Total Reviews
            </p>
            <h2 className="font-bold text-3xl">906K</h2>
            <p className="py-3" style={{ color: "#eae9edff" }}>
              46% more than last month
            </p>
          </div>
          {/*  */}
          <div className=" text-center">
            <p className=" mt-5" style={{ color: "#eae9edff" }}>
              Active Apps
            </p>
            <h2 className="font-bold text-3xl">132+ </h2>
            <p className="py-3" style={{ color: "#eae9edff" }}>
              31 More Will Launch Soon
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      <div>
        <TreadingPage></TreadingPage>
      </div>
    </div>
  );
};

export default Home;
