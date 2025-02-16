import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rodrigokamada.github.io",
        port: "",
        pathname: "/openweathermap/images/**", // Allow all images under this path
      },
    ],
  },
};

export default nextConfig;
