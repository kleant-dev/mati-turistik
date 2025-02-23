"use client";
import { logout } from "../actions/logout";
import { LogoutButton } from "./LogoutButton";

export const LogoutForm = () => {
  return (
    <form action={logout}>
      <LogoutButton />
    </form>
  );
};
