const initState = {
  fouce: false,
}

export default (state = initState, action) => {
  if (action.type === 'input_fouce') {
    return {
      fouce: true,
    }
  }

  if (action.type === 'input_blur') {
    return {
      fouce: false,
    }
  }
  return state
}
