/** @type {import('next').NextConfig} */
const nextConfig = {
 experimental: {
        serverActions: {
          bodySizeLimit: "10mb", // ✅ Increase limit (Default is 1MB)
        },
      },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: ''
            },

        ]
    }
};

export default nextConfig;
