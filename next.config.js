/** @type {import('next').NextConfig} */
// @ts-check

const nextConfig = {
            images:{
              remotePatterns:[
                {protocol:'https',
                 hostname:'fouec0gtwszbirgk.public.blob.vercel-storage.com'
                },
                {protocol:'https',
                 hostname:'utfs.io'
                },
              ]
            },
            experimental: { 
                serverComponentsExternalPackages: ["mongoose"],
                instrumentationHook: true
            },
    };

// https://ducanh-next-pwa.vercel.app/docs/next-pwa/configuring
const withPWA =  require("@ducanh2912/next-pwa").default({
  dest: "public"
})

module.exports = withPWA(nextConfig)


