import  bcrypt  from 'bcrypt';
import prisma from "@/lib/prisma"
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';


export const POST=async(req:Request)=>{
 try {
        const{email,password}=await req.json()

const user=await prisma.user.findUnique({
    where:{
        email
    }
})
if (!user) {
    return  NextResponse.json({error:"'Invalid credentials'"},{status:401}
)}
    
cookies().set("user_id", `${user.id}`, {
    path: '/',
    maxAge: 24 * 60 * 60 * 7
})

  const isPasswordValid=await bcrypt.compare(password,user?.password)
  if (!isPasswordValid) {
    return  NextResponse.json({error:"'Invalid credentials'"},{status:401}
)}
    return NextResponse.json(user,{status:200}) 
        
    } catch (error) {
        return NextResponse.json({error:'Method not allowed'},{status:405})
    }

}