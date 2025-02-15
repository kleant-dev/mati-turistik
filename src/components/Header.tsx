import Link from "next/link";
import { LucideMap, LucideCloudSun } from "lucide-react";

const Header = () => {
  return (
    <header className="h-[70px] flex items-center justify-between bg-bgColor px-[22px]">
      <Link href="/">
        <span className="font-sirin text-4xl text-purple">MATI TURISTIK</span>
      </Link>
      <div className="flex gap-4">
        <Link href="/harta">
          <LucideMap className="stroke-purple h-8 w-8" />
        </Link>
        <Link href="/moti">
          <LucideCloudSun className="stroke-purple h-8 w-8" />
        </Link>
      </div>
    </header>
  );
};

export { Header };
