import styled, { css } from 'styled-components'

export const Container = styled.div`
    width: 100%;
    flex: 1 0 auto;
    position: relative;
    z-index:1;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);

    ${props => props.isLoading && css`
        &:before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: rgba(255, 255, 255, 0.8);
        }
        
        &:after {
            content: '';
            width: 44px;
            height: 44px;
            position: absolute;
            top: 50%;
            left: 50%;
            margin: -22px 0 0 -22px;
            background: url(//maps.gstatic.com/tactile/pane/spinner_color_2x.gif) no-repeat;
        }
    `}
    
    .leaflet-container {
        width: 100%;
        height: 100%;
    }
`;
