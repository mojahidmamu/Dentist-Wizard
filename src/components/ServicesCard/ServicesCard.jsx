import React from "react";
import { useNavigate } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const { id, image, cost, treatment, description } = service;
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/details", { state: { service } });
  };

  return (
    <div>
      <section>
        <div className="card bg-base-100 h-[100%] mt-2 shadow-sm border-2">
          <figure>
            <img src={image} alt="Service" />
          </figure>
          <div className="card-body">
            <div className="flex justify-between">
              <h2 className="card-title font-bold">{treatment} </h2>
              <h3 className="bg-green-600 px-1 w-20 h-12 text-center py-3 font-bold rounded-lg">
                $ {cost}
              </h3>
            </div>
            <p>{description}</p>
            <div className="card-actions justify-end">
              <button onClick={handleCheckout} className="btn btn-primary">
                Detials More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesCard;
