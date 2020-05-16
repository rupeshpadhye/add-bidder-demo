export default (state: any, action: any) => {
  const { type, payload } = action

  switch (type) {
    case 'GET_ADVERTISER_REQUEST':
      return {
        ...state,
        addSlots: [...state.addSlots, payload]
      }
    case 'SET_ADVERTISERS':
      return {
        ...state,
        advertisers: [...state.advertisers, ...action.payload],
        addSlots: []
      }
    default:
      return state
  }
}
