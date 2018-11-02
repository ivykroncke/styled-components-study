import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'

const SiteTitle = styled.h1`
font-size: 5rem;
font-family: 'Satisfy', cursive;
margin: 0;
`

const NavContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
padding: 4vw 4vw 3vw 4vw;
background-color: ${props => props.theme.bgcolor};
color: ${props => props.theme.color};
font-family: ${props => props.theme.font};
`

NavContainer.defaultprops = {
    theme: {
        bgcolor: "darkgray",
        color: "black",
        font: "Lato"
    }
}

const theme = {
    bgcolor: "darkgray",
    font: "Lato"
}

const sitetitle = {
    color: "white"
}

export default class Nav extends Component {

    render() {
        return (
            <ThemeProvider theme={theme}>
                <div>
                    <NavContainer>
                        <SiteTitle theme={sitetitle}>hot finds</SiteTitle>
                        <div>Home</div>
                        <div>About</div>
                        <div>Shop</div>
                    </NavContainer>
                </div>
            </ThemeProvider>
        )
    }
}
