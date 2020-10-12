import React from 'react'
import { connect } from "react-redux";
import styled from 'styled-components'

import { setCurrentTrack, setPlayerState, setNextTrack, setPreviousTrack, setElapsedTime } from '../store/actions';
import { getCurrentTrack, getPlayer, getPlaylist } from '../store/selectors'
import { PLAYER_STATE } from '../store/reducers/player'
import store from '../store/index'

import previous from '../assets/previous.png'
import pause from '../assets/pause.png'
import next from '../assets/next.png'
import resume from '../assets/resume.png'
import { ButtonContainer } from './ButtonContainer';
import TrackSlider from './TrackSlider';

import { audioPlayer } from '../audioPlayer'

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

const handleTogglePlay = (setPlayerState,playerState) => {
    if (playerState === PLAYER_STATE.PLAYING){
        setPlayerState(PLAYER_STATE.PAUSED)
    }
    else{
        setPlayerState(PLAYER_STATE.PLAYING)
    }
    audioPlayer.togglePauseResume();
}

const Controls = ({currentTrack, player, playlist, setPlayerState, setCurrentTrack, setPreviousTrack, setNextTrack}) => {
    
    return  <ControlsContainer>
        <ButtonsContainer>
            <ButtonContainer 
                src={previous} 
                disabled={currentTrack.track === null || isFirstTrack(playlist, currentTrack)}
                alt="previous song" 
                callBack={() => setPreviousTrack(currentTrack, playlist,setCurrentTrack, setPlayerState)}/> 
            <ButtonContainer 
                src={getPlayPauseButtonSource(player.playerState)} 
                alt="toggle play" 
                disabled={currentTrack.track === null}
                callBack={() => handleTogglePlay(setPlayerState, player.playerState)}/> 
            <ButtonContainer 
                src={next} 
                disabled={currentTrack.track === null || isLastTrack(playlist, currentTrack)}
                alt="next song" 
                callBack={() => setNextTrack(currentTrack, playlist, setCurrentTrack, setPlayerState)}/> 
        </ButtonsContainer>
        <TrackSlider/>
    </ControlsContainer>
}

//Functions called from audioPlayer that is not a react component
window.addEventListener('nextSong',() => {      
    const { playlist, currentTrack } = store.getState()
    store.dispatch(setNextTrack(currentTrack, playlist, setCurrentTrack, setPlayerState))
})

window.addEventListener('updateSliderProgression',(el) => {      
    store.dispatch(setElapsedTime(el.detail))
})

const mapStateToProps = state => {
    const currentTrack = getCurrentTrack(state);
    const player = getPlayer(state);
    const playlist = getPlaylist(state);
    return { currentTrack, player, playlist };
  };
  
  export default connect(
    mapStateToProps,
    { setCurrentTrack, setPlayerState, setNextTrack, setPreviousTrack }
  )(Controls);
  