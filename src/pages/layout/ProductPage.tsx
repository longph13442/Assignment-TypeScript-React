import React from 'react'
import { TypeProducts } from '../../Type/TypeProducts'

type ProductPageProps = {
    products: TypeProducts[]
}

const ProductPage = ({ products }: ProductPageProps) => {
    return (
        <div className="container">
            <h4 className="m-3">TẤT CẢ SẢN PHẨM</h4>
            <div className="title-short col-12">
                <div className="col-6 m-3">
                    <span>Tất cả những sản phẩm Mới nhất nằm trong BST được mở bán Hàng Tuần sẽ được cập nhật liên tục tại
                        đây.
                        Chắc chắn bạn sẽ tìm thấy những sản phẩm Đẹp Nhất - Vừa Vặn Nhất - Phù Hợp nhất với phong cách của
                        mình.</span>
                </div>
                <div className="col-6 " />
            </div>
            {/* end titile */}
            <div className="row">
                <div className="col-12 flex d-flex">
                    
                        <div className="box flex d-flex col-12 my-3">
                            {products?.map((product, index) => {
                                return (
                                    <div className="item col-3 px-2 text-center" key={index}>
                                        <div className="item-img">
                                            <img src={product.img} className="w-100 " height="330px" />
                                        </div>
                                        {/* end item-img */}
                                        <div className="item-content text-center">
                                            <h6 className="my-3">{product.name}</h6>
                                            <span>{product.price}</span>
                                        </div>
                                        {/* end item content */}
                                        <button className="btn btn-outline-warning w-75  my-3">Xem Chi tiết</button>
                                    </div>
                                )
                            })}

                        </div>
                        {/* end box */}
                    
                </div>
            </div>
        </div>


    )
}

export default ProductPage