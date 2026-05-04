/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', 
  images: {
    remotePatterns: [], 
  }
  // Removed the experimental block
};

module.exports = nextConfig;
