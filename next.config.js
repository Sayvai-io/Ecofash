/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost", "oqautjxakguunvkpasdv.supabase.co"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  i18n:{
    locales:['en','ja','zh'],
    defaultLocale:'en'
  }
};

module.exports = nextConfig;
