
import { combineReducers } from 'redux'
import playlist from './playlist'
import currentTrack from './currentTrack'
import player from './player'

export default combineReducers({
  playlist, currentTrack, player
})