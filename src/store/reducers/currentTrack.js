import * as types from '../actions/actionTypes'

const currentTrack = (state = {} , action) => {
  console.log(state,action)
    switch (action.type) {
      case types.SET_CURRENT_TRACK:
        return {...state, track: action.track };
      default:
        return state
    }
  }
  
  export default currentTrack;