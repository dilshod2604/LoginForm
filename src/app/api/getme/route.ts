import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

export const Get=async()=>{
    const me=await prisma.user.findUnique({
        where:{
          id   
        }   
    })
    return NextResponse.json(me)
}