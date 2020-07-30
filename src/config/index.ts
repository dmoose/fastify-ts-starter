/*
 * create the configuration with defaults
 * https://www.npmjs.com/package/convict
 */

import path from 'path'
import convict from 'convict'
import convict_format_with_validator = require('convict-format-with-validator')

convict.addFormat(convict_format_with_validator.ipaddress)

const config = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV',
    arg: 'env',
  },
  ip: {
    doc: 'The IP address to bind.',
    format: 'ipaddress',
    default: '0.0.0.0',
    env: 'BIND_ADDRESS',
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 80,
    env: 'HTTP_PORT',
    arg: 'port',
  },
  db: {
    host: {
      doc: 'Database host name/IP',
      format: '*',
      default: 'server1.dev.test',
    },
    name: {
      doc: 'Database name',
      format: String,
      default: 'users',
    },
  },
})

// load environment dependent configuration
const env = config.get('env')
config.loadFile(path.join(__dirname, `${env}.json`))

config.validate({ allowed: 'strict' })
export default config
