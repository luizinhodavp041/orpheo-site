import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // isso ignora o ESLint durante o build
  },
};

export default nextConfig;
