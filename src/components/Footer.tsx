import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="pt-[20px] bg-bgColor border-t-2">
      <div className="  text-white/70 text-sm flex justify-between px-8 py-4 items-end">
        <div className="flex flex-col items-center gap-2">
          <Image src="/logo.svg" alt="logo" height={50} width={50} />
          <p className="text-purple">EXPLORE MATI</p>
        </div>
        <div className="flex flex-col gap-2 ">
          <Link href="/#destinations">Destinacione</Link>
          <Link href="/#experiences">Eksperienca</Link>
          <Link href="/#testimonials">Deshmite e klienteve</Link>
        </div>
        <div className="flex flex-col gap-2 ">
          <Link href="/harta">Harta turistike</Link>
          <Link href="/moti">
            <p>Moti</p>
          </Link>
          <Link href="https://wa.me/+355676774668">Kontakti</Link>
        </div>
      </div>
      <p className="text-center text-sm text-blue-400/60 pb-4 pt-4">
        Dizenjoi dhe zhvilloi Kleant Bajraktari &copy;
      </p>
    </footer>
  );
};
