/** @type {import('next').NextConfig} */
const base_url = process.env.NEXT_PUBLIC_API_ENDPOINT;
const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: base_url + ":path*",
      },
    ];
  },
};

export default nextConfig;
