"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  LucideCircleFadingPlus,
  LucideCloudSun,
  LucideHome,
  LucideLayoutDashboard,
  LucideLogIn,
  LucideMap,
  LucideMenu,
  LucideUser,
  LucideX,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useSession } from "next-auth/react";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, status } = useSession();
  const isLoggedIn = status === "authenticated";
  const isAdmin = data?.user.role;
  const closeMenu = () => setIsOpen(false);
  return (
    <div className="md:hidden relative z-[999999999999999999999]">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <LucideMenu className="stroke-purple" />
        </SheetTrigger>
        <SheetContent className="bg-bgColor w-[270px] flex flex-col gap-10">
          <SheetHeader>
            <SheetTitle className="text-purple">Explore Mati</SheetTitle>
          </SheetHeader>
          <SheetClose className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <LucideX className="stroke-purple w-6 h-6" />
          </SheetClose>
          <nav>
            <ul className="flex flex-col gap-8 md:gap-10 md:pr-10">
              <li className="flex gap-2 items-center">
                <LucideHome className="stroke-purple h-7 w-7 md:hidden" />
                <Link href="/" onClick={closeMenu}>
                  <p className=" text-xl font-bold text-white border-b border-transparent hover:border-white transition-all">
                    Home
                  </p>
                </Link>
              </li>
              <li className="flex gap-2 items-center">
                <LucideMap className="stroke-purple h-7 w-7 md:hidden" />
                <Link href="/harta" onClick={closeMenu}>
                  <p className=" text-xl font-bold text-white border-b border-transparent hover:border-white transition-all">
                    Tourist Map
                  </p>
                </Link>
              </li>
              <li className="flex gap-2 items-center">
                <LucideCloudSun className="stroke-purple h-7 w-7 md:hidden" />
                <Link href="/moti" onClick={closeMenu}>
                  <p className=" text-xl font-bold text-white border-b border-transparent hover:border-white transition-all">
                    Weather
                  </p>
                </Link>
              </li>
              <li className="flex gap-2 items-center">
                <LucideCircleFadingPlus className="stroke-purple h-7 w-7 md:hidden" />
                <Link href="/new-reservation" onClick={closeMenu}>
                  <p className=" text-xl font-bold text-white border-b border-transparent hover:border-white transition-all">
                    New reservation
                  </p>
                </Link>
              </li>
              {isAdmin && (
                <li className="flex gap-2 items-center">
                  <LucideLayoutDashboard className="stroke-purple h-7 w-7 md:hidden" />
                  <Link href="/dashboard" onClick={closeMenu}>
                    <p className=" text-xl font-bold text-white border-b border-transparent hover:border-white transition-all">
                      Dashboard
                    </p>
                  </Link>
                </li>
              )}
              {isLoggedIn ? (
                <li className="flex gap-2 items-center">
                  <LucideUser className="stroke-purple h-7 w-7 md:hidden" />
                  <Link href="/profile" onClick={closeMenu}>
                    <p className=" text-xl font-bold text-white border-b border-transparent hover:border-white transition-all">
                      {data.user.name}
                    </p>
                  </Link>
                </li>
              ) : (
                <li className="flex gap-2 items-center">
                  <LucideLogIn className="stroke-purple h-7 w-7 md:hidden" />
                  <Link href="/auth/login" onClick={closeMenu}>
                    <p className=" text-xl font-bold text-white border-b border-transparent hover:border-white transition-all">
                      Login
                    </p>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};
