import { auth } from "@/auth";
import { Profile } from "@/features/profile/components/Profile";
import { UserReservations } from "@/features/profile/components/UserReservation";
import { db } from "@/lib/prisma";

const ProfilePage = async () => {
  const session = await auth();
  const userId = session?.user.id;
  const userReservations = await db.reservations.findMany({
    where: {
      userId,
      status: "IN_PROGRESS",
    },
    orderBy: {
      regTime: "desc",
    },
  });
  return (
    <div className="py-10">
      <Profile />
      <UserReservations data={userReservations} />
    </div>
  );
};

export default ProfilePage;
