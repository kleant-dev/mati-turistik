import Link from "next/link";

type BackLinkProps = {
  label: string;
  href: string;
};

export const BackLink = ({ label, href }: BackLinkProps) => {
  return <Link href={href}>{label}</Link>;
};
