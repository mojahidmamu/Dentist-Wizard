import React, { useState } from "react";

const AppointmentModal = ({ isOpen, closeModal }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-semibold text-center mb-4">
              Appointment Confirmation
            </h3>
            <p className="text-center mb-4">
              Your appointment has been successfully scheduled. We'll be in touch soon!
            </p>
            <div className="flex justify-center">
              <button
                onClick={closeModal}
                className="btn btn-primary bg-green-600 text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AppointmentModal;
