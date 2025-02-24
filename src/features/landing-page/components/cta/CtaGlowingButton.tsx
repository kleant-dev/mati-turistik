import { Button, ButtonProps } from "@/components/ui/button"; // Adjust the import based on your project structure
import { LucideArrowRight } from "lucide-react";
import Link from "next/link";
import { RefAttributes } from "react";

type CtaGlowingButtonProps = {
  children: React.ReactNode;
  props?: ButtonProps & RefAttributes<HTMLButtonElement>;
};

const CtaGlowingButton = ({ children, ...props }: CtaGlowingButtonProps) => {
  return (
    <div className="relative inline-block">
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "0.5rem",
          boxShadow: "0 0 20px 5px rgba(245, 158, 11, 0.7)",
          animation: "glow 2s infinite alternate",
        }}
      ></div>
      <Button
        variant="link"
        asChild
        size="lg"
        className="text-black font-bold text-lg ring-4 ring-gold relative z-10 bg-[#ddd] hover:bg-gray-100 w-full"
        {...props}
      >
        <Link
          className="flex items-center gap-2 border"
          href="/new-reservation"
        >
          <p className="flex items-center gap-2 md:text-xl text-teal-600">
            {children} <LucideArrowRight className="mb-[-2px]" />
          </p>
        </Link>
      </Button>

      {/* Define the animation in a <style> tag outside JSX */}
      <style>
        {`
          @keyframes glow {
            0% {
              box-shadow: 0 0 20px 5px rgba(245, 158, 11, 0.7);
            }
            100% {
              box-shadow: 0 0 30px 10px rgba(245, 158, 11, 0.9);
            }
          }
        `}
      </style>
    </div>
  );
};

export default CtaGlowingButton;
