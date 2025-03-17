import React, { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";

const MyAppointments = () => {
  const { user } = useContext(authContext);

  const appointments = [
    {
      id: 1,
      doctor: "Dr. John Doe",
      qualification: "BDS, MDS (Orthodontics)",
      date: "2025-03-20",
      time: "10:00 AM",
      status: "Confirmed",
    },
    {
      id: 2,
      doctor: "Dr. Sarah Smith",
      qualification: "BDS, MDS (Endodontics)",
      date: "2025-03-22",
      time: "02:00 PM",
      status: "Pending",
    },
    {
      id: 3,
      doctor: "Dr. Emily Davis",
      qualification: "BDS, MDS (Prosthodontics)",
      date: "2025-03-25",
      time: "11:30 AM",
      status: "Completed",
    },
    {
      id: 4,
      doctor: "Dr. Michael Lee",
      qualification: "BDS, MDS (Periodontics)",
      date: "2025-03-28",
      time: "09:00 AM",
      status: "Confirmed",
    },
    {
      id: 5,
      doctor: "Dr. Linda Johnson",
      qualification: "BDS, MDS (Pediatric Dentistry)",
      date: "2025-04-02",
      time: "01:00 PM",
      status: "Pending",
    },
    {
      id: 6,
      doctor: "Dr. Robert Brown",
      qualification: "BDS, MDS (Oral Surgery)",
      date: "2025-04-05",
      time: "03:30 PM",
      status: "Completed",
    },
    {
      id: 7,
      doctor: "Dr. Jessica Taylor",
      qualification: "BDS, MDS (Oral Medicine)",
      date: "2025-04-10",
      time: "10:30 AM",
      status: "Confirmed",
    },
    {
      id: 8,
      doctor: "Dr. William Anderson",
      qualification: "BDS, MDS (Public Health Dentistry)",
      date: "2025-04-12",
      time: "12:00 PM",
      status: "Pending",
    },
    {
      id: 9,
      doctor: "Dr. Sophia Wilson",
      qualification: "BDS, MDS (Oral Pathology)",
      date: "2025-04-15",
      time: "04:00 PM",
      status: "Completed",
    },
    {
      id: 10,
      doctor: "Dr. David Martinez",
      qualification: "BDS, MDS (Conservative Dentistry)",
      date: "2025-04-18",
      time: "02:45 PM",
      status: "Confirmed",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-6">My Dental Appointments</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="bg-white p-5 shadow-lg rounded-lg"
          >
            <h2 className="text-2xl mb-2 font-bold">{appointment.doctor}</h2>
            <h3 className="text-green-800 font-semibold text-xl">
              Qualification: {appointment.qualification}
            </h3>
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
