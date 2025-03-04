import { useLocation } from "react-router-dom";

const CheckOut = () => {
  const location = useLocation();
  const { service } = location.state || {};
  const { id, image, cost, treatment, description } = service;

  return (
    <div>
      {service ? (
        <div className="card">
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">{service.treatment}</h1>
                <p className="mb-5">
                {service.description}
                </p>
                <button className="btn btn-primary">Make Appoinment</button>
              </div>
            </div>
          </div>
          
        </div>
      ) : (
        <p>No service details available.</p>
      )}
    </div>
  );
};

export default CheckOut;
