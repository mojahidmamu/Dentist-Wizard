import React from "react";
import { NavLink } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const { id, image, cost, treatment, description } = service;
  return (
    <div>
      <section>
        <div className="card bg-base-100 h-[100%] mt-2 shadow-sm border-2">
          <figure>
            <img src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            {/* <p>ID: {id} </p> */}
            <div className="flex justify-between">
              <h2 className="card-title font-bold">{treatment} </h2>
              <h3 className="bg-green-600 px-1 w-20 h-12 text-center py-3 font-bold  rounded-lg">
                $ {cost} 
              </h3>
            </div>
            <p>{description}</p>
            <div className="card-actions justify-end">
            {/* to={`/details/:${id}`} */}
             {/* to='/login' */}
              <NavLink> 
                <button className="btn btn-primary">Checkout More</button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesCard;
