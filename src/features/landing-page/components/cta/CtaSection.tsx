import { LucideArrowBigRightDash, LucideBadgeCheck } from "lucide-react";
import Image from "next/image";
import CtaGlowingButton from "./CtaGlowingButton";

export const CtaSection = () => {
  return (
    <section
      id="cta"
      className="w-full relative bg-bgColor pt-[82px] pb-[82px] px-6 p flex flex-col gap-10"
    >
      <div className="relative inline-block">
        <h2 className="text-2xl text-center text-white font-bold ">
          Pse të na Zgjidhni Ne?
        </h2>
        <svg
          className="absolute -bottom-5 left-0 w-full h-6"
          viewBox="0 0 300 30"
          preserveAspectRatio="none"
        >
          <path
            d="M0,15 
             C20,5 50,25 80,15 
             C110,5 140,25 170,15 
             C200,5 230,25 260,15 
             Q280,10 300,15 
"
            stroke="#ec4899"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <ul className="flex flex-col gap-4 md:text-lg">
        <li className="flex items-start gap-2">
          <LucideBadgeCheck className="stroke-green-400 " />
          <p className="text-white ">
            Udhërrëfyes lokalë me njohuri të thella për rajonin.
          </p>
        </li>
        <li className="flex items-start gap-2">
          <LucideBadgeCheck className="stroke-green-400 " />
          <p className="text-white">
            Eksperienca e personalizuar për çdo vizitor.
          </p>
        </li>
        <li className="flex items-start gap-2">
          <LucideBadgeCheck className="stroke-green-400 " />
          <p className="text-white">
            Udhërrëfyes lokalë me njohuri të thella për rajonin.
          </p>
        </li>
      </ul>
      <div className="absolute right-4 bottom-0 top-0 mt-[280px] flex gap-2">
        <Image
          src="/o2.svg"
          alt="icon"
          width={44}
          height={78}
          className="opacity-40 rotate-180"
        />
        <Image
          src="/o1.svg"
          alt="icon"
          width={44}
          height={78}
          className="opacity-40 translate-y-8"
        />
      </div>
      <div className="w-full bg-bgColor pt-[32px] flex flex-col gap-10">
        <h2 className="text-gold text-lg">Çfarë po prisni?</h2>
        <ul className="flex flex-col gap-4 md:text-lg">
          <li className="flex items-start gap-2">
            <LucideArrowBigRightDash className="stroke-gold " />
            <p className="text-white ">
              Eksploroni fshatrat tradicionale me pamje spektakolare.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <LucideArrowBigRightDash className="stroke-gold " />
            <p className="text-white">
              Shijoni kuzhinën lokale me speca të freskëta dhe produkte
              organike.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <LucideArrowBigRightDash className="stroke-gold " />
            <p className="text-white">
              Hidhini një sy historisë së lashtë nëpër kalatë dhe monumentet
              kulturore.
            </p>
          </li>
        </ul>
      </div>
      <CtaGlowingButton>Rezervoni tani</CtaGlowingButton>
    </section>
  );
};
