import { LucideSettings, LucideUser } from "lucide-react";
import { auth } from "@/auth";
import { LogoutForm } from "./logout-form";

export const Profile = async () => {
  const session = await auth();
  const name = session?.user.name;
  const email = session?.user.email;
  const isAdmin = session?.user.role === "ADMIN";
  return (
    <div className="flex flex-col gap-6 items-center py-10">
      {!isAdmin && <LucideUser className="w-24 h-24 stroke-white" />}
      {isAdmin && <LucideSettings className="w-24 h-24 stroke-white" />}
      <p className="text-2xl text-purple">{name}</p>
      <p className="text-white">{email}</p>
      <LogoutForm />
    </div>
  );
};
