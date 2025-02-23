import { auth } from "@/auth";
import Link from "next/link";

export const DesktopMenu = async () => {
  const session = await auth();
  const isLoggedIn = !!session?.user;
  const isAdmin = session?.user.role === "ADMIN";
  return (
    <nav>
      <ul className="flex gap-4 md:gap-10 md:pr-10">
        <li>
          <Link href="/">
            <p className="hidden md:inline font-bold text-white border-b border-transparent hover:border-white transition-all">
              Home
            </p>
          </Link>
        </li>
        <li>
          <Link href="/harta">
            <p className="hidden md:inline font-bold text-white border-b border-transparent hover:border-white transition-all">
              Tourist Map
            </p>
          </Link>
        </li>
        <li>
          <Link href="/moti">
            <p className="hidden md:inline font-bold text-white border-b border-transparent hover:border-white transition-all">
              Weather
            </p>
          </Link>
        </li>
        <li>
          <Link href="/new-reservation">
            <p className="hidden md:inline font-bold text-white border-b border-transparent hover:border-white transition-all">
              New Reservation
            </p>
          </Link>
        </li>
        {isAdmin && (
          <li className="flex gap-2 items-center">
            <Link href="/dashboard" prefetch>
              <p className=" hidden md:inline font-bold text-blue-400 border-b border-transparent hover:border-white transition-all">
                Dashboard
              </p>
            </Link>
          </li>
        )}
        {isLoggedIn ? (
          <li className="flex gap-2 items-center">
            <Link href="/profile">
              <p className="hidden md:inline  font-bold text-white border-b border-transparent hover:border-white transition-all">
                {session.user.name}
              </p>
            </Link>
          </li>
        ) : (
          <li className="flex gap-2 items-center">
            <Link href="/auth/login">
              <p className=" hidden md:inline font-bold text-white border-b border-transparent hover:border-white transition-all">
                Login
              </p>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
