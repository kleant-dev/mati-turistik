"use client";
import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PortalWrapperProps {
  children: ReactNode;
}

export const PortalWrapper = ({ children }: PortalWrapperProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? createPortal(children, document.body) : null;
};
