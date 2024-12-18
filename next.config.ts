import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.parisschoolofeconomics.eu',
      },
      {
        protocol: 'https',
        hostname: 'media.wired.com',
      },
      {
        protocol: 'https',
        hostname: 'www.sciline.org',
      },
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
      },
      {
        protocol: 'https',
        hostname: 't3.ftcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/nature',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
