export default function reducer(state = {
    checkins: null,
  }, action) {
    switch (action.type) {
      case 'FETCH_USER_CHECKINS_FULFILLED': {
        return {
          ...state,
          checkins: action.payload.checkins,
        };
      }
      default: {
          return state
      }
    }
}