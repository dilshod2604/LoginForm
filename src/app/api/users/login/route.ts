import  bcrypt  from 'bcrypt';
import prisma from "@/lib/prisma"
import { NextApiRequest, NextApiResponse } from "next"

export const handler=async(req:NextApiRequest,res:NextApiResponse)=>{
if(req.method==="POST"){
    const{email,password}=req.body

    const user=await prisma.user.findUnique({
        where:email
    })
    if(!user){
        return res.status(401).json({ error: 'Invalid credentials' });
    }
     const isPasswordValid=await bcrypt.compare(password,user.password)
     if(!isPasswordValid){
        return res.status(401).json({ error: 'Invalid credentials' }); 
     }
     return res.status(200).json({ message: 'Login successful', user }); 
}else{
    return res.status(405).json({ error: 'Method not allowed' });
}



}