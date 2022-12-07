/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://next-vercel-gamma-three.vercel.app/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
