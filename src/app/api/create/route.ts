import { NextResponse } from "next/server"
import {PrismaClient} from "@prisma/client"

const prisma=new PrismaClient()
export const POST=async(request:Request)=>{

    const {title,description,isCompleted}=await request.json()

    const data =await prisma.todo.create({
        data:{
            title:title,
            description:description,
            isCompleted:isCompleted
        }
    })
    return NextResponse.json(data)
}
