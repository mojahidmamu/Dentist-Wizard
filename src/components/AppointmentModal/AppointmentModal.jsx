import React from "react";

const AppointmentModal = () => {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn my-5 mb-36 ml-36 flex justify-center items-center"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        open modal
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
           
          <div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <fieldset className="fieldset">
                <label className="fieldset-label">Name</label>
                <input type="text" className="input" placeholder="Name" />
                  <label className="fieldset-label">Email</label>
                  <input type="email" className="input" placeholder="Email" />
                  <label className="fieldset-label">Password</label>
                  <label className="fieldset-label">Address</label>
                  <input type="text" className="input" placeholder="Address" />
                  <label className="fieldset-label">Appoinment Date</label>
                  <input type="date" className="input" placeholder="Date" />
                  <label className="fieldset-label">Password</label>
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                  />

                  <button className="btn btn-neutral mt-4">
                    Make Appoinment
                  </button>
                </fieldset>
              </div>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AppointmentModal;
