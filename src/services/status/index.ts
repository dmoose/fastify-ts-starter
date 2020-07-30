import fp from 'fastify-plugin'

export default fp(async (server) => {
  server.route({
    url: '/status',
    logLevel: 'warn',
    method: ['GET', 'HEAD'],
    handler: async () => {
      return { date: new Date(), works: true } // fastify defaults to JSON so just return JSON
    },
  })
})
