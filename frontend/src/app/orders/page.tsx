import Image from 'next/image'
// import Link from 'next/link'

export default function Orders() {
  return (

    <>
        <h1>Orders</h1>

        <button className="btn btn-outline-primary">New Order</button>
        <br/>
        <br/>
        
        {/* Create new Order */}
        <div className='row'>
            <div className='col-md-7'>
                <div className='jumbotron'>
                    <form>
                        <div className="row">
                            <div className="col">
                                <label  className="visually">Patient email</label>
                                <input type="text" className="form-control" id=""/>
                            </div>
                            <div className="col">
                                <label className="visually">Patient name</label>
                                <input type="text" className="form-control" />
                            </div>  

                            <div className="col">
                                <label className="visually">Kit</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            
                        </div>

                        <br/>
                        <div className="row">
                            <div className="col">
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Has paid
                                </label>
                              </div>
                            </div>  
                        </div>

                        <br/>
                        {/* <br/> */}
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary mb-3">Save order</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
        
        <hr/>

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
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>
                            <button type="submit" className="btn btn-primary mb-3">View</button>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
       
    </>
    


  )
}
