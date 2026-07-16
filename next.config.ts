import type { NextConfig } from "next";

const TRACKER = "https://mlz4-tracker.vercel.app";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Sailing tracker lives in its own (private) project; proxied in so it is
      // served from constantin.wuthenau.de/mlz4-tracker/
      { source: "/mlz4-tracker", destination: TRACKER },
      { source: "/mlz4-tracker/", destination: TRACKER },
      { source: "/mlz4-tracker/:path*", destination: `${TRACKER}/:path*` },
    ];
  },
};

export default nextConfig;
