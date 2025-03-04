import Image from "next/image";
import Link from "next/link";
export const Footer = () => {
  return (
    <footer className="pt-[20px] bg-bgColor border-t-2 justify-self-end">
      <div className="  text-white/70 text-sm flex justify-between px-8 py-4 items-end">
        <div className="flex flex-col items-center gap-2">
          <Image
            src="/logo.svg"
            alt="logo"
            className="h-auto"
            height={50}
            width={50}
          />
          <p className="text-purple">EXPLORE MATI</p>
        </div>
        <div className="flex flex-col gap-2 ">
          <Link href="/#destinations">Destinations</Link>
          <Link href="/#experiences">Experiences</Link>
          <Link href="/#testimonials">Testimonials</Link>
        </div>
        <div className="flex flex-col gap-2 ">
          <Link href="/map">Tourist Map</Link>
          <Link href="/weather">
            <p>Weather</p>
          </Link>
          <Link href="https://wa.me/+355676774668">Contact</Link>
        </div>
      </div>
      <p className="text-center text-sm text-blue-400/60 pb-4 pt-4">
        Designed and developed by{" "}
        <Link
          className="underline underline-offset-2"
          href="https://wa.me/+355676774668"
        >
          Kleant Bajraktari
        </Link>{" "}
        &copy;
      </p>
    </footer>
  );
};
