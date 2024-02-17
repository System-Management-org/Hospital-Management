import React, { useState, useEffect } from 'react';

interface Patient {
  id: number;
  patient_id: string;
  first_name: string;
  last_name: string;
  birthdate: string;
  gender: string;
  email: string;
  phone: string;
  res_address: string;
  registrar: string;
}

interface TableComponentProps {
  searchData: Patient[];
}

const TableComponent: React.FC<TableComponentProps> = ({ searchData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [patientsPerPage] = useState(15);

  const indexOfLastPatient = currentPage * patientsPerPage;
  const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
  const currentPatients = searchData.slice(indexOfFirstPatient, indexOfLastPatient);

  const handleCheckIn = (patientId: string) => {
    console.log(`Checking in patient with ID: ${patientId}`);
  };

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    // Reset current page to 1 when new search results arrive
    setCurrentPage(1);
  }, [searchData]);

  return (
    <div>
      <h1>Patients Table</h1>
      <table>
        {/* ... (table headers) */}
        <tbody>
          {currentPatients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.patient_id}</td>
              <td>{patient.first_name}</td>
              <td>{patient.last_name}</td>
              <td>{patient.birthdate}</td>
              <td>{patient.phone}</td>
              <td>
                <button onClick={() => handleCheckIn(patient.patient_id)}>
                  Check In
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {/* Pagination controls */}
        <ul>
          {Array.from({ length: Math.ceil(searchData.length / patientsPerPage) }).map((_, index) => (
            <li key={index}>
              <button onClick={() => paginate(index + 1)}>
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TableComponent;
