/** @type {import('next').NextConfig} */
const nextConfig = {
            
            experimental: { 
                appDir: true 
                , serverComponentsExternalPackages: ["mongoose"],
                instrumentationHook: true,
            },
    }

module.exports = nextConfig
