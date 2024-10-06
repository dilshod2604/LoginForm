import React from "react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";

const AuthProvidersButtons = () => {
  return (
    <div className="flex w-full items-center justify-center gap-x-5 ">
      <button className="bg-white px-5 py-2 rounded-md  hover:opacity-75 transition">
        <FcGoogle size={25} />
      </button>
      <button className="bg-white px-5 py-2 rounded-md  hover:opacity-75 transition">
        <IoLogoGithub size={25} className="text-black" />
      </button>
    </div>
  );
};

export default AuthProvidersButtons;
