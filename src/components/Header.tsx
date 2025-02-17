import Link from "next/link";
import { LucideMap, LucideCloudSun, LucideHome } from "lucide-react";

const Header = () => {
  return (
    <header className="h-[70px] sticky  w-full top-[0] z-[9999999999] flex items-center justify-between bg-bgColor px-[22px]">
      <Link href="/">
        <span className="font-sirin text-4xl text-purple">EXPLORE MATI</span>
      </Link>
      <div className="hidden md:inline relative">
        <LucideHome stroke="white" className="" />
        <Link
          href="/"
          className="absolute inset-0 top-[-20px] left-[-20px] p-8"
        ></Link>
      </div>
      <div className="flex gap-4 md:gap-10 md:pr-10">
        <Link href="/harta">
          <LucideMap className="stroke-purple h-8 w-8 md:hidden" />
          <p className="hidden md:inline font-bold text-white border-b border-transparent hover:border-white transition-all">
            Harta Turistike
          </p>
        </Link>
        <Link href="/moti">
          <LucideCloudSun className="stroke-purple h-8 w-8 md:hidden" />
          <p className="hidden md:inline font-bold text-white border-b border-transparent hover:border-white transition-all">
            Moti
          </p>
        </Link>
      </div>
    </header>
  );
};

export { Header };
