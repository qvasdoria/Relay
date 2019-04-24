import styled from 'styled-components'

export const Container = styled.div`
    font-size: 14px;
`;

export const Title = styled.h4`
    color: #FF6600;
    margin: 3px 0;
    border-bottom: 1px solid #FF6600;
    font-size: 13px;
`;

export const Address = styled.p`
    margin: 0 !important;
    font-size: 11px;
    line-height: 13px;
    
    &:first-of-type {
        margin-top: 5px !important;
    }

    &:last-of-type {
        margin-bottom: 5px !important;
    }
`;

export const Button = styled.button`
    display: block;
    margin: 5px auto 0;
    color: #fff;
    background-color: #5cb85c;
    border: 1px solid transparent;
    font-size: 12px;
    line-height: 1.5;
    border-radius: 3px !important;
`;

export const Table = styled.table`
    display: block;
    overflow: auto;
    border: 0;
    border-collapse: collapse;
    width: 100%;
    text-align: left;
`;

export const Thead = styled.thead`
    color: #FF6600;
    border-bottom: 1px solid #FF6600;
    font-weight: 100;
`;

export const Tbody = styled.tbody`
   &:before {
        content: '';
        display: block;
        height: 5px;
    }
`;

export const Day = styled.td`
    font-style: italic;
    text-transform: capitalize;
`;

export const Hour = styled.td`
    min-width: 100px;
    padding-left: 10px;
`;
