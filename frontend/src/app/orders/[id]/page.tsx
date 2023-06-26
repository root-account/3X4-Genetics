"use client";
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios';
import { useState, useEffect } from 'react';

import { useParams } from 'next/navigation'

export default function OrderView() {

  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  const params = useParams();
  const id = params.id;


  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetchOrder();

    console.log(params);
    
  }, []);


  // Fetch order  
  const fetchOrder = async () => {
    try {
      const response = await axios.get(`${apiUrl}/orders/${id}`);
      const orderData = response.data;
      setOrder(orderData);
      console.log(orderData);
      
    } catch (error) {
      console.error('Error fetching order:', error);
    }
  };

    return (

        <>
        
        <h1>Order: {id}</h1>

        <div className='row'>
        <div className='col'>
          
          <table className="table table-striped">
            {/* <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Date</th>
                <th scope="col">Patient name</th>
                <th scope="col">Email</th>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col"></th>
              </tr>
            </thead> */}
            <tbody>
                <tr key={order?.id}>
                  <th scope="col">#</th>
                  <th scope="">{order?.id}</th>
                </tr>
                <tr key={order?.id}>
                  <th scope="col">Status</th>
                  <th scope="">{order?.paid == 1 ? 'Paid' : 'Not Paid'}</th>
                </tr>
                <tr>
                  <th scope="col">Date</th>
                  <td>{order?.created_at}</td>
                </tr>
                <tr>
                  <th scope="col">Patient name</th>
                  <td>{order?.patient?.name} {order?.patient?.surname}</td>
                </tr>
                <tr>
                  <th scope="col">Email</th>
                  <td>{order?.patient?.email}</td>
                </tr>
                <tr>
                  <th scope="col">Address</th>
                  <td>{order?.patient?.address}</td>
                </tr>
                <tr>
                  <th scope="col">Product</th>
                  <td>{order?.kit?.name}</td>
                </tr>
                <tr>
                  <th scope="col">Product Desc</th>
                  <td>{order?.kit?.description}</td>
                </tr>
                <tr>
                <th scope="col">Product Price</th>
                  <td>R{order?.kit?.price}</td>
                </tr>

            </tbody>
          </table>

        </div>
      </div>
        </>
      

    )
  }
  