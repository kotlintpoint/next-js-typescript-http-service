/** @type {import('next').NextConfig} */

let domainUrl = process.env.VERCEL_ENV === "production" ? 'https://24task.com' : `https://${process.env.VERCEL_URL}`;

// for development
// domainUrl = 'http://localhost:3000'

const nextConfig = {
    /* config options here */
  env:{
    BASE_URL: domainUrl,
    defaultMeta: {
      title: "Hire Influencers & Find Influencers Jobs Online - Nojom",
      description: "Hire quality Influencers online or find Influence jobs from the most trusted site. Post a project for free to find top-rated professionals in minutes!",
      keywords: "Hire Influencers, Find Influence Jobs"
    }
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
}

module.exports = nextConfig