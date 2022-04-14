import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className="">
    <div className=" p-3 bg-white text-dark border-bottom">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                <img src="http://127.0.0.1:5500/img/logo.png" alt="" width="50" height="50" className="mx-3" />
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><a href="/" className="nav-link px-2 text-dark">Home</a></li>
                <li><a href="/products" className="nav-link px-2 text-dark">Products</a></li>
                <li><a href="detail-Product.html" className="nav-link px-2 text-dark">Product detail</a></li>
                <li><a href="dashboard.html" className="nav-link px-2 text-dark">Dashboard</a></li>
                <li><a href="#" className="nav-link px-2 text-dark">Sales</a></li>
            </ul>

            <form className="col-12 col-lg-5 mb-3 mb-lg-0 me-lg-3">
                <input type="search" className="form-control form-control-dark" placeholder="Search..."
                    aria-label="Search" />
            </form>

            <div className="text-end">
                <a href="/signin"><button type="button" className="btn btn-dark me-2">Login</button></a>
                <a href="/signup"><button type="button" className="btn btn-warning">Sign-up</button></a>
            </div>
        </div>
    </div>
   
  
</header>
  )
}

export default Header