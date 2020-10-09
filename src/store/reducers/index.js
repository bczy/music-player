
import { combineReducers } from 'redux'
import playlist from './playlist'
import currentTrack from './currentTrack'

export default combineReducers({
  playlist, currentTrack
})