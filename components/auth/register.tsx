"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Input } from "@heroui/react";

import { createAuthCookie } from "@/actions/auth.action";
import { RegisterSchema } from "@/helpers/schemas";
import { RegisterFormType } from "@/helpers/types";

export const Register = () => {
  const router = useRouter();

  // Initial values for the form fields.
  const [values, setValues] = useState<RegisterFormType>({
    name: "Acme",
    email: "admin@acme.com",
    password: "admin",
    confirmPassword: "admin",
  });

  // Object to store any validation errors.
  const [errors, setErrors] = useState<Partial<Record<keyof RegisterFormType, string>>>({});

  // This function will be called after successful validation.
  const handleRegister = useCallback(
    async (formValues: RegisterFormType) => {
      // values contains name, email, password, confirmPassword
      await createAuthCookie();
      router.replace("/");
    },
    [router]
  );

  // Handle form submission.
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Validate all fields against your schema.
      await RegisterSchema.validate(values, { abortEarly: false });
      setErrors({});
      await handleRegister(values);
    } catch (validationError: any) {
      // Map validation errors to a simple object.
      if (validationError.inner) {
        const formErrors: Partial<Record<keyof RegisterFormType, string>> = {};
        validationError.inner.forEach((error: any) => {
          if (error.path) {
            formErrors[error.path as keyof RegisterFormType] = error.message;
          }
        });
        setErrors(formErrors);
      }
    }
  };

  // Update state when input values change.
  const handleChange = (field: keyof RegisterFormType) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [field]: e.target.value });
  };

  return (
    <>
      <div className="text-center text-[25px] font-bold mb-6">Register</div>

      {/* The form element using HeroUI components */}
      <form onSubmit={handleSubmit} className="flex flex-col w-full items-center">
        <div className="flex flex-col w-1/2 gap-4 mb-4">
          <Input
            variant="bordered"
            label="Name"
            name="name"
            value={values.name}
            isInvalid={!!errors.name}
            errorMessage={errors.name}
            onChange={handleChange("name")}
            isRequired
          />
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
            minLength={4}
          />
          <Input
            variant="bordered"
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={values.confirmPassword}
            isInvalid={!!errors.confirmPassword}
            errorMessage={errors.confirmPassword}
            onChange={handleChange("confirmPassword")}
            isRequired
            minLength={4}
          />
        </div>

        <Button type="submit" variant="flat" color="primary">
          Register
        </Button>
      </form>

      <div className="font-light text-slate-400 mt-4 text-sm">
        Already have an account?{" "}
        <Link href="/login" className="font-bold">
          Login here
        </Link>
      </div>
    </>
  );
};
