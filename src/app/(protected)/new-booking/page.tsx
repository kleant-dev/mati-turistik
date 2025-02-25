import { CardWrapper } from "@/features/auth/components/card-wrapper";
import { BookingForm } from "@/features/bookings/components/booking-form";

const NewBookingPage = () => {
  return (
    <div className="h-full">
      <CardWrapper
        backLinkHref="/auth/register"
        backLinkLabel="Don't have an account ? Register"
        headerLabel="Make a new booking"
        showBackLink={false}
      >
        <BookingForm />
      </CardWrapper>
    </div>
  );
};

export default NewBookingPage;
