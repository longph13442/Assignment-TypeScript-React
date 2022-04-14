import React, { useEffect } from 'react'
import {useForm, SubmitHandler} from "react-hook-form"
import { TypeProducts } from '../../Type/TypeProducts'
import {useNavigate, useParams} from 'react-router-dom'
import { read, update } from '../../api/products'

type AdminAddProps = {
    onUpdate: (product:TypeProducts) => void 
}
type formInput ={
    name:string,
    price:number,
    img:string
}
const AdminUpdate = (props: AdminAddProps) => {
    const {id} = useParams();
    const Navigate = useNavigate();
    const {register,handleSubmit, formState:{errors}, reset} = useForm<formInput>()
    useEffect(()=>{
        const getProducts = async ()=>{
            const {data} = await read(id);
            reset(data)            
        }
        getProducts();
    },[id])
    const onSubmit: SubmitHandler<formInput> = data =>{
        props.onUpdate(data)
        Navigate("/admin")
    }
    return (
        <div className="col-9">
            <form className=" d-flex row mx-5 my-3" method="post" style={{ width: '100%' }} id="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="text-center bg-light py-3">
                </div>
                <div className="col-9 ">
                    <input type="hidden" name="ma_tai_khoan" />
                    <div className="form-label-group">
                        <label htmlFor="inputEmail mb-5">Tên sản phẩm</label>
                        <input type="text" id="name"  className="form-control my-2 bg-light" {...register("name")}   />
                    </div>
                    <div className="form-label-group">
                        <label htmlFor="inputPassword ">Giá</label>
                        <input type="text" id="price"  className="form-control my-2 bg-light"  {...register("price")}/>
                    </div>
                    <div className="form-label-group">
                        <label htmlFor="inputPassword ">mô tả</label>
                        <input type="text" name="desc" id="desc" className="form-control my-2 bg-light"  />
                        <div id="error1" />
                        <span />
                    </div>
                    <div className="form-label-group">
                        <label htmlFor="inputPassword ">Số lượng</label>
                        <input type="text" id="quantyti" name="quantyti" className="form-control my-2 bg-light"  />
                        <div id="error2" />
                        <span />
                    </div>
                    <button className="btn  btn-success btn-md my-4" type="submit" name="profile">Thêm sản phẩm</button>
                </div>
                <div className="col-2 text-center mt-3 ms-5 ">
                    <div className="upload-btn-wrapper">
                        <input type="file" name="hinh_anh" id="img" className="btn btn-success btn-sm mt-3 " style={{ width: '95%' }} />
                    </div>
                </div>
            </form>
        </div>

    )
}

export default AdminUpdate