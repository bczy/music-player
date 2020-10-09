import React from 'react'
import styled from 'styled-components'

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