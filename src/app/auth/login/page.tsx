import { CardWrapper } from "@/features/auth/components/card-wrapper";
import { LoginForm } from "@/features/auth/components/login-form";

const Login = () => {
  return (
    <div className="min-h-full">
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
