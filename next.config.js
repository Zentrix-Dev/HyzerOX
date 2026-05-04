/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Critical for Docker/Cloudflare flexibility
  images: {
    remotePatterns: [], // Add remote CDNs here if needed
  },
  experimental: {
    optimizeCss: true,
  }
};

module.exports = nextConfig;
