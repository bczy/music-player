import React from 'react'
import styled from 'styled-components'

import previous from '../assets/previous.png'
import pause from '../assets/pause.png'
import next from '../assets/next.png'

const ControlsContainer = styled.div`
    background-color: #e4e0ef;
`
const ButtonsContainer = styled.div`
    display: flex;
    width: 9.25em;
    justify-content: space-between;

`

export const Controls = () => {
    return  <ControlsContainer>
        <ButtonsContainer>
            <img src={previous} alt="previous song"/>
            <img src={pause} alt="toggle play"/>
            <img src={next} alt="toggle next"/>
        </ButtonsContainer>
    </ControlsContainer>
}