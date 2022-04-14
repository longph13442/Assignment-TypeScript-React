import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import {ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"
import Client from './pages/layout/Client'
import { TypeProducts } from './Type/TypeProducts'
import { creat, list, remove, update } from './api/products'
import HomePage from './pages/layout/HomePage'
import ProductPage from './pages/layout/ProductPage'
import ProductDetail from './pages/layout/ProductDetail'
import Admin from './pages/layout/Admin'
import AdminHome from './pages/layout/AdminHome'
import AdminAdd from './pages/layout/AdminAdd'
import AdminUpdate from './pages/layout/AdminUpdate'
import SignUp from './pages/layout/SignUp'
import SignIn from './pages/layout/SignIn'


function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [Products, setProducts] = useState<TypeProducts[]>([]);

  useEffect(() =>{
    const getProducts= async ()=>{
      const {data} = await list();
      setProducts(data)
    }
    getProducts();
  }, [])

  const onHandleRemove =async (id:number) =>{
    
    try {
      const {data}= await remove(id) 
      if(data){
        toast.success("Xóa thành công !")
      }
    } catch (error:any) {
      toast.error(error.response.data)
    }
    
    //reRender
    setProducts(Products.filter(item => item.id !== id)) 
  }
  // add
  const onHandleAdd =async (product:TypeProducts) => {
    try {
       const {data} = await creat(product);
       if(data){
         toast.success("Thêm sản phẩm thành công !")
       }
       
    } catch (error) {
      
    }
  }
  //update
  const onHandleUpdate =async (product:TypeProducts) => {
    try {
       const {data} = await update(product);
       if(data){
         toast.success("Update sản phẩm thành công !")
        //  setProducts([...Products,data])
         
       }
       
    } catch (error) {
      
    }
  }

  return (
    <div>
      <Routes>
      <Route path="/" element={<Client />} >
        <Route index element={<HomePage products={Products}/>}/>
        <Route path="/product/:id" element={<ProductDetail/>} />
        <Route path="/products" element={<ProductPage products={Products}/>} />
      </Route>
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/signin" element={<SignIn/>} />
      
     <Route path="/admin" element={<Admin />} >
        <Route index element={<AdminHome products={Products} onRemove={onHandleRemove}/>} />
        <Route path="/admin/add" element={<AdminAdd onAdd={onHandleAdd}/>} />
        <Route path="/admin/:id/update" element={<AdminUpdate  onUpdate={onHandleUpdate}/>} />

     </Route>

    </Routes>
    <ToastContainer />
    </div>
    
  )
}

export default App
