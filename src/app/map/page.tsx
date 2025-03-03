"use client";
import dynamic from "next/dynamic";

const Map = dynamic(
  () => import("@/features/map/components/map").then((mod) => mod.Map),
  { ssr: false }
);

const MapPage = () => {
  return (
    <div className="bg-bgColor py-4 h-full">
      <h1 className="text-center text-xl text-gold py-6 font-semibold">
        Tourist Map of Mat
      </h1>
      <div className="h-[100vh] px-2 pt-8 w-full flex flex-col items-center justify-center">
        <div className="w-[100%] md:w-[80%]">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default MapPage;
