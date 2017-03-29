const createAsyncSpy = error => {
  const calls = []
  const spy = (...args) => {
    const argsLen = args.length
    calls.push(args.slice(0, argsLen - 1))
    args[argsLen - 1](error)
  }
  return { spy, calls }
}

const createPromiseSpy = ({ response, error }) => {
  const calls = []
  const spy = (...args) => {
    calls.push(args)
    return new Promise((resolve, reject) => {
      if (error) return reject(error)
      resolve(response)
    })
  }

  return { calls, spy }
}

module.exports = {
  createAsyncSpy,
  createPromiseSpy
}
