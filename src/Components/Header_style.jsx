import styled from "styled-components"

export const Header = styled.header `
    width: 100%;
    height: 6.625rem;
    display: flex;
    justify-content: flex-end;
    border-bottom: solid 4.73px #22F241;
`

export const HeaderNav = styled.nav `
    height: 100%;
    width: 28%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const HeaderUl = styled.ul `
 
`

export const MenuHamburguer = styled.button `
    width: 2.54rem;
    height: 2.7rem;
    outline: solid 2px green;
    background-color: none;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

export const Barra = styled.div `
    width: 100%;
    height: 100%;
    height: 5px;
    background-color: #000;
    display: block;
`

export const BorderCurriculumButton = styled.div `
    width: 9.831rem;
    height: 3.845rem;
    outline: solid 6px white;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 1s;
    :hover {
        transform: scale(1.1);
    }
`

export const HeaderALink = styled.a `
    font-size: 1.5rem;
    font-weight: bold;
    transition: all 1s;
    color: #FFFFFF;
    cursor: pointer;
    font-family: 'Orbitron', sans-serif;
    font-weight: 500;
`

