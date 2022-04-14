import instance from "./instance";

// export const signups = (user:any) =>{
//     const url=`/signup`;
//     return instance.post(url,user)
// }
export const signups= (users) =>{
    const url=`/users`
    return instance.post(url,users)
}
export const signin= (users) =>{
    const url=`/users`
    return instance.post(url,users)
}