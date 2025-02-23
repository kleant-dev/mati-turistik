import { db } from "@/lib/prisma";

export const dynamic = "force-static";

export async function GET() {
  try {
    const data = await db.reservationSettings.findFirst();

    if (!data) {
      return Response.json(
        { error: "Reservation settings not found" },
        { status: 404 }
      );
    }

    // Convert Decimal to string for safe JSON serialization
    const serializedData = {
      ...data,
      pricePerPerson: data.pricePerPerson
        ? data.pricePerPerson.toString()
        : null,
    };

    return Response.json({ data: serializedData });
  } catch {
    console.error("Error in GET /api/reservation-settings:");
    return Response.json(
      { error: "Error fetching reservation settings" },
      { status: 500 }
    );
  }
}
