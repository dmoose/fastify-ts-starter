/**
 * This set of routes tests the error returns
 * It is using fastify-sensible error messages
 * The errors are attached to the server and to the reply.
 * Both are demonstrated here
 */
import fp from 'fastify-plugin'

export default fp(async (server, opts, next) => {
  server.route({
    url: '/error400',
    logLevel: 'warn',
    method: ['GET', 'HEAD'],
    handler: async () => {
      return server.httpErrors.badRequest('Error Response -Bad Request-')
    },
  })
  server.route({
    url: '/error401',
    logLevel: 'warn',
    method: ['GET', 'HEAD'],
    handler: async (request, reply) => {
      return reply.unauthorized('Error Response -Unauthorized-')
    },
  })
  server.route({
    url: '/error403',
    logLevel: 'warn',
    method: ['GET', 'HEAD'],
    handler: async () => {
      return server.httpErrors.forbidden('Error Response -Forbidden-')
    },
  })
  server.route({
    url: '/error404',
    logLevel: 'warn',
    method: ['GET', 'HEAD'],
    handler: async () => {
      return server.httpErrors.notFound('Error Response -Not Found-')
    },
  })
  server.route({
    url: '/error500',
    logLevel: 'warn',
    method: ['GET', 'HEAD'],
    handler: async () => {
      return server.httpErrors.internalServerError('Error Response -Internal Sever Error-')
    },
  })
  next()
})
