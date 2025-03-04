import React from "react";

const AppointmentModal = () => {
  return (
    <div>
      <figure className="diff aspect-16/9" tabIndex={0}>
        <div className="diff-item-1" role="img">
          <div className="bg-primary text-primary-content grid place-content-center text-9xl font-black">
            DENTIST Dr. Nanto....
          </div>
        </div>
        <div className="diff-item-2" role="img" tabIndex={0}>
          <div className="bg-base-200 grid place-content-center text-9xl font-black">
            DAISY
          </div>
        </div>
        <div className="diff-resizer"></div>
      </figure>
    </div>
  );
};

export default AppointmentModal;
