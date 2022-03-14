import api from '../api'

jest.mock('../api')

describe('fetchData', () => {
  it('fetches successfully data from an API', async () => {
    const data = {
      data: {
        status: 'OK',
      },
    }

    api.get.mockImplementationOnce(() => Promise.resolve(data))

    await expect(api.get('/health')).resolves.toEqual(data)

    expect(api.get).toHaveBeenCalledWith('/health')
  })

  it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error'

    api.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)))

    await expect(api.get('/health')).rejects.toThrow(errorMessage)
  })
})
