import React, { useEffect, useState } from 'react';
import { get_user_data } from '../../helpers/auth';
import { fetchDoctorDetails } from '../../Services/DoctorService';
import { server } from '../../server';

export const Profile = () => {
  const [doctor_id, setDoctor_id] = useState('');
  const [doctorData, setDoctorData] = useState([]);
  const [imgURL, setImgURL] = useState(null);

  useEffect(() => {
    const user = get_user_data();
    setDoctor_id(user.user_id);
  }, []);

  useEffect(() => {
    if (doctor_id) {
      const fetchData = async () => {
        const response = await fetchDoctorDetails(doctor_id);
        if (response) {
          setDoctorData(response);
          setImgURL(response.doctorImage);
        }
      };
      fetchData();
    }
  }, [doctor_id]);

  return (
    <div className="bg-white p-6 rounded-md shadow-lg text-center">
      <img
        src={`${server}${imgURL}`}
        alt={doctorData.doctorName}
        className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500"
      />
      <h2 className="text-3xl font-semibold mt-4 text-blue-500">
        {doctorData.doctorName}
      </h2>
      <p className="text-lg text-gray-600">{doctorData.department}</p>

      <div className="mt-6 bg-gray-100 p-4 rounded-md shadow-md w-2/3 mx-auto">
        <div className="mt-4">
          <h3 className="text-xl font-semibold text-gray-800">Qualification:</h3>
          <p className="text-gray-700">{doctorData.qualification}</p>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-semibold text-gray-800">Fee:</h3>
          <p className="text-gray-700">${doctorData.fee}</p>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-semibold text-gray-800">Phone:</h3>
          <p className="text-gray-700">{doctorData.phone}</p>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-semibold text-gray-800">Address:</h3>
          <p className="text-gray-700">{doctorData.address}</p>
        </div>
      </div>
    </div>
  );
};


