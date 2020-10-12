import React from 'react'
import { connect } from "react-redux";
import styled from 'styled-components'

import { setCurrentTrack, setPlayerState } from '../store/actions';
import { getCurrentTrack, getPlayer, getPlaylist } from '../store/selectors'
import { PLAYER_STATE } from '../store/reducers/player'

import previous from '../assets/previous.png'
import pause from '../assets/pause.png'
import next from '../assets/next.png'
import resume from '../assets/resume.png'
import { ButtonContainer } from './ButtonContainer';
import TrackSlider from './TrackSlider';

const ControlsContainer = styled.div`
    background-color: #e4e0ef;
    display:flex;
    align-items: center;
`
const ButtonsContainer = styled.div`
    display: flex;
    width: 9.25em;
    justify-content: space-between;
`

const getPlayPauseButtonSource = (playerState) => {
    return playerState === PLAYER_STATE.PLAYING ? pause : resume;
}
const isFirstTrack = (playlist, currentTrack) => {
    if (playlist.tracks.length === 0){
        return true
    }
    else if (playlist.tracks.length > 0){
        return playlist.tracks[0].track === currentTrack.track
    }
    return false;
}

const isLastTrack = (playlist, currentTrack) => {
    if (playlist.tracks.length === 0){
        return true
    }
    else if (playlist.tracks.length > 0){
        return playlist.tracks[playlist.tracks.length - 1].track 
            === currentTrack?.track
    }
    return false;
}

const getCurrentTrackId = (playlist, currentTrack) => {
    const playlistTracks = playlist.tracks.map(playlistItem => playlistItem.track)
    return playlistTracks.indexOf(currentTrack.track);
}

const handlePreviousTrack = (currentTrack, playlist, setCurrentTrack) => {
    const currentTrackId = getCurrentTrackId(playlist, currentTrack);
    setCurrentTrack(playlist.tracks[currentTrackId - 1].track)
}

const handleNextTrack = (currentTrack, playlist, setCurrentTrack) => {
    const currentTrackId = getCurrentTrackId(playlist, currentTrack);
    setCurrentTrack(playlist.tracks[currentTrackId + 1].track)
}

const handleTogglePlay = (setPlayerState,playerState) => {
    if (playerState === PLAYER_STATE.PLAYING)
        setPlayerState(PLAYER_STATE.PAUSED)
    else 
        setPlayerState(PLAYER_STATE.PLAYING)
}

const Controls = ({currentTrack, player, playlist, setPlayerState, setCurrentTrack}) => {
    return  <ControlsContainer>
        <ButtonsContainer>
            <ButtonContainer 
                src={previous} 
                disabled={isFirstTrack(playlist, currentTrack)}
                alt="previous song" 
                callBack={() => handlePreviousTrack(currentTrack, playlist,setCurrentTrack)}/> 
            <ButtonContainer 
                src={getPlayPauseButtonSource(player.playerState)} 
                alt="toggle play" 
                disabled={false}
                callBack={() => handleTogglePlay(setPlayerState, player.playerState)}/> 
            <ButtonContainer 
                src={next} 
                disabled={isLastTrack(playlist, currentTrack)}
                alt="next song" 
                callBack={() => handleNextTrack(currentTrack, playlist, setCurrentTrack)}/> 
        </ButtonsContainer>
        <TrackSlider/>
    </ControlsContainer>
}

const mapStateToProps = state => {
    const currentTrack = getCurrentTrack(state);
    const player = getPlayer(state);
    const playlist = getPlaylist(state);
    return { currentTrack, player, playlist };
  };
  
  export default connect(
    mapStateToProps,
    { setCurrentTrack, setPlayerState }
  )(Controls);
  