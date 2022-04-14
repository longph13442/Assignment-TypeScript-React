import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { read } from '../../api/products';
import { TypeProducts } from '../../Type/TypeProducts';

type Props = {

}

const ProductDetail = (props: Props) => {
  const { id } = useParams(); // lấy id từ url
  const [products, setProdcuts] = useState<TypeProducts>(); // hàm chứa giá trị 1 sản phẩm
  useEffect(() => { // thực hiện lấy ra sản phẩm
    const getProducts = async () => {
      const { data } = await read(id);
      console.log(data);
      setProdcuts(data);

    }
    getProducts();
  }, [])
  return (
    <div>
      <h5 className="m-3">CHI TIẾT SẢN PHẨM</h5>
      <div className="container col-12 flex d-flex my-3">
        <div className="col-5">
          <img src={products?.img} className="w-100" />
        </div>
        <div className="col-7 d-flex flex-column m-5">
          <h6 className="my-3">{products?.name}</h6>
          <span className="my-3">{products?.price}</span>
          <span className="my-3">Though her persona continues to evolve to her devoted fans, she’s simply Kim, a surreal yet relatable
            public figure who is infinitely watchable. Only one celebrity could shut down Paris Fashion Week by
            taking a seat in Balenciaga’s front row wearing head-to-toe caution tape, then study for their latest
            legal exams during the plane ride home.</span>
          <label >Số Lượng</label>
          <input type="number" className="w-75" />
          <button className="btn btn-success my-5 w-50 "> Thêm vào giỏ hàng</button>
        </div>
      </div>
    </div>

  )
}

export default ProductDetail