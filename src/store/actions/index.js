import * as actionTypes from './actionTypes'

export const setPlaylist = tracks => ({
  type: actionTypes.SET_PLAYLIST,
  tracks
})

export const setCurrentTrack = track => ({
  type: actionTypes.SET_CURRENT_TRACK,
  track
})