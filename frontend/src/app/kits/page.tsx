"use client";
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Kits() {
    
  const [kits, setKits] = useState([]);

  useEffect(() => {
    fetchKits();
  }, []);

  // Fetch Kits  
  const fetchKits = async () => {
    try {
      const response = await axios.get('http://localhost/3x4-Genetics/laravel/public/api/kits');
      const kitsData = response.data;
      setKits(kitsData);
      console.log(kitsData);
      
    } catch (error) {
      console.error('Error fetching Kits:', error);
    }
  };

  
  return (
    <>
      <h1>Kits</h1>

      <hr />

      <div className='row'>
        <div className='col'>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Kit name</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {kits.map((kit, index) => (
                <tr key={kit?.id}>
                  <th scope="row">{kit?.id}</th>
                  <td>{kit?.name}</td>
                  <td style={{maxWidth:200}}>{kit?.description}</td>
                  <td>R{kit?.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
