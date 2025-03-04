import React from "react";
import ServicesCard from "../ServicesCard/ServicesCard";
import { useLoaderData } from "react-router-dom";

const AllTreatments = () => {

    
  const servicesData = useLoaderData();
  console.log(servicesData)

  return (
    <div>
     
      <div className=" w-[90%] rounded-lg mt-5 mx-auto grid grid-cols-4 gap-5">
        {servicesData.map((service) => (
          <ServicesCard service={service}></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default AllTreatments;
