"use  client";
import React from "react";
import { RiSupabaseFill } from "react-icons/ri";
import { SiPrisma } from "react-icons/si";
import { CgMathPlus } from "react-icons/cg";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <header>
      <div className="container border">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-x-4 ">
            <RiSupabaseFill size={25} className="text-green-700" />
            <CgMathPlus className="text-black" />
            <SiPrisma size={25} className="text-black" />
          </div>
          <div className="flex items-center">
            <button className="flex items-center justify-center px-5 py-2 bg-neutral-800 text-white font-bold rounded-full hover:opacity-75 transition" onClick={()=>router.push("/auth/login")}>
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
