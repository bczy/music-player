import React from 'react'
import styled from 'styled-components'
import { connect } from "react-redux";

import { getCurrentTrack } from '../store/selectors'
import { setPlayerState } from '../store/actions';

import Controls from './Controls';
import albumCoverPlaceHolder from '../assets/album-place-holder.png';

const PlayerContainer = styled.div`
    background-color: #e4e0ef;
    font-weight: bold;
    border-radius: 5% 5% 0 0;
    padding: 1em;
`
const TrackContainer = styled.div`
    background-color: #e4e0ef;
    display:flex;
    align-items: center;
    margin-bottom:1.5em;
`
const PlayerTrackInfo = styled.div`
`
const PlayerTrackName = styled.div`
    color: #26107c;
    font-size:1.2em;
`
const PlayerTrackArtist = styled.div`
    color: #614e9d;
    font-size: 1.1em;
`

const AlbumCoverContainer = styled.div`
    margin-right: 1em;
`
const AlbumCover = styled.img`
    width: 9.25em;
    filter: drop-shadow(0.25em 0.25em 4px #777);
    border-radius: 5%;
`

const Player = ({currentTrack}) => {
    return <PlayerContainer>
        <TrackContainer >
        {currentTrack.track ? 
            <>
                <AlbumCoverContainer>
                    <AlbumCover
                            src={currentTrack.track.album.images[0].url} 
                            alt={`${currentTrack.track.album.name}`}/>
                </AlbumCoverContainer>
                <PlayerTrackInfo>
                    <PlayerTrackName>{currentTrack.track.name}</PlayerTrackName>
                    <PlayerTrackArtist>{currentTrack.track.artists[0].name}</PlayerTrackArtist>
                </PlayerTrackInfo>
            </> :
            <>
                <AlbumCoverContainer>
                    <AlbumCover
                        src={albumCoverPlaceHolder} 
                        alt={"Album Placeholder"}/>
                </AlbumCoverContainer>
                <PlayerTrackInfo>
                    <PlayerTrackName>Click on a playlist song to listen it.</PlayerTrackName>
                </PlayerTrackInfo>
            </>
        }
        </TrackContainer>
        <Controls />
    </PlayerContainer>
}

const mapStateToProps = state => {
    const currentTrack = getCurrentTrack(state);
    return { currentTrack };
};

export default connect(
    mapStateToProps,
    { setPlayerState }
)(Player);