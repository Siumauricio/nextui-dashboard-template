"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Input } from "@heroui/react";

import { createAuthCookie } from "@/actions/auth.action";
import { LoginSchema } from "@/helpers/schemas";
import { LoginFormType } from "@/helpers/types";

export const Login = () => {
  const router = useRouter();

  // State for input values
  const [values, setValues] = useState<LoginFormType>({
    email: "admin@acme.com",
    password: "admin",
  });

  // State for form errors
  const [errors, setErrors] = useState<Partial<Record<keyof LoginFormType, string>>>({});

  // Called after successful validation
  const handleLogin = useCallback(
    async (values: LoginFormType) => {
      // `values` contains email & password. You can use provider to connect user.
      await createAuthCookie();
      router.replace("/");
    },
    [router]
  );

  // Validate and submit the form
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Validate form values; abortEarly:false to catch all errors.
      await LoginSchema.validate(values, { abortEarly: false });
      setErrors({});
      await handleLogin(values);
    } catch (validationError: any) {
      // Convert validation errors into an object with field names as keys
      if (validationError.inner) {
        const formErrors: Partial<Record<keyof LoginFormType, string>> = {};
        validationError.inner.forEach((error: any) => {
          if (error.path) {
            formErrors[error.path as keyof LoginFormType] = error.message;
          }
        });
        setErrors(formErrors);
      }
    }
  };

  // Update state for input changes
  const handleChange = (field: keyof LoginFormType) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [field]: e.target.value });
  };

  return (
    <>
      <div className="text-center text-[25px] font-bold mb-6">Login</div>

      <form onSubmit={handleSubmit} className="flex flex-col w-full items-center">
        <div className="flex flex-col w-1/2 gap-4 mb-4">
          <Input
            variant="bordered"
            label="Email"
            name="email"
            type="email"
            value={values.email}
            isInvalid={!!errors.email}
            errorMessage={errors.email}
            onChange={handleChange("email")}
            isRequired
          />
          <Input
            variant="bordered"
            label="Password"
            name="password"
            type="password"
            value={values.password}
            isInvalid={!!errors.password}
            errorMessage={errors.password}
            onChange={handleChange("password")}
            isRequired
          />
        </div>

        <Button type="submit" variant="flat" color="primary">
          Login
        </Button>
      </form>

      <div className="font-light text-slate-400 mt-4 text-sm">
        Don&apos;t have an account ?{" "}
        <Link href="/register" className="font-bold">
          Register here
        </Link>
      </div>
    </>
  );
};
