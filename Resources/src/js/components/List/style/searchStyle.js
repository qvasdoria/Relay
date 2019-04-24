import styled, { css } from 'styled-components'

const urlLoader = '//maps.gstatic.com/tactile/pane/spinner_color.gif';
const urlClear = '//maps.gstatic.com/tactile/omnibox/clear-1x-20150504.png';

export const Container = styled.div`
    padding: 8px;
    background-color: rgb(66, 133, 244);
`;

export const Inner = styled.div`
    display: flex;
    background: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 -1px 0 rgba(0, 0, 0, 0.02);
    transition-property: background, box-shadow;
    transition-duration: 0.3s;
`;

export const Field = styled.div`
    flex: 1;
`;

export const Input = styled.input`
    font-size: 20px;
    padding: 0 !important;
    outline: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    color: #666;
    text-align: center;
    border: 0;  
`;

export const ClearButton = styled.button`
    padding: 10px;
    border: 0;
    outline: 0;
    background: transparent;
    cursor: pointer;
    
    &:before {
        content: '';
        display: block;
        width: 24px;
        height: 24px;
        background: url(${props => props.isLoading ? urlLoader : urlClear}) no-repeat;
        background-size: ${props => props.isLoading ? '24px 24px' : '96px 24px'};
    }
    
    &:hover:before {
        background-position: ${props => props.isLoading ? null : '-24px 0'};
    }
`;
