import { auth } from "@/auth";
import { Profile } from "@/features/profile/components/profile";
import { UserBookings } from "@/features/profile/components/user-bookings";
import { db } from "@/lib/prisma";

const ProfilePage = async () => {
  const session = await auth();
  const userId = session?.user.id;
  const userBookings = await db.bookings.findMany({
    where: {
      userId,
      status: "IN_PROGRESS",
    },
    orderBy: {
      regTime: "desc",
    },
  });
  return (
    <div className="py-10 min-h-full bg-bgColor">
      <Profile />
      <UserBookings data={userBookings} />
    </div>
  );
};

export default ProfilePage;
