import fastify from 'fastify'
import fastifySensible from 'fastify-sensible'
import config from './config'

const app = fastify({
  logger: config.get('env') !== 'test',
})

app.decorate('convict', config) // add the config to the server instance
app.register(fastifySensible)

export { app }
