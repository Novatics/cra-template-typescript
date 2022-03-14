import api from '../api'
import * as Services from '../health'

const mockFn = jest.fn()

describe('fetchData', () => {
  it('fetches successfully data from an health', async () => {
    const data = {
      data: {
        status: 'OK',
      },
    }

    api.get = mockFn.mockResolvedValueOnce(data)

    await expect(Services.check()).resolves.toEqual(data)

    expect(mockFn).toHaveBeenCalledWith('/health')
  })
})
