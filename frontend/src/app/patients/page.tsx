"use client";
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Patients() {
  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetchPatients();
  }, []);


  // Fetch Patients  
  const fetchPatients = async () => {
    try {
      const response = await axios.get(apiUrl+'/patient');
      const patientsData = response.data;
      setPatients(patientsData);
      console.log(patientsData);
      
    } catch (error) {
      console.error('Error fetching Patients:', error);
    }
  };

  return (
    <>
      <h1>Patients</h1>

      <hr />

      <div className='row'>
        <div className='col'>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Patient names</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Address</th>
                <th scope="col">Registered On</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient, index) => (
                <tr key={patient?.id}>
                  <td>{patient?.id}</td>
                  <td >{patient?.name} {patient?.surname}</td>
                  <td>{patient?.email}</td>
                  <td>{patient?.phone}</td>
                  <td>R{patient?.address}</td>
                  <td>R{patient?.created_at}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
