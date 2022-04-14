import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="py-3 bg-light px-5 mt-5">
      <div className="row">
        <div className="col-12 col-lg-3 ">
          <h5 className="fw-bold mb-4">Về chúng tôi</h5>
          <p>
            SunFlower ra đời và phát triển dựa trên mục đích mang đến cho khách hàng dựa vào 3 yếu tố tươi trẻ,
            sắc đẹp và thịnh vượng. Miraso là một thương hiệu phân phối Mỹ phẩm Hàn Quốc chính hãng nhập trực
            tiếp từ Hàn Quốc, uy tín hàng đầu tại Việt Nam.
          </p>
        </div>
        <div className="col-12 col-lg-3">
          <h5 className=" text-center fw-bold mb-4">TỪ KHÓA</h5>
          <ul className="nav flex-column text-center">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">#mỹ phẩm</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">#hàn quốc</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">#dưỡng ẩm</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">#chất lượng</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">#make-up</a></li>
          </ul>
        </div>
        <div className="col-12 col-lg-4 offset-1 ">
          <form>
            <h5 className="fw-bold mb-4">ĐĂNG KÍ THÀNH VIÊN CỦA SUNFLOWER</h5>
            <p>Nhận ưu đãi chưa từng có trong lần mua hàng đầu tiên !</p>
            <div className="d-flex w-100 gap-2">
              <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
              <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
              <button className="btn btn-warning" type="button">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
      <div className=" border-top ">
        <p className="text-center">© 2021 Company, Inc. All rights reserved.</p>
      </div>
    </footer>


  )
}

export default Footer