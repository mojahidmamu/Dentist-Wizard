import React from 'react';
import pfofileImg from '../../assets/profile.bmp'

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-6">My Profile</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
        <img 
          src={pfofileImg}
          alt="Profile Picture" 
          className="w-32 h-32 rounded-lg  mx-auto mb-4"
        />
        <h2 className="text-2xl font-semibold text-center mb-2">Abdullah Al Mojahid</h2>
        <p className="text-gray-600 text-center mb-4">Full Stack Web Developer | React Enthusiast</p>
        <p className="text-gray-700 mb-2"><strong>Email:</strong> abdullahallmojahidstudent@example.com</p>
        <p className="text-gray-700 mb-2"><strong>Location:</strong> Chittagong , Bangladesh</p>
        <p className="text-gray-700 mb-2"><strong>Skills:</strong> HTML, CSS, JavaScript, React, Tailwind CSS, Firebase, MongoDB, Git, Github etc...</p>
        <p className="text-gray-700"><strong>About Me:</strong> Passionate about creating user-friendly web applications and learning new technologies.</p>
      </div>
    </div>
  );
};

export default Profile;
