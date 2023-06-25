import Link from 'next/link';

export default  function AppNavbar(){
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <Link className="navbar-brand" href="/">
                <img className='logo' src="https://3x4genetics.io/wp-content/uploads/2021/05/logo.svg" alt="" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" href="/orders">Orders</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="/kits">Kits</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="/patients">Patients</Link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}




