import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',          // <— REQUIRED for static export on modern Next
  images: { unoptimized: true }, // <— required because Image Optimization needs a server
  // Optional but often safer for static hosting:
  // trailingSlash: true,
};

export default nextConfig;
