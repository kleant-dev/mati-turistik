"use client";
import { Button } from "@/components/ui/button";
import { LucideLoaderCircle } from "lucide-react";
import { useFormStatus } from "react-dom";

export const LogoutButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit">
      {pending ? <LucideLoaderCircle className="animate-spin" /> : "Logout"}
    </Button>
  );
};
