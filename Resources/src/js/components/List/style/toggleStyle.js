import styled, { css } from 'styled-components'

export const Container = styled.div`
    position: absolute;
    top: 6px;
    left: 100%;
`;

export const Button = styled.button`
    width: 23px;
    height: 48px;
    border-right: solid 1px #D4D4D4;
    background: rgba(255, 255, 255, 0.9) url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAUCAQAAAAXDMSnAAAAi0lEQVR4AX3JQcqBURQG4O/+9WNG30D3vOfSDTuQsgcZyBakZANSzMVMBme3zsBI5/VMn4ZKLP5ki1E4tYejWpilxVUtzOEUD68odYmXR5BJNp/4zllXD2phllYvamHmirsayUkfJ5ruHzueTldC08kcT5YOY9xYujqQM03XKXuaLmEtNF1e1Nz89gbL+0do6OEwRwAAAABJRU5ErkJggg==) 7px center / 7px 10px no-repeat;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    
    ${props => !props.isActive && css`
        transform: scaleX(-1);
    `}
`;
