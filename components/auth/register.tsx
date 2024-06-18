"use client";

import { createAuthCookie } from "@/actions/auth.action";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

export const Register = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = useCallback(async () => {
    // Validation step for create user here with Formik (for example)
    await createAuthCookie();
    router.replace("/");
  }, [router]);

  return (
    <>
      <div className='text-center text-[25px] font-bold mb-6'>Register</div>

      <div className='flex flex-col w-1/2 gap-4 mb-4'>
        <Input
          variant='bordered'
          label='Name'
          type='email'
          onChange={(event) => setName(event.target.value)}
        />
        <Input
          variant='bordered'
          label='Email'
          type='email'
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          variant='bordered'
          label='Password'
          type='password'
          onChange={(event) => setPassword(event.target.value)}
        />
        <Input
          variant='bordered'
          label='Confirm password'
          type='password'
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
      </div>

      <Button onPress={handleRegister} variant='flat' color='primary'>
        Register
      </Button>

      <div className='font-light text-slate-400 mt-4 text-sm'>
        Already have an account ?{" "}
        <Link href='/login' className='font-bold'>
          Login here
        </Link>
      </div>
    </>
  );
};
