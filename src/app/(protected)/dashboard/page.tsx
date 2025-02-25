import { AdminSettings } from "@/features/admin-dashboard/components/admin-settings";
import { Dashboard } from "@/features/admin-dashboard/components/dashboard";
import { RevenueChart } from "@/features/admin-dashboard/components/revenue-chart";
import { Totals } from "@/features/admin-dashboard/components/totals";
import { db } from "@/lib/prisma";
import { BookingStatus } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

export type BookingWithUser = {
  User: {
    name: string | null;
    email: string;
  } | null;
  startDate: Date;
  id: string;
  endDate: Date;
  regTime: Date;
  numberOfPersons: number;
  telephone: string;
  additionalMessage: string | null;
  status: BookingStatus;
};

export type serializedSettings = {
  pricePerPerson: string;
  id: string;
  maxPersons: number;
  maxBookingDuration: number;
};

const DashboardPage = async () => {
  const bookingsWithUsers: (BookingWithUser & {
    totalPrice: Decimal;
  })[] = await db.bookings.findMany({
    select: {
      id: true,
      startDate: true,
      endDate: true,
      additionalMessage: true,
      numberOfPersons: true,
      telephone: true,
      totalPrice: true,
      regTime: true,
      status: true,
      User: {
        select: {
          name: true,
          email: true,
        },
      },
    },
    orderBy: {
      startDate: "asc",
    },
  });

  const settings = (await db.bookingSettings.findFirst())!;

  const serializedSettings = {
    ...settings,
    pricePerPerson: settings.pricePerPerson.toString(),
  };
  const serializedBookings = bookingsWithUsers.map((booking) => ({
    ...booking,
    totalPrice: booking.totalPrice.toString(),
  }));
  return (
    <div className="px-10 py-10 ">
      <div className=" flex flex-col md:flex-row gap-10">
        <RevenueChart />
        <div className="flex flex-1 justify-center">
          <div className="flex flex-col gap-10">
            <Totals bookings={serializedBookings} />
            <AdminSettings settings={serializedSettings} />
          </div>
        </div>
      </div>
      <Dashboard bookingsWithUsers={serializedBookings} />
    </div>
  );
};

export default DashboardPage;
