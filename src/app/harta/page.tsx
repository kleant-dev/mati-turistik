"use client";
import dynamic from "next/dynamic";

const Map = dynamic(
  () => import("@/features/map/components/Map").then((mod) => mod.Map),
  { ssr: false }
);

const MapPage = () => {
  return (
    <div className="bg-bgColor">
      <h1 className="text-center text-xl text-gold pt-4 font-semibold">
        Harta turistike e Matit
      </h1>
      <div className="px-2 pt-8   overflow-hidden">
        <div className="h-[100vh] w-full">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default MapPage;
