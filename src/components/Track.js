import React from 'react'
import styled from 'styled-components'
import { connect } from "react-redux";

import { setCurrentTrack, setPlayerState } from '../store/actions';
import { getCurrentTrack } from '../store/selectors'
import { PLAYER_STATE } from '../store/reducers/player'

const TrackTile = styled.div`
  display:flex;
  margin-bottom: 1em;
`
const TrackIcon = styled.img`
  border-radius: 50%;
  width: 2.5em;
  min-width: 2.5em;
  max-height: 2.5em;
`
const TrackInfo = styled.div`
  align-self: center;
  margin-left: 1em
`
const TrackName = styled.div`
  color: #8D8D8D;
  font-size:1em
`
const Artist = styled.div`
  color: #C2C2C2;
  font-size:.75em
`
function handleClick(setCurrentTrack, setPlayerState,track){
  setCurrentTrack(track);
  setPlayerState(PLAYER_STATE.PLAYING);
}

const Track = ({ track, setCurrentTrack, setPlayerState}) =>{ 
  return (
    <TrackTile onClick={()=> { handleClick(setCurrentTrack, setPlayerState, track )}}>
      <TrackIcon src={track.album.images[2].url} alt=""/>
      <TrackInfo>
        <TrackName>{track.name}</TrackName>
        <Artist>{track.artists[0].name.toUpperCase()}</Artist>
      </TrackInfo>
    </TrackTile>
)}

const mapStateToProps = state => {
  const currentTrack = getCurrentTrack(state);
  return { currentTrack };
};

export default connect(
  mapStateToProps,
  { setCurrentTrack, setPlayerState }
)(Track);
