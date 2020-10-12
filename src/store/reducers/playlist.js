import * as types from '../actions/actionTypes'

const playlist = (state = {tracks:[]} , action) => {
    switch (action.type) {
      case types.SET_PLAYLIST:
        return {
          ...state,
          tracks: action.tracks
      };
      case types.GET_PLAYLIST:
        return state.playlist;
      default:
        return state
    }
  }

export default playlist;