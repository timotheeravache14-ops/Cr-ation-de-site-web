import type { NextConfig } from "next";

// When building for GitHub Pages the workflow injects PAGES_BASE_PATH
// (e.g. "/Cr-ation-de-site-web") so assets resolve under the project path.
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  // Exposed to the client so next/image src for public assets can be
  // prefixed (basePath is not applied to unoptimized image src).
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
