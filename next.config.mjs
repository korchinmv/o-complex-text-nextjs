/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  experimental: {
    serverActions: true,
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "encrypted-tbn2.gstatic.com",
      },
    ],
  },
};

export default nextConfig;
