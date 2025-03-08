// // import React, { useContext } from "react";
// // import { Link } from "react-router-dom";
// // import { authContext } from "../MainLayout/MainLayout";

// import { Link, useLoaderData } from "react-router-dom";
// import Banner from "../Banner/Banner";
// import ServicesCard from "../ServicesCard/ServicesCard";
// import FeedBack from "../FeedBack/FeedBack";
// import AuthComponent from "../AuthComponent/AuthComponent";

// const Home = () => {
//   const services = useLoaderData();
//   // console.log(services);
//   const { servicesData, feedBackData } = services;

//   // const contextValue = useContext(authContext);
//   // const { handleGithubLogin, handleGoogleLogin, handleTwitterLogin } =
//   //   contextValue;
//   return (
//     <div>
//       <AuthComponent></AuthComponent>
//       <Banner></Banner>
//       <div className=" w-[90%] rounded-lg mt-5 mx-auto grid grid-cols-4 gap-5">
//         {servicesData.slice(0, 4).map((service) => (
//           <ServicesCard service={service}></ServicesCard>
//         ))}
//       </div>
//       <button className="btn btn-secondary mx-auto block my-5">
//         <Link to="/AllTreatments">Show More</Link>
//       </button>

//       <FeedBack feedBackData={feedBackData}></FeedBack>
      
//       {/* //   <button onClick={handleGoogleLogin} className="btn btn-secondary">
//     //     Google Login
//     //   </button>{" "}
//     //   <br />
//     //   <button onClick={handleGithubLogin} className="btn btn-outline my-5">
//     //     Github Login
//     //   </button>{" "}
//     //   <br />
//     //   <button onClick={handleTwitterLogin} className="btn btn-outline my-5">
//     //     Twitter Login
//     //   </button>{" "}
//     //   <br />
//     //   <br />
//     //   <Link to="/about">
//     //     <button className="btn btn-outline">Go to About</button>
//     //   </Link> */}
//     </div>
//   );
// };

// export default Home;
