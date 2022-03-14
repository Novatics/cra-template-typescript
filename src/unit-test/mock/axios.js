/* eslint-disable @typescript-eslint/explicit-function-return-type */
import axios from 'axios'

jest.mock('axios')

const functionize = (obj, func) => {
  const out = func
  Object.entries(obj).forEach(([key, value]) => {
    out[key] = value
  })
  return out
}

const axiosApi = functionize(
  {
    request: '',
    headers: {},
    interceptors: {
      request: {
        use: middleware => middleware({ headers: {} }),
      },
      response: {
        use: (_, middleware) =>
          middleware({
            response: { data: { message: '' } },
          }),
      },
    },
  },
  jest.fn()
)

axios.create.mockImplementation(() => axiosApi)
axios.get.mockImplementation(() => Promise.resolve({ data: {} }))

const mockRejectResp = data => {
  axiosApi.mockRejectedValue(data)
  return data
}

const mockResolveResp = data => {
  axiosApi.mockResolvedValue(data)
  return data
}

export { mockRejectResp, mockResolveResp }
