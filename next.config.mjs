/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /**
   * NOTE: GitHub Pages does not support server-side code. Therefore we need to set the build type to a static site.
   *
   * output: 'export' enables the static site generation.
   * basePath: '/kraisoft-test-website' is mandatory for GitHub Pages (it's the subpath of the deployed site).
   * images.unoptimized: true because it's not supported in 'export' mode.
   */
  output: 'export',
  basePath: '/kraisoft-test-website',
  distDir: 'dist',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
