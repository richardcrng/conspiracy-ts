export const delay = (ms: number) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

export const callArgsOfCallback = (callback: jest.Mock, callNumber: number = -1) => (
  callback.mock.calls[callNumber >= 0 ? callNumber : callback.mock.calls.length + callNumber]
)