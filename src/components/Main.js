import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'

const PostText = styled.div`
font-family: Arial, Helvetica, sans-serif;
font-size: ${props => props.theme.main};
`

PostText.defaultprops = {
  theme: {
    main: ".5rem",
    bgcolor: "green",
    font: "Lato"
  }
}

const theme = {
  main: "1rem",
  bgcolor: "papayawhip"
}

const PostDiv = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
background-color: ${props => props.theme.bgcolor};
padding: 2vw;
margin: 3vw;
`

const Photo = styled.div`
height: 8vh;
padding-right: 3vw;
`

const StyledDate = styled.div`
font-size: .5rem;
`

const ReviewContent = styled.div`
display: flex;
`

const StyledDateAndAuthor = styled.div`
padding-right: 2vw;
`

const StyledAuthor = styled.div`
padding-bottom: .5vw;
`

const StyledReview = styled.div``

export default class Main extends Component {

  state = {
    posts: [
      {
        date: '11/10/2018',
        author: 'Ivy Kroncke',
        title: 'New Favorite Skirt',
        image: 'https://i.s-madewell.com/is/image/madewell/J7909_BR5780_d1?$MW%5F1007x1280$',
        review: 'This skirt is so cute! I love it! It goes with so many of my tops.'
      },
      {
        date: '10/02/2018',
        author: 'Talia Bromstad',
        title: 'This dress is EVERYTHING!',
        image: 'https://images.neimanmarcus.com/ca/1/product_assets/B/4/2/M/Q/NMB42MQ_mz.jpg',
        review: 'I looked great at my sister\'s wedding in this GORG Monique Lhullier masterpiece!'
      },
      {
        date: '2/17/2018',
        author: 'Parker Douglas',
        title: 'Great boots!',
        image: 'https://www.stuartweitzman.com/assets/item/zoom/tieland_blasue_12.jpg',
        review: 'These are a new classic. Flattering on everyone. Go from dressy to totally caj!'
      }
    ]
  }

  render() {

    const allPosts = this.state.posts.map((post, i) => {
      return (
        <PostDiv key = {i}>
        <Photo as="img" src={post.image} alt={post.title} />
        <ReviewContent>
          <StyledDateAndAuthor>
            <StyledAuthor>{post.author}</StyledAuthor>
            <StyledDate>{post.date}</StyledDate>
          </StyledDateAndAuthor>
          <StyledReview>
            <div>{post.title}</div>
            <div>{post.review}</div>
          </StyledReview>
        </ReviewContent>
        </PostDiv>
      )
    })

    return (
      <ThemeProvider theme={theme}>
       <PostText> {allPosts} </PostText> 
      </ThemeProvider>
    )
  }
}
