import { LucideTriangleAlert } from "lucide-react";

export const FormError = ({ error }: { error?: string }) => {
  if (!error) return null;
  return (
    <p className="text-sm text-red-600 flex gap-1 items-center">
      <LucideTriangleAlert className="w-4 h-4 stroke-red-600" />
      {error}
    </p>
  );
};
