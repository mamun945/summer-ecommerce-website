 'use client'
import { authClient } from "@/lib/auth-client";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";

const SignUpPage = () => {
  const submit = async(e)=>{
    e.preventDefault();
    const name = e.target.name.value;
    const image= e.target.image.value;
    const email= e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signUp.email({
        name:name, // required
        email:email, // required
        password:password, // required
        image:image,
        callbackURL: "/",
    });
   if(!error){
    alert('signup successful!');
   }
   if(error){
    alert(error.message)
   }
   
  }
  return (
    <div className='cotainer mx-auto shadow-md rounded-lg p-4 flex flex-col justify-center items-center'>
      <h1 className="text-xl font-bold text-center my-2">SignUp</h1>
        <Form className="flex border md:w-96 flex-col gap-4 p-4 rounded-lg" onSubmit={submit}>
       <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label>Name</Label>
            <Input placeholder="Write name" />
            <FieldError />
          </TextField>
        
         <TextField
            isRequired
            name="image"
          >
            <Label>Image Url</Label>
            <Input placeholder="image url" />
            <FieldError />
          </TextField>

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
        <button type="submit" className="btn bg-orange-500 w-full rounded-full text-white">SignUp</button>
      </div>
    </Form>
      <p className="text-center text-lg opacity-[50%]">or</p>
       <button className="btn btn-outline bg-blue-400 text-white rounded-full">SignIn With Google</button>
    </div>
  )
}

export default SignUpPage;
