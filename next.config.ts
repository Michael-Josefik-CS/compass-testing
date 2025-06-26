import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.contentstack.io'],
  },
  // you can add other config options here
};

export default withNextVideo(nextConfig);