/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  redirects: async () => {
    return [
      {
        source: "/book",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
