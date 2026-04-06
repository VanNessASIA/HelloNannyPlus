/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "api.dicebear.com" },
      { protocol: "https", hostname: "www.trustmarkthai.com" },
      { protocol: "https", hostname: "dbdregistered.dbd.go.th" },
    ],
  },
};

export default nextConfig;
