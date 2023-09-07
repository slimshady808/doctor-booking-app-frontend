// PatientModal.js
import React from 'react';

export const PatientList = ({ user, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-md w-full md:w-96">
        <div className="p-6 text-center">
          <h2 className="text-xl font-semibold mb-4">Patient Details</h2>
          <div className="text-left mb-4">
            <h3 className="text-lg font-semibold mb-2">Username: {user.username}</h3>
            <h3 className="text-lg font-semibold mb-2">Email: {user.email}</h3>
          </div>
          <ul className="list-disc ml-6">
            {user.patient_profile.map((patient) => (
              <li key={patient.id} className="mb-2">
                <span className="font-semibold">{patient.name}:</span>{' '}
                <span className="italic">{patient.mobile_number || 'No summary available'}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={onClose}
            className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};


