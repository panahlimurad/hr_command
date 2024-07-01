import { instanceAxiosAdmin } from "../Helper/instanceAxiosAdmin"

export const Register = async(data)=>{
    try{
        const response = await instanceAxiosAdmin.post("/api/v1/register", data)
        return response
    }catch(error){
        throw error
    }
}


export const Login = async(data)=>{
    try{
        const response = await instanceAxiosAdmin.post("/api/v1/login", data)
        return response
    }catch(error){
        throw error
    }
}


export const ForgotPasswordApi = async(data)=>{
    try{
        const response = await instanceAxiosAdmin.post("/api/v1/send-reset-otp", data)
        return response
    }catch(error){
        throw error
    }
}


export const ResetPasswordApi = async(data)=>{
    try{
        const response = await instanceAxiosAdmin.post("/api/v1/reset-password", data)
        return response
    }catch(error){
        throw error
    }
}


export const OtpExpire = async(data)=>{
    try{
        const response = await instanceAxiosAdmin.post("/api/v1/check-otp-expiry", data)
        return response
    }catch(error){
        throw error
    }
}


