import styled from "styled-components"

const HeaderMain = styled.header`
    width: 100%;
    height: 20vh;    
    background-color: whitesmoke;
    text-align: center;
    display: grid;
    grid-template-rows: 2fr 1fr;
`

const HeaderTitle = styled.div`
    font-family: 'Cherry Bomb One', cursive;
    font-size: 3rem;
    font-weight: 700;
`;

function Header(){
    return (
        <HeaderMain>
            <HeaderTitle>  
            </HeaderTitle>
            <HeaderTitle>
                Disney Characters
            </HeaderTitle>
        </HeaderMain>
    )
}

export default Header;