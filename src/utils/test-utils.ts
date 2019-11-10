export const delay = (ms: number) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

export const callArgsOfCallback = (callback: jest.Mock, callNumber: number = callback.mock.calls.length - 1) => (
  callback.mock.calls[callNumber]
)