/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: process.env.NODE_ENV === 'production' ? '/kouyousai.com' : '',
  basePath: '/kouyousai.com',
};

export default nextConfig;
