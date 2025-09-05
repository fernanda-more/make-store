import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // basePath para Project Pages: https://<user>.github.io/<repo>/
  basePath: "/make-store",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;