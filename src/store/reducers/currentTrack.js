import * as types from '../actions/actionTypes'

const currentTrack = (state = { track: null } , action) => {
    switch (action.type) {
      case types.SET_CURRENT_TRACK:
        console.log("SET",state,action)
        return {...state, track: action.track };
      case types.GET_CURRENT_TRACK:
        console.log("GET", state,action)
        return { currentTrack : state.currentTrack };
      default:
        return state
    }
  }
  
  export default currentTrack;