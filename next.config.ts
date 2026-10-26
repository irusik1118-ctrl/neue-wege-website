import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      {
        source: '/uk',
        destination: '/ua',
        permanent: true,
      },
      {
        source: '/uk/:path*',
        destination: '/ua/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
