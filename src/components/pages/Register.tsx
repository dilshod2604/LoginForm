import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
interface InputValue {
  email: string;
  password: string;
}
const Register = () => {
  const { register, handleSubmit } = useForm<InputValue>();

  const onSubmit: SubmitHandler<InputValue> = async (value) => {
    console.log(value);
  };
  return (
    <section>
      <div className="container">
        <div>
          <h1>Sign up</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            <button type="submit">Sign up</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
