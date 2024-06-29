/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /**
   * NOTE: GitHub Pages does not support server-side code. Therefore we need to set the build type to a static site.
   * output, basePath, unoptimized images
   */
  output: 'export',
  basePath: '/kraisoft-test-website',
  distDir: 'dist',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
