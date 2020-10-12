import React from 'react';
import styled from 'styled-components';

const ControlButtonImage = styled.img`
    opacity: ${props => props.disabled ? 0.5 : 1};
`
const ControlButton = styled.button`
    border: none;
    background: none;
`

export const ButtonContainer = ({src, disabled, alt, callBack}) => {
    return <ControlButton disabled={disabled} onClick={callBack}>
        <ControlButtonImage 
        src={src}
        disabled={disabled} 
        alt={alt}
        />
    </ControlButton>
}