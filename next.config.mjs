/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  eslint: {
    // Flat ESLint + next/core-web-vitals currently hits a circular JSON bug in this toolchain.
    // Typecheck still runs during `next build`.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
