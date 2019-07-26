export default function reducer(state = {
    checkins: null,
  }, action) {
    switch (action.type) {
      case 'FETCH_USER_CHECKINS_FULFILLED': {
        return {
          ...state,
          count: action.payload.count,
          checkins: action.payload.checkins,
        };
      }
      default: {
          return state
      }
    }
}