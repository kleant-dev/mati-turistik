import { Button, ButtonProps } from "@/components/ui/button"; // Adjust the import based on your project structure
import { LucideArrowRight } from "lucide-react";
import { RefAttributes } from "react";

type GlowingButtonProps = {
  cta?: boolean;
  children: React.ReactNode;
  props?: ButtonProps & RefAttributes<HTMLButtonElement>;
};

const GlowingButton = ({ cta, children, ...props }: GlowingButtonProps) => {
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
        size="lg"
        className="text-black font-bold text-lg ring-4 ring-gold relative z-10 bg-white hover:bg-gray-100 w-full"
        {...props}
      >
        {children} {cta && <LucideArrowRight className="mb-[-2px]" />}
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

export default GlowingButton;
