/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  output: 'standalone',
  distDir: process.env.DIST_DIR || '.next',
  webpack: (config, { webpack }) => {
    config.module.rules.push({
      test: /\.(jsx|tsx)$/,
      exclude: [/node_modules/],
      use: [{
        loader: '@dhiwise/component-tagger/nextLoader',
      }],
    });
    return config;
  },
  // Disable Turbopack since we have a custom webpack config
  experimental: {
    turbo: false,
  }
};
export default nextConfig;