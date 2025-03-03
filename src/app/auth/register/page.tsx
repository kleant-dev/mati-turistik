import { CardWrapper } from "@/features/auth/components/card-wrapper";
import { RegisterForm } from "@/features/auth/components/register-form";

const Register = () => {
  return (
    <div className="min-h-full">
      <CardWrapper
        backLinkHref="/auth/login"
        backLinkLabel="Already have an account ? Login"
        headerLabel="Register"
        showOAuth={true}
        showBackLink={true}
      >
        <RegisterForm />
      </CardWrapper>
    </div>
  );
};

export default Register;
