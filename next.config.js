/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static HTML export
  webpack: (config, { isServer }) => config,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Optionally, enforce trailing slashes if needed:
  // exportTrailingSlash: true,
};

module.exports = nextConfig;
