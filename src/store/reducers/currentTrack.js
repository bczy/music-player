import * as types from '../actions/actionTypes'

const currentTrack = (state = { track: null, elapsedTime: 0 } , action) => {
    switch (action.type) {
      case types.SET_CURRENT_TRACK:
        return {...state, track: action.track };
      case types.SET_ELAPSED_TIME:
        return {...state, elapsedTime: action.elapsedTime };
      case types.GET_CURRENT_TRACK:
        return { currentTrack : state.currentTrack };
      default:
        return state
    }
  }
  
  export default currentTrack;