import { CardWrapper } from "@/features/auth/components/CardWrapper";
import { LoginForm } from "@/features/auth/components/LoginForm";

const Login = () => {
  return (
    <div className="h-full">
      <CardWrapper
        backLinkHref="/auth/register"
        backLinkLabel="Don't have an account ? Register"
        headerLabel="Login"
        showOAuth={true}
        showBackLink={true}
      >
        <LoginForm />
      </CardWrapper>
    </div>
  );
};

export default Login;
