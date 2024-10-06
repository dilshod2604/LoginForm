
import prisma from "@/lib/prisma"
import bcrypt from "bcrypt"
import { NextResponse } from 'next/server';

export const POST=async(req:Request)=>{
    try {
        const{email,password}= await req.json()

        const existingUser=await prisma.user.findUnique({
            where:{
                email
            }
        })
        
        if(existingUser){
            return NextResponse.json({error:"User with this email already exists"},{status:400})
        }

        const hashedPassword=await bcrypt.hash(password,10)
        const user=await prisma.user.create({
            data:{
                email,
                password:hashedPassword
            }
            
        })
        return NextResponse.json(user,{status:201})  
    } catch (error) {
        return NextResponse.json(
            { error: "An error occurred while creating user" },
            { status: 500 }
          );
    }

}