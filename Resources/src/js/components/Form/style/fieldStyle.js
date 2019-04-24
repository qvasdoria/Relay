import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 12px 12px 0;
    min-width: 15%;
    
    &:first-child {
        flex: 1 0 auto;
    }
    
    input, select {
        width: 100%;
        height: 36px;
        padding: 6px 12px;
        border: 1px solid #ccc;
        background-color: #fff;
        color: #555;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 -1px 0 rgba(0, 0, 0, 0.02);
    }
`;
