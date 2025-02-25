import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { OAuthProviders } from "./oauth-providers";
import { BackLink } from "./back-link";

type CardWrapperProps = {
  children: React.ReactNode;
  backLinkHref?: string;
  backLinkLabel?: string;
  headerLabel: string;
  showOAuth?: boolean;
  showBackLink?: boolean;
};

const CardWrapper = ({
  children,
  backLinkHref,
  backLinkLabel,
  headerLabel,
  showOAuth,
  showBackLink,
}: CardWrapperProps) => {
  return (
    <div className="flex flex-col items-center py-16 px-6  bg-bgColor ">
      <div className="max-w-[440px] w-full">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              {headerLabel}
            </CardTitle>
          </CardHeader>
          <CardContent>{children}</CardContent>
          {showOAuth && (
            <CardFooter>
              <OAuthProviders />
            </CardFooter>
          )}
          {showBackLink && (
            <CardFooter className="flex justify-center text-sm text-black/70 underline underline-offset-2">
              <BackLink
                label={backLinkLabel || "Please provide a label"}
                href={backLinkHref || "Please provide a link"}
              />
            </CardFooter>
          )}
        </Card>
      </div>
    </div>
  );
};

export { CardWrapper };
