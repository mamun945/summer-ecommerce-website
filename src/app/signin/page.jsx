'use client'
import { authClient } from "@/lib/auth-client";
import {Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import Link from "next/link";
import { GrGoogle } from "react-icons/gr";
import { useSearchParams, useRouter } from "next/navigation";
import { toast } from "react-toastify";

const SignInPage = () => {
   const router = useRouter();
  const searchParams = useSearchParams();

  const from = searchParams.get("from") || "/";

    const submit=async(e)=>{
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;

      const { data, error } = await authClient.signIn.email({
            email:email, // required
            password:password, // required
            rememberMe: true,
        });

        if(!error){
         toast.success('login successfully!')
        const x = localStorage.getItem('r')
        if(x){
          router.push(`/products/${x}`)
          localStorage.removeItem(x)
        }else{
          router.push('/');
        }
        
          // router.push(from);
        
        }
        if(error){
         toast.error(error.message);
        }
    }

    const googleSignIn=async()=>{
        await authClient.signIn.social({
            provider:"google"
        })
    }
  return (
     <div className='cotainer mx-auto shadow-md rounded-lg p-4 flex flex-col justify-center items-center'>
          <h1 className="text-xl font-bold text-center my-2">SignIn</h1>
            <div className="">
              <Form className="flex border md:w-96 flex-col gap-4 p-4 rounded-lg" onSubmit={submit}>
    
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="Write email" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
            <FieldError />
          </TextField>
          <div className="">
            <button type="submit" className="btn bg-orange-500 w-full rounded-full text-white">Login</button>
          </div>
        </Form>
          <p className="text-center my-2">I don't have an account <Link href={'/signup'} className="text-orange-500">SignUp</Link></p>
          <div className="flex items-center gap-3 my-2">
            <div className="flex-1 border-t border-gray-300" />
            <span className="text-sm text-gray-500">or</span>
            <div className="flex-1 border-t border-gray-300" />
          </div>
           <button className="btn btn-outline bg-blue-400 w-full text-white rounded-full" onClick={googleSignIn}><GrGoogle/> SignIn With Google</button>
            </div>
        </div>
  )
}

export default SignInPage;
