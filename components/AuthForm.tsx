"use client"

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod'
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'sonner';

interface AuthFormProps {
  type?: "sign-in" | "sign-up";
}

const authFormSchema = ({type}:AuthFormProps) => {
  return z.object({
    name: type === "sign-up" ? z.string().min(3, "Name is at least 3 characters") : z.string().optional(),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 character's")
  })

}

const AuthForm = ({ type }: AuthFormProps) => {
  const formSchema = authFormSchema({type});
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (type === "sign-up"){
        console.log("Sign Up", values);
      }else{
        console.log("Sign In", values);
      }
    }catch (error) {
      toast.error(`An error occurred while submitting the form.${error}`);
    }
  }

  const isSignIn = type === "sign-in";
  return (
    <div className='card-border lg:min-ww[566px]'>
      <div className='flex flex-col gap-6 py-14 px-10'>
        <div className='flex flex-row gap-2 justify-center'>
          <Image alt='Logo' src="/logo.png" height={32} width={38}/>
          <h2 className='text-primary-100'>VivaBit</h2>
        </div>
        <h3>Practice job interview with AI</h3>
      
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full mt-4 form">
            {!isSignIn && <p>Name</p>}
            <p>Email</p>
            <p>Password</p>
            <Button className='btn' type="submit">{isSignIn ? 'Sign In':'Create an account'}</Button>
          </form>
        </Form>
        <p className='text-center'>
          {isSignIn ? "Don't have an account?" : "Already have an account?"}
          <Link href={!isSignIn ? '/sign-in':'/sign-up'} className='font-bold text-user-primary ml-1'>{!isSignIn ? "Sign in":"Sign up"}</Link>
        </p>
      </div>
    </div>
  );
}

export default AuthForm;