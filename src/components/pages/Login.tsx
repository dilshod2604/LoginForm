"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import AuthProvidersButtons from "../ui/AuthProvidersButtons";
import { useRouter } from "next/navigation";
interface InputValue {
  email: string;
  password: string;
}
const Login = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<InputValue>();

  const onSubmit: SubmitHandler<InputValue> = async (value) => {
    try {
      const newData = {
        email: value.email,
        password: value.password,
      };

      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });
      const data = res.json();
      if (res.ok) {
        console.log(data, "Succsess");
      }
    } catch (error) {
      console.log(error);
    }
    
  };
  return (
    <section className=" w-full h-screen flex items-center justify-center ">
      <div className="flex items-center justify-center w-[800px] h-[500px] rounded-2xl bg-blue-700">
        <div className="flex flex-col max-w-[400px] rounded-xl px-5 py-5 border bg-white/10 gap-y-5">
          <h1 className="text-3xl  font-bold mb-[30px] w-full text-center">
            Sign in{" "}
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-y-5"
          >
            <input
              className=" h-[40px] w-full px-4 py-2 rounded-md bg-white focus:outline-none placeholder:text-neutral-400 text-black"
              type="email"
              placeholder="username@gmail.com"
              {...register("email", { required: true })}
            />
            <input
              className="h-[40px] w-full px-4 py-2 rounded-md bg-white focus:outline-none placeholder:text-neutral-400 text-black"
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            <p className="text-white cursor-pointer hover:opacity-75">
              Forgot Password?
            </p>
            <button
              type="submit"
              className="flex items-center px-7 py-2  justify-center text-white font-bold bg-cyan-950 rounded-md hover:bg-cyan-800 transition"
            >
              Sign in
            </button>
          </form>
          <p className="w-full text-center">or continue with</p>
          <AuthProvidersButtons />  
          <span className="flex items-center gap-x-2">
            <p className="text-sm text-neutral-100">
              Don't have an account yet?{" "}
            </p>
            <button
              className="font-bold text-white hover:opacity-75"
              onClick={() => router.push("/auth/register")}
            >
              Register for free
            </button>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Login;
