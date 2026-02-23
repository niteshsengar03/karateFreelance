import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["example.com"], // Add your image source domain here
    // Allow local images (from `public/`) to be used with query strings
    // e.g. "/home_image.jpg?height=1080&width=1920"
    localPatterns: [
      {
        // match any pathname in the public folder
        pathname: '/:path*',
      },
      {
        // explicit match for root-level assets like `/logo.jpg`
        pathname: '/logo.jpg',
      },
      {
        // match any image under `/images/` as an extra allowance
        pathname: '/images/:path*',
      },
    ],
    // disable optimization in dev to avoid strict validation issues
    unoptimized: true,
  },
};

export default nextConfig;
