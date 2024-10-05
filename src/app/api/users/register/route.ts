import prisma from "@/lib/prisma"
import { NextApiRequest, NextApiResponse } from "next"
import bcrypt from "bcrypt"


export const hendler=async(req:NextApiRequest,res:NextApiResponse)=>{

    if(req.method==="POST"){
        const {password,email}=await req.body
        const existingUser=await prisma.user.findUnique({
            where:email
        })
        if(existingUser){
            return res.status(400).json({ error: 'User already exists' });
        }

        const hashedPassword=await bcrypt.hash(password,10)

        const data=await prisma.user.create({
            data:{
                email:email,
                password:hashedPassword
            }
        })

        return  res.status(201).json(data);

    }else {
        return res.status(405).json({ error: 'Method not allowed' });
      }

}