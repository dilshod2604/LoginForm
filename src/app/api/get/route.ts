import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

const prisma=new PrismaClient()
export const GET=async()=>{
const data=await prisma.todo.findMany()
return NextResponse.json(data)
}