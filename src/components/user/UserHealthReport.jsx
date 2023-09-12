


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { userHelthReport } from '../../Services/UserService';

export const UserHealthReport = () => {
  const [reportData, setReportData] = useState([]);
  const { booking_id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await userHelthReport(booking_id);
      if (data) {
        setReportData(data);
      }
    };
    fetchData();
  }, [booking_id]);

  return (
    <div className="bg-gray-100 p-6 rounded-md shadow-md mx-auto w-96 mt-14">
      <h2 className="text-xl font-semibold mb-4 text-center">Health Report</h2>
      <div className="bg-white rounded-md p-4 mb-4 shadow-md">
        {reportData.time && (
          <div className="mb-2">
            <span className="font-semibold">Time: </span>
            {reportData.time}
          </div>
        )}
        {reportData.doctor_name && (
          <div className="mb-2">
            <span className="font-semibold">Doctor: </span>
            {reportData.doctor_name}
          </div>
        )}
        {reportData.patient_name && (
          <div className="mb-2">
            <span className="font-semibold">Patient: </span>
            {reportData.patient_name}
          </div>
        )}
        {reportData.symptoms && (
          <div className="mb-2">
            <span className="font-semibold">Symptoms: </span>
            {reportData.symptoms}
          </div>
        )}
        {reportData.extra_notes && (
          <div className="mb-2">
            <span className="font-semibold">Extra Notes: </span>
            {reportData.extra_notes}
          </div>
        )}
        {reportData.medicine && (
          <div className="mb-2">
            <span className="font-semibold">Medicine: </span>
            {reportData.medicine}
          </div>
        )}
      </div>
      {reportData.tests && reportData.tests.length > 0 ? (
        <div className="bg-white rounded-md p-4 shadow-md">
          <h3 className="text-lg font-semibold mb-2">Test Results</h3>
          <table className="w-full">
            <thead className="border-b">
              <tr>
                <th className="py-2">Test Name</th>
                <th className="py-2">Test Result</th>
                <th className="py-2">Test Notes</th>
                <th className="py-2">Date of Test</th>
              </tr>
            </thead>
            <tbody>
              {reportData.tests.map((test, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                  <td className="py-2">{test.test_name}</td>
                  <td className="py-2">
                    {test.test_result && (
                      <a
                        href={`${server}${test.test_result}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        View Result
                      </a>
                    )}
                  </td>
                  <td className="py-2">{test.test_notes}</td>
                  <td className="py-2">{test.date_of_test}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center">No test results available.</p>
      )}
    </div>
  );
};

export default UserHealthReport;



