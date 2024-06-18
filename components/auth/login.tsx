"use client";

import { createAuthCookie } from "@/actions/auth.action";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

export const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = useCallback(async () => {
    // Validation step of email / password here with Formik (for example)
    await createAuthCookie();
    router.replace("/");
  }, [router]);

  return (
    <>
      <div className='text-center text-[25px] font-bold mb-6'>Login</div>

      <div className='flex flex-col w-1/2 gap-4 mb-4'>
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
      </div>

      <Button onPress={handleLogin} variant='flat' color='primary'>
        Login
      </Button>

      <div className='font-light text-slate-400 mt-4 text-sm'>
        Don&apos;t have an account ?{" "}
        <Link href='/register' className='font-bold'>
          Register here
        </Link>
      </div>
    </>
  );
};
