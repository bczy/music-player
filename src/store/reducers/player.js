import * as types from '../actions/actionTypes'
export const PLAYER_STATE = {
  DISCONNECTED: 'DISCONNECTED',
  PAUSED: 'PAUSED',
  PLAYING: 'PLAYING',
}

const player = (state = { playerState: PLAYER_STATE.DISCONNECTED } , action) => {
    switch (action.type) {
      case types.SET_PLAYER_STATE:
        return {
            ...state, playerState: action.playerState
          };
      case types.GET_PLAYER_STATE:
        return {
            playerState: action.playerState
          };
      default:
        console.log(state)
        return state
    }
  }
  
  export default player;