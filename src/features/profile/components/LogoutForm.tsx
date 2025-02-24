"use client";
import { logout } from "../actions/logout";
import { ActionButton } from "./ActionButton";

export const LogoutForm = () => {
  return (
    <form action={logout}>
      <ActionButton>Logout</ActionButton>
    </form>
  );
};
