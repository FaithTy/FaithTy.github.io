const INITIAL_STATE = {
  requesting: false
}

const actionHandlers = {
  REQUESTING: (state, { payload }) => {
    return { ...state, [payload]: true }
  },
  REQUESTED: (state, { payload }) => {
    return { ...state, [payload]: false }
  },
}

export default (state = INITIAL_STATE, action) => {
  if (actionHandlers.hasOwnProperty(action.type)) {
    return actionHandlers[action.type](state, action)
  }
  return state
}