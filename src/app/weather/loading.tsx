"use client";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

const LoadingWeather = () => {
  return (
    <div className="h-lvh bg-[#60B4E2] flex items-center w-full justify-center ">
      <div className="mb-[200px]">
        <LoadingSpinner />
      </div>
    </div>
  );
};

export default LoadingWeather;
