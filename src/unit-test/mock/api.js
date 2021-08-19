import Api from 'services/api';

jest.mock('services/api', () => ({
  request: jest.fn()
}));

const mockValue = data => {
  Api.request.mockResolvedValue(data);
  return data;
};

const mockRejectedValue = data => {
  Api.request.mockRejectedValue(data);
  return data;
};

const mockApiReturnValue = response => {
  const mockedFunction = jest.fn();
  Api.request = mockedFunction.mockReturnValue(response);
  return mockedFunction;
};

const mockApiResolvedValue = response => {
  const mockedFunction = jest.fn();
  Api.request = mockedFunction.mockResolvedValue(response);
  return mockedFunction;
};

export { mockApiResolvedValue, mockApiReturnValue, mockRejectedValue, mockValue };
