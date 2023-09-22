import React, { useEffect, useState } from 'react';
import { fetchUserData } from '../../Services/AdminService';
import { PatientList } from './PatientList';
import { BlockModal } from '../doctor/BlockModal';


export const UserList = () => {
  
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUserData();
      if (data) {
        setUsers(data);
      }
    };
    fetchData();
  }, []);

  const openPatientModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closePatientModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-4">User List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-200 rounded-lg overflow-hidden shadow-lg">
          <thead className="bg-gray-500 text-gray-700 uppercase text-sm leading-normal">
            <tr>
              <th className="py-3 px-6 text-left">Username</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Patients</th>
              <th className="py-3 px-6 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="py-3 px-6 text-left whitespace-nowrap">{user.username}</td>
                <td className="py-3 px-6 text-left whitespace-nowrap">{user.email}</td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {user.patient_profile.length > 0 ? (
                    <button
                      className="bg-blue-500 text-white py-1 px-2 rounded-full text-sm font-semibold"
                      onClick={() => openPatientModal(user)}
                    >
                      Show Patients
                    </button>
                  ) : (
                    'No Patients'
                  )}
                </td>
                 <td className="py-3 px-6 text-left whitespace-nowrap"><BlockModal user_id={user.id} is_active={!user.is_active}/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedUser && isModalOpen && (
        <PatientList user={selectedUser} onClose={closePatientModal} />
      )}
    </div>
  );
};


