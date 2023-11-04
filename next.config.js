/** @type {import('next').NextConfig} */

const nextConfig = {
            experimental: { 
                serverComponentsExternalPackages: ["mongoose"],
                instrumentationHook: true
            },
    };

const withPWA =  require("@ducanh2912/next-pwa").default({
  dest: "public",
//   extendDefaultRuntimeCaching:true,
//   workboxOptions:{
//     runtimeCaching:[
//         {
//             urlPattern
//         }
//     ]
//   }
})

module.exports = withPWA(nextConfig)

