import * as types from '../actions/actionTypes'

const playlist = (state = [] , action) => {
  console.log(state,action)
    switch (action.type) {
      case types.SET_PLAYLIST:
        return [
          {
            playlist: action.tracks
          }
        ]
      default:
        return state
    }
  }
  
  export default playlist;