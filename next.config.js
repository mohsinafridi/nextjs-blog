/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // <-- Enables static export
    images: { unoptimized: true }, // Required for GitHub Pages
    basePath: "/nextjs-blog", // Replace with your repo name
    assetPrefix: "/nextjs-blog/",
}

module.exports = nextConfig
