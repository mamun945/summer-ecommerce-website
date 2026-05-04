"use client"
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import Link from "next/link";
import { BiEdit } from "react-icons/bi";

const ProfilePage = () => {
     const {data:session, isPending, error} = authClient.useSession();
      const user = session?.user;
  return (
    <div className="my-8">
      <Card className="max-w-80 mx-auto flex flex-col items-center border">
        <Avatar className="h-[100px] w-[100px]">
                <Avatar.Image 
                alt={user?.name} 
                src={user?.image} 
                referrerPolicy='no-referrer'
                />
                <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
              </Avatar>
              <h2 className="text-xl font-bold">{user?.name}</h2>
              <p className="text-muted">{user?.email}</p>
             <Link href={'/updateProfile'}>
             <button className="btn bg-orange-500"><BiEdit/> Update Profile</button>
             </Link>
      </Card>
    </div>
  )
}

export default ProfilePage;
