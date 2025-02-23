import { CardWrapper } from "@/features/auth/components/CardWrapper";
import { RegisterForm } from "@/features/auth/components/RegisterForm";

const Register = () => {
  return (
    <div>
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
