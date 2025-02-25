import { LucideCheckCircle } from "lucide-react";

export const FormSuccess = ({ success }: { success?: string }) => {
  if (!success) return null;
  return (
    <p className="text-sm text-green-600 flex gap-1 items-center">
      <LucideCheckCircle className="w-4 h-4 stroke-green-600" />
      {success}
    </p>
  );
};
