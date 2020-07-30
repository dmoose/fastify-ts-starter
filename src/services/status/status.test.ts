import { app } from '../../app'

import statusRoutes from './index'

describe('/status', () => {
  beforeAll(async () => {
    app.register(statusRoutes)
    await app.ready()
  })

  afterAll(async () => {
    app.close()
  })

  it('GET returns 200', async () => {
    const response = await app.inject({ method: 'GET', url: '/status' })
    expect(response.statusCode).toEqual(200)
  })

  it('POST returns 404', async () => {
    const response = await app.inject({ method: 'POST', url: '/status' })
    expect(response.statusCode).toEqual(404)
    expect(response.payload).toMatchSnapshot()
  })
})
