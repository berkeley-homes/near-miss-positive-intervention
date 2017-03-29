const createAsyncSpy = error => {
  const calls = []
  const spy = (...args) => {
    const argsLen = args.length
    calls.push(args.slice(0, argsLen - 1))
    args[argsLen - 1](error)
  }
  return { spy, calls }
}

module.exports = {
  createAsyncSpy
}
