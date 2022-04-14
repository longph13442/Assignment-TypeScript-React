import React from 'react'

type Props = {}

const Banner = (props: Props) => {
  return (
    <div className="banner container">
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active w-100">
                <img src="http://127.0.0.1:5500/img/banner.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
                <img src="http://127.0.0.1:5500/img/banner2.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
                <img src="http://127.0.0.1:5500/img/banner.png" className="d-block w-100" alt="..." />
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
</div>
  )
}

export default Banner