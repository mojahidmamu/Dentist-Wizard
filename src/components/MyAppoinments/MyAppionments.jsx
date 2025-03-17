import React, { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';

const MyAppointments = () => {
  const { user } = useContext(authContext);

  const appointments = [
    {
      id: 1,
      doctor: 'Dr. John Doe',
      date: '2025-03-20',
      time: '10:00 AM',
      status: 'Confirmed'
    },
    {
      id: 2,
      doctor: 'Dr. Sarah Smith',
      date: '2025-03-22',
      time: '02:00 PM',
      status: 'Pending'
    },
    {
      id: 3,
      doctor: 'Dr. Emily Davis',
      date: '2025-03-25',
      time: '11:30 AM',
      status: 'Completed'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-6">My Dental Appointments</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {appointments.map((appointment) => (
          <div key={appointment.id} className="bg-white p-5 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-2">{appointment.doctor}</h2>
            <p className="text-gray-600">Date: {appointment.date}</p>
            <p className="text-gray-600">Time: {appointment.time}</p>
            <p className="text-gray-600">Status: {appointment.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
