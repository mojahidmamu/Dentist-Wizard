import React from "react";
import { Link, useLocation } from "react-router-dom";

const CheckOut = () => {
  const location = useLocation();
  const { service } = location.state || {};

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold text-center">Detials More Page</h1>

      <div
        className="hero min-h-screen mt-5 rounded-lg"
        style={{
          backgroundImage: `url(${service.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{service.treatment}</h1>
            <p className="mb-5">{service.description}</p>
           <Link to='/appointment'> <button className="btn btn-primary">Make Appoinment </button></Link>
          </div>
        </div>
      </div>
      {/* MOjahid */}

      {service ? (
        <div className="card bg-base-100 shadow-md border p-5 mt-5">
          <div className="card bg-base-100 h-[100%] mt-2 shadow-sm border-2">
            <figure>
              <img
                src={service.image}
                alt={service.treatment}
                className="w-full h-60 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold">{service.treatment}</h2>
              <h3 className="text-lg font-semibold text-green-600">
                $ {service.cost}
              </h3>
              <p>{service.description}</p>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-red-500">
          No service details available.
        </p>
      )}

      {/*  */}
    </div>
  );
};

export default CheckOut;
