/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.intra.piletilevi.ee",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};
