import React, { useContext, useState, useEffect } from "react";
import { authContext } from "../AuthProvider/AuthProvider";

const MyAppointments = () => {
  const { user } = useContext(authContext);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(`https://api.dentistcare.com/appointments?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setAppointments(data));
    }
  }, [user]);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-6">My Dental Appointments</h1>
      {appointments.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {appointments.map((appointment) => (
            <div
              key={appointment.id}
              className="bg-white p-5 shadow-lg rounded-lg"
            >
              <h2 className="text-xl font-semibold mb-2">
                {appointment.doctor}
              </h2>
              <p className="text-gray-600">Date: {appointment.date}</p>
              <p className="text-gray-600">Time: {appointment.time}</p>
              <p className="text-gray-600">Status: {appointment.status}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No appointments found.</p>
      )}
    </div>
  );
};

export default MyAppointments;
