import { LucideUser } from "lucide-react";
import { auth } from "@/auth";
import Image from "next/image";
import { LogoutForm } from "./LogoutForm";

export const Profile = async () => {
  const session = await auth();
  const name = session?.user.name;
  const email = session?.user.email;
  const image = session?.user.image;
  const isAdmin = session?.user.role === "ADMIN";
  return (
    <div className="flex flex-col gap-6 items-center py-10">
      {!isAdmin && <LucideUser className="w-24 h-24" />}
      {isAdmin && <Image src={image!} width={150} height={150} alt="admin" />}
      <p className="text-2xl text-purple">{name}</p>
      <p>{email}</p>
      <LogoutForm />
    </div>
  );
};
