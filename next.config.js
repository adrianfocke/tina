module.exports = {
  async rewrites() {
    return [
      {
        source: '/admin',
        destination: '/admin/index.html',
      },
    ]
  },
  images: {
    domains: ['assets.tina.io'],
  },
}
