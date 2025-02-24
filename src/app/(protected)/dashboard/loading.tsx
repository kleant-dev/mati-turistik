import { LucideLoaderCircle } from "lucide-react";

const LoadingDashboard = () => {
  return (
    <div className="flex flex-col flex-1 w-full h-full items-center justify-center">
      <LucideLoaderCircle className="animate-spin w-[100px] h-[100px]" />
    </div>
  );
};

export default LoadingDashboard;
