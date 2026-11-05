import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Every `quality` prop used must appear here, or Next silently coerces it
    // to the nearest entry and warns only in dev.
    qualities: [75],
    // The hero asset is effectively static.
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

export default nextConfig;
