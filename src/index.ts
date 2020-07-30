import fastifyCors from 'fastify-cors'
import chalk from 'chalk'
import { app } from './app'
import swaggerPlugin from './plugins/swagger'
import statusRoutes from './services/status'

if (app.convict.get('env') === 'development') {
  console.log('APP.CONVICT ', app.convict.toString())
}

const port = app.convict.has('port') ? app.convict.get('port') : 80
const ip = app.convict.has('ip') ? (app.convict.get('ip') as string) : '0.0.0.0'

// configure the cors plugin
app.register(fastifyCors, {
  origin: '*',
  allowedHeaders: ['Origin', 'X-Requested-With', 'Accept', 'Content-Type', 'Authorization'],
  methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE'],
})

// the swagger plugin will respond with api docs (see plugin for configuration opts)
app.register(swaggerPlugin)

// the only service loaded by default
app.register(statusRoutes)

app
  .listen(port, ip)
  .then(() => {
    console.log(chalk.greenBright(`Server running on ${ip}:${port}`))
    return null
  })
  .catch((err) => {
    console.log(chalk.bgWhite(chalk.redBright('ERROR starting')))
    console.log(err)
  })

process.on('uncaughtException', (error) => {
  console.error(error)
})
process.on('unhandledRejection', (error) => {
  console.error(error)
})
