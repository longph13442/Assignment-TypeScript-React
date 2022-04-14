import { TypeProducts } from "../Type/TypeProducts";
import instance from "./instance";

export const list= () =>{
    const url=`/products`
    return instance.get(url)
}
export const creat= (products:TypeProducts) =>{
    const url=`/products`
    return instance.post(url,products)
}
export const read= (id: number) =>{
    const url=`/products/${id}`
    return instance.get(url)
}
export const remove= (id: number) =>{
    const url=`/products/${id}`
    return instance.delete(url)
}
export const update= (products: TypeProducts) =>{
    const url=`/products/${products.id}`
    return instance.put(url, products)
}
