"use client";
import { Button, ButtonProps } from "@/components/ui/button";
import { LucideLoaderCircle } from "lucide-react";
import { useFormStatus } from "react-dom";

export const ActionButton: React.FC<ButtonProps> = ({
  children,
  ...props
}: {
  children?: React.ReactNode;
  props?: ButtonProps;
}) => {
  const { pending } = useFormStatus();
  return (
    <Button {...props} disabled={pending} type="submit">
      {pending ? <LucideLoaderCircle className="animate-spin" /> : children}
    </Button>
  );
};
