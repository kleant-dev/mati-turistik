"use client";

import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/sonner";
import { LucideCircleCheck, LucideCircleX } from "lucide-react";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      {children}
      <Toaster
        icons={{
          error: <LucideCircleX className="stroke-red-400 w-5 h-5" />,
          success: <LucideCircleCheck className="stroke-green-400 w-5 h-5" />,
        }}
      />
    </SessionProvider>
  );
}
