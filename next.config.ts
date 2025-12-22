import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "santic.netlify.app",
        pathname: "/assets/**",
      },
    ],
  },
};

export default nextConfig;
