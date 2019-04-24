import styled, { css } from 'styled-components'

export const Container = styled.div`
    border: solid 1px transparent;
    padding: 12px 16px;
    line-height: 16px;
    font-family: sans-serif;
    color: #8C8C8C;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    
    &:hover {
        background-color: #FAFAFA;
    }
    
    ${props => props.isActive && css`
        border: 1px solid #4D90FE;
        background-color: #FAFAFA;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    `}
`;

export const Header = styled.div`
    margin-bottom: 12px;
    font-weight: bold;
    font-size: 13px;
`;

export const Detail = styled.div`
    padding-top: 6px;
    font-size: 12px;
`;
