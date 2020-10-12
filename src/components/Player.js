import React from 'react'
import styled from 'styled-components'
import { connect } from "react-redux";

import { getPlaylist } from '../store/selectors'
import { setPlayerState } from '../store/actions';

import { Controls } from './Controls'

const PlayerContainer = styled.div`
    background-color: #e4e0ef
`
const TrackInfos = styled.div`
    background-color: #e4e0ef
`

export const Player = () => {
    return <PlayerContainer>
        <TrackInfos >
            Click on a song to play it
        </TrackInfos>
        <Controls />
    </PlayerContainer>
}

const mapStateToProps = state => {
    const playlist = getPlaylist(state);
    return { playlist };
  
  };

export default connect(
    mapStateToProps,
    { setPlayerState }
  )(Player);