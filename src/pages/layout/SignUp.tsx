import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { TypeProducts } from '../../Type/TypeProducts'
import { useNavigate } from 'react-router-dom'
import {ToastContainer, toast } from "react-toastify"
import { signups }  from '../../api/auth'

type formInput = {
    name: string,
    email: string,
    password:number | number
}
const SignUp = () => {
    const Navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<formInput>();
    const onSubmit: SubmitHandler<formInput> =async (user) => {
        console.log(user);
        
        const {data} = await signups(user)  
        if(data){
            toast.success("Bạn đã đang kí thành công, Vui lòng đợi 3s !")
            setTimeout(()=>{
                Navigate("/signin");
            },3000)
        }      
    }
    return (
        <div className="w-25 m-auto text-center mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <img className="mb-4" src="http://127.0.0.1:5500/img/logo.png" width={100} height={100} />
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                <div className="form-floating">
                    <input type="text" className="form-control"  placeholder="name"  {...register("name")}/>
                    <label htmlFor="floatingInput">Name</label>
                </div>
                <div className="form-floating my-2">
                    <input type="email" className="form-control"  placeholder="name@example.com" {...register("email")} />
                    <label htmlFor="floatingPassword">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control"  placeholder="Password" {...register("password")} />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" defaultValue="remember-me" /> Remember me
                    </label>
                </div>
                <button className="w-100 btn btn-lg btn-success" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
            </form>
            <ToastContainer />
        </div>
        
    )
}

export default SignUp