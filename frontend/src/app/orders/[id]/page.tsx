"use client";
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function OrderView() {
    return (

        <>
        
        <h1>Orders No: </h1>

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
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
                <tr key={order?.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{order?.created_at}</td>
                  <td>{order?.patient?.name} {order?.patient?.surname}</td>
                  <td>{order?.patient?.email}</td>
                  <td>{order?.kit?.name}</td>
                  <td>R{order?.kit?.price}</td>
                  <td>
                    <Link href={`/orders/${order?.id}`} className="btn btn-primary mb-3">View</Link>
                  </td>
                </tr>
            </tbody>
          </table>

        </div>
      </div>
        </>
      

    )
  }
  