import styled from 'styled-components'

export const List = styled.div`
    width: 30%;
    min-width: 280px;
    height: calc(100% - 75px);
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 2;
    top: 75px;
    left: 0;
    transform: translate3d(-100%, 0, 0);
    transition: transform 0.33s linear;
    background: #FFF;
    
    &[aria-hidden="true"] {
        transform: translate3d(0, 0, 0);
    }
`;
