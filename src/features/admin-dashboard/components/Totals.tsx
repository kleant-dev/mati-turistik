import { formatEUR } from "@/utils/formatEUR";

export const Totals = () => {
  return (
    <div className="flex flex-col gap-2">
      <p>Total revenue this month: {formatEUR(14375)}</p>
      <p>Total customers: 654 persons</p>
    </div>
  );
};
