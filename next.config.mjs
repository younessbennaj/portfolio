import rehypePrism from '@mapbox/rehype-prism'
import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  experimental: {
    outputFileTracingIncludes: {
      '/articles/*': ['./src/app/articles/**/*.mdx'],
    },
  },
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/', // Redirige vers la page d'accueil
        permanent: false, // Indique que la redirection est temporaire
      },
      {
        source: '/articles',
        destination: '/', // Redirige vers la page d'accueil
        permanent: false,
      },
      {
        source: '/projects',
        destination: '/', // Redirige vers la page d'accueil
        permanent: false,
      },
      {
        source: '/speaking',
        destination: '/', // Redirige vers la page d'accueil
        permanent: false,
      },
      {
        source: '/use',
        destination: '/', // Redirige vers la page d'accueil
        permanent: false,
      },
    ]
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

export default withMDX(nextConfig)
