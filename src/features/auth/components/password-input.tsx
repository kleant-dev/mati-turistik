import { Input } from "@/components/ui/input";
import { LucideEye, LucideEyeClosed } from "lucide-react";
import { useState } from "react";

export const PasswordInput = ({
  disabled,
  ...field
}: {
  disabled: boolean;
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative">
      <Input
        disabled={disabled}
        type={showPassword ? "text" : "password"}
        placeholder="Your password goes here"
        {...field}
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-2"
      >
        {showPassword ? <LucideEye /> : <LucideEyeClosed />}
      </button>
    </div>
  );
};
