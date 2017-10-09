export default (mockState, extraArgument) => {
  const calls = []
  const getState = () => mockState

  const dispatch = action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument)
    }

    calls.push(action)
  }

  return { dispatch, calls }
}
