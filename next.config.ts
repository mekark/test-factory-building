import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Finer width steps so phones get an image close to the displayed size.
    deviceSizes: [360, 414, 480, 560, 640, 750, 828, 1080, 1200, 1920],
    qualities: [60, 75],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
