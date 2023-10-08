/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "res.cloudinary.com",
      "tecnofacil.s3.amazonaws.com",
      "https://www.isaihernandez.dev",
    ],
  },
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true,
      fileName: true,
    },
  },
};

module.exports = nextConfig;
