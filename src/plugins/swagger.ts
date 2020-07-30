import fp from 'fastify-plugin'
import swagger from 'fastify-swagger'

export default fp(async (server) => {
  const env = server.convict.get('env') // we assume that convict and env exist, will throw error if not
  let host = server.convict.has('host') ? server.convict.get('host') : undefined
  host = host || (env === 'development' ? 'localhost' : 'production.com')
  server.register(swagger, {
    routePrefix: '/api/doc',
    swagger: {
      info: {
        title: `Test swagger in ${env}`,
        description: 'testing the fastify swagger api',
        version: '0.0.0',
      },
      definitions: {
        User: {
          $ref: 'User',
          type: 'object',
          required: ['id', 'lastName', 'email'],
          properties: {
            id: { type: 'string', format: 'uuid' },
            firstName: { type: 'string' },
            lastName: { type: 'string' },
            email: { type: 'string', format: 'email' },
          },
        },
      },
      externalDocs: {
        url: 'https://swagger.io',
        description: 'Find more info here',
      },
      host,
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
      securityDefinitions: {
        apiKey: {
          type: 'apiKey',
          name: 'apiKey',
          in: 'header',
        },
      },
    },
    exposeRoute: true,
  })
})
