import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns: [
      {
        hostname: "127.0.0.1",
        protocol: "http"
      }
    ]
  }
};

export default nextConfig;
