import React from 'react'
import { Link } from 'react-router-dom'
import { TypeProducts } from '../../Type/TypeProducts'

type AdminHomeProps = {
    products: TypeProducts[]
    onRemove:(id:number) => void
}

const AdminHome = ({ products,onRemove }: AdminHomeProps) => {
    return (
        <>
        <h5 className='m-3'>DANH SÁCH SẢN PHẨM</h5>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Desc</th>
                    <th scope="col" colSpan={2}>Action</th>

                </tr>
            </thead>
            <tbody>
                {products?.map((product) => {
                    return (
                        <tr >
                            <th scope="row">{product.id}</th>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>Sản phẩm chất lượng </td>

                            <td><Link to={`${product.id}/update`} className="btn btn-success" >Sửa </Link></td>
                            <td><button onClick={ ()=> onRemove(product.id)} className='btn btn-danger'>Xóa</button></td>
                        </tr>
                    )
                })}

            </tbody>
        </table>
        </>
    )
}

export default AdminHome