import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        // The robots meta tag covers HTML pages, but Next rewrites it to plain
        // "noindex" on 404s: the header keeps "noindex, nofollow" on every response.
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
