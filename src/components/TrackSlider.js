import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { setCurrentTrack } from '../store/actions';
import { getCurrentTrack } from '../store/selectors'

import handle from '../assets/handle.png'

const TrackSliderContainer = styled.div`
    font-weight: normal;
    font-size: 0.9em;
    display: flex;
    width: 65%;
    margin-left: 1em;
    align-items: center;
    color: #7263aa;
`
const TimeLabel = styled.div`
    width: 10%
`
const Slider = styled.div`
    width: 80%;
    background-color: #c8badd;
    height: 0.2em;
    margin: 0 0.5em;
    display: flex;
    
`
const ElapsedBackground = styled.div`
    background-color:#261691;
    width: ${props => {
        if (props.currentTrack.track !== null){
            return  props.currentTrack.elapsedTime  / props.currentTrack.track.duration_ms * 100
        }
        else return 0
    }}%

`
const Handle = styled.img`

`

const msToMnSec = (playedMs) =>{
    const elapsedSeconds = Math.floor(playedMs / 1000);
    return `${Math.floor(elapsedSeconds/ 60).toString().padStart(2,"0")}:${(elapsedSeconds % 60).toString().padStart(2,"0")}`
}

const TrackSlider = ({currentTrack}) => {
    const track = {currentTrack}
    return <TrackSliderContainer>
        <TimeLabel>{msToMnSec(track.currentTrack.elapsedTime)}</TimeLabel>
        <Slider>
            <ElapsedBackground currentTrack={currentTrack}/>
            <Handle src={handle}/>
        </Slider>
        <TimeLabel>{track.currentTrack.track ? msToMnSec(track.currentTrack.track.duration_ms): "--:--"}</TimeLabel>
    </TrackSliderContainer>
}


const mapStateToProps = state => {
    const currentTrack = getCurrentTrack(state);
    return { currentTrack };
  };
  
export default connect(
    mapStateToProps,
    { setCurrentTrack }
)(TrackSlider);
  