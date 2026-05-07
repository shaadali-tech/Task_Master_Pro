import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";

interface LoginFormInputs {
  email: string;
  password: string;
}

export const LoginForm: React.FC = () => {
  const { login } = useAuth();
  const { register, handleSubmit, formState } = useForm<LoginFormInputs>();

  const (data: LoginFormInputs) => {
    try {
      await login(data.email, data.password);
      alert("Logged in successfully");
    } catch (error) {
      alert("Login failed: " + (error as Error).message);
    }
  };

  return (
    <form
      <input
        {...register("email", { required: "Email is required" })}
        placeholder="Email"
        type="email"
      />
      <input
        {...register("password", { required: "Password is required" })}
        placeholder="Password"
        type="password"
      />
      <button type="submit" disabled={formState.isSubmitting}>
        Login
      </button>
    </form>
  );
};