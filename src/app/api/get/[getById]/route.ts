import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

const prisma=new PrismaClient()
export const GET =async()=>{
const data = await prisma.todo.findUnique({
    where: {
        id: 1    
    }
})  
return NextResponse.json(data) 
}