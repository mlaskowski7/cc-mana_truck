import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/cc-mana_truck',
  assetPrefix: '/cc-mana_truck'
};

export default nextConfig;
