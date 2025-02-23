import { FcGoogle } from "react-icons/fc";
import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
export const OAuthProviders = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", {
          redirectTo: DEFAULT_LOGIN_REDIRECT,
        });
      }}
      className="w-full flex justify-between "
    >
      <Button
        variant="outline"
        className="border py-5 w-full rounded-md flex justify-center"
      >
        <FcGoogle className="!w-6 !h-6" />
      </Button>
    </form>
  );
};
