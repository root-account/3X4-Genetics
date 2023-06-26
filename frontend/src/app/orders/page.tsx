"use client";
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Orders() {
    
  const [orders, setOrders] = useState([]);
  const [kits, setKits] = useState([]);

  const [formData, setFormData] = useState({
    patient_email: '',
    patient_name: '',
    kit_id: '',
    paid: false,
  });

  useEffect(() => {
    fetchOrders();
    fetchKits();
  }, []);

  useEffect(() => {

    setFormData({
      patient_email: '',
      patient_name: '',
      kit_id: kits[0]?.id,
      paid: false,
    });

  }, [kits]);

  // Fetch Orders  
  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://localhost/3x4-Genetics/laravel/public/api/orders');
      const ordersData = response.data;
      setOrders(ordersData);
      console.log(ordersData);
      
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  // Fetch Kits for the dropdown   
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

  // Create an order
  const createOrder = async () => {

    if (formData?.patient_email == "") {  
        alert("Patient email  address is required.");

        return;
    }

    try {
      const response = await axios.post(
        'http://localhost/3x4-Genetics/laravel/public/api/orders/create',
        formData
      );

      console.log('Order created:', response.data);
      // Reset the form after successful submission
      setFormData({
        patient_email: '',
        patient_name: '',
        kit_id: '',
        paid: false,
      });

      fetchOrders();

      alert("Order has been created.")

    } catch (error) {
      console.error('Error creating order:', error);
      alert('Error creating order');
      console.log(formData);
      
    }
  };

  const handleInputChange = (e:any) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: fieldValue,
    }));
    
  };

  
  return (
    <>
      <h1>Orders</h1>

      {/* Create new Order */}
      <div className='row'>
            <div className='col-md-7'>
                <div className='jumbotron'>
                    
                        <div className="row">
                            <div className="col">
                                <label  className="visually">Patient Email</label>
                                <input value={formData.patient_email} onChange={(e) => handleInputChange(e)} type="text" name='patient_email' className="form-control" id=""/>
                            </div>
                            <div className="col">
                                <label className="visually">Patient name</label>
                                <input type="text" value={formData.patient_name} onChange={(e) => handleInputChange(e)} name='patient_name' className="form-control" />
                            </div>  

                            <div className="col">
                                <label className="visually">Kit</label>
                                <select className="form-select" value={formData.kit_id} onChange={(e) => handleInputChange(e)} name='kit_id' aria-label="Default select example">
                                    {kits.map((kit, index) => (
                                        <option key={index} value={kit?.id}>{kit?.name}</option>
                                    ))}      
                                </select>
                            </div>
                            
                        </div>

                        <br/>
                        <div className="row">
                            <div className="col">
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" checked={formData.paid} onChange={(e) => handleInputChange(e)} name="paid" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Has paid
                                </label>
                              </div>
                            </div>  
                        </div>

                        <br/>
                        {/* <br/> */}
                        <div className="col-auto">
                            <button  onClick={() => createOrder()} className="btn btn-outline-primary">Create New Order</button>
                        </div>
                        
                </div>
            </div>
        </div>
      <hr />

      <div className='row'>
        <div className='col'>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Date</th>
                <th scope="col">Patient name</th>
                <th scope="col">Email</th>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Status</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={order?.id}>
                  <th scope="row">{order?.id}</th>
                  <td>{order?.created_at}</td>
                  <td>{order?.patient?.name} {order?.patient?.surname}</td>
                  <td>{order?.patient?.email}</td>
                  <td>{order?.kit?.name}</td>
                  <td>R{order?.kit?.price}</td>
                  <td>{order?.paid == 1 ? 'Paid' : 'Not Paid'}</td>
                  <td>
                    <Link href={`/orders/${order?.id}`} className="btn btn-primary mb-3">View</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
