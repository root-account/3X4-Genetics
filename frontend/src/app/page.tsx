import Image from 'next/image';
import Link from 'next/link';


export default function Home() {
  return (

    <>
     <h1>Welcome</h1>
     <p>What would you like to do today?</p>
      <br/>
      <div className="d-grid gap-2 d-md-block">
        <Link className="btn btn-outline-primary" href={'/orders'}>View Orders</Link>

        <Link className="btn btn-outline-success" href={'/orders'}>View Kits</Link>
      </div>

    </>
   
  )
}
