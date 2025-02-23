import { CardWrapper } from "@/features/auth/components/CardWrapper";
import { ReservationForm } from "@/features/reservations/components/ReservationForm";

const NewReservation = () => {
  return (
    <div className="h-full">
      <CardWrapper
        backLinkHref="/auth/register"
        backLinkLabel="Don't have an account ? Register"
        headerLabel="Make a new reservation"
        showBackLink={false}
      >
        <ReservationForm />
      </CardWrapper>
    </div>
  );
};

export default NewReservation;
