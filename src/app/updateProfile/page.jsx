
"use client"
import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, TextField } from "@heroui/react";


const UpdateProfile = () => {
        const submit= async(e)=>{
                e.preventDefault();
                const name = e.target.name.value;
                const image = e.target.image.value;
                await authClient.updateUser({
                   image:image,
                   name:name
                })
            }
  return (
    <div className="max-w-[300px] border mx-auto mt-6 shadow-xl rounded-md p-4">
       <form className="flex flex-col gap-4 space-y-3" onSubmit={submit}>
                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="image" type="image url">
                    <Label>Image Url</Label>
                    <Input placeholder="image url" />
                  </TextField>
                    <button type="submit" className="btn text-white bg-orange-500">Save</button>
                    {/* <Button type="submit" slot="close">Save</Button> */}
                </form>
    </div>
  )
}

export default UpdateProfile;
