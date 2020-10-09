import React from 'react'
import styled from 'styled-components'

import previous from '../assets/Previous.png'
import pause from '../assets/Pause.png'
import next from '../assets/Next.png'

const ControlsContainer = styled.div`
    background-color: #e4e0ef
`
const ButtonsContainer = styled.div`
    display: flex;
    width: 20%;
    justify-content: space-around;

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