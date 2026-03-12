/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'chemcentrum.nl',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
