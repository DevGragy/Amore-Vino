import styled from 'styled-components'

export const ProdElement = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    border: solid 1px #eee;
    border-radius: 5px;
    box-shadow: 0 5px 5px rgb(0, 0, 0, 0.1);
    padding: 10px 15px;
    margin: 42px;
`

export const ProdImg = styled.img`
    padding-right: 0;
    border: 0;
    width: 100%;
    vertical-align: middle;
    display: inline-block;
    max-height: 250px;
`

export const ProdTitulo = styled.h3`
    font-size: 22px;
    font-weight: bold;
    margin: 8px 2px;
`

export const ProdPrecio = styled.p`
    font-size: 20px;
    margin: 8px 2px;
`