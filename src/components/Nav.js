import React, { Component } from 'react'
import styled from 'styled-components'

const NavContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
padding: 2vw;
`

export default class Nav extends Component {

  render() {
    return (
      <NavContainer>
        <div>Home</div>
        <div>About</div>
        <div>Shop</div>
      </NavContainer>
    )
  }
}
