import Link from "next/link";
import { DesktopMenu } from "./desktop-menu";
import { MobileMenu } from "./mobile-menu";

const Header = () => {
  return (
    <header className="py-4 sticky w-full top-0 z-[8999] flex items-center justify-between bg-bgColor px-[22px]">
      <Link href="/">
        <span className="font-sirin text-4xl text-purple">EXPLORE MATI</span>
      </Link>
      <DesktopMenu />
      <MobileMenu />
    </header>
  );
};

export { Header };
