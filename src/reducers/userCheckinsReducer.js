export default function reducer(state = {
    accessToken: null,
    expiresAt: null,
    idToken: null,
    isAuthenticated: false,
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