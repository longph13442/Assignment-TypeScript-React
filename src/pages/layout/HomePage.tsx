import React from 'react'
import CenterHomePage from '../../component/CenterHomePage'
import Banner from '../../component/Banner'
import { TypeProducts } from '../../Type/TypeProducts'

type HomePageProps = {
  products:TypeProducts[]
}

const HomePage = ({products}:  HomePageProps) => {
  console.log(products);
  
  return (
    <div className="container">
      <Banner />
  <h4 className="m-3">TẤT CẢ SẢN PHẨM</h4>
 
  <div className="box flex d-flex col-12">
    
    {products?.map((product, index) =>{
      return (
        <div className="item col-3 px-2 text-center" key={index}>
        <div className="item-img">
          <img src={product.img}  className="w-100 " height="330px" />
        </div>
        {/* end item-img */}
        <div className="item-content text-center">
          <h6 className="my-3">{product.name}</h6>
          <span>{product.price} VND</span>
        </div>
        {/* end item content */}
        <a href={`/product/${product.id}`}><button className="btn btn-outline-warning w-75  my-3">Xem Chi tiết</button></a>
      </div>
      )
    })}
   
    
  </div>
  {/* end box */}

  <CenterHomePage />
  
</div>

  )
}

export default HomePage