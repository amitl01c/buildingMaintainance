import { axiosVar } from "./helper";

export const signUp =(user)=>{
        return axiosVar.post('/api/auth/signup',user)
        .then((response)=>response.json());
}