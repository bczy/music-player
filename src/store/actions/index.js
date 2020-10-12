import { audioPlayer } from '../../audioPlayer'
import { PLAYER_STATE } from '../reducers/player'
import * as actionTypes from './actionTypes'

export const setPlaylist = tracks => ({
  type: actionTypes.SET_PLAYLIST,
  tracks
})

export const setCurrentTrack = track => {
  audioPlayer.setTrackUrl(track.preview_url)
  audioPlayer.playTrack();
  return {
    type: actionTypes.SET_CURRENT_TRACK,
    track
  }
}

export const setPlayerState = playerState => ({
  type: actionTypes.SET_PLAYER_STATE,
  playerState
})
export const setToken = token => ({
  type: actionTypes.SET_TOKEN,
  token
})

export const togglePlayState = playerState =>({
    type: actionTypes.SET_PLAYER_STATE,
    playerState: playerState === PLAYER_STATE.PAUSED ?
      PLAYER_STATE.PLAYING
      : PLAYER_STATE.PAUSED
})
export const setElapsedTime = elapsedTime => ({
  type: actionTypes.SET_ELAPSED_TIME,
  elapsedTime
})
const getCurrentTrackId = (playlist, currentTrack) => {
  const playlistTracks = playlist.tracks.map(playlistItem => playlistItem.track)
  return playlistTracks.indexOf(currentTrack.track);
}

export const setPreviousTrack = (currentTrack, playlist, setCurrentTrack, setPlayerState) => {
  const currentTrackId = getCurrentTrackId(playlist, currentTrack);
  setPlayerState(PLAYER_STATE.PLAYING);
  return setCurrentTrack(playlist.tracks[currentTrackId - 1].track)
}

export const setNextTrack = (currentTrack, playlist, setCurrentTrack, setPlayerState) => {
  const currentTrackId = getCurrentTrackId(playlist, currentTrack);
  setPlayerState(PLAYER_STATE.PLAYING);
  return setCurrentTrack(playlist.tracks[currentTrackId + 1].track)
}
