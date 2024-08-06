import { requests } from "./ApiCaller";
import { BACKEND_URL } from "./Help";


export const registerfunc = async (data) => {
    return await requests("POST", `${BACKEND_URL}/user/register`,data);
}
export const sendOtpFunct = async(data)=>{
    return await requests("POST",`${BACKEND_URL}/user/sendotp`,data)
}
export const userVerify = async(data)=>{
    return await requests("POST",`${BACKEND_URL}/user/Login`,data)
}