import React, { Component } from 'react'
import styled from 'styled-components'

export default class Main extends Component {

  state = {
    posts: {
      1: {
        date: '11/10/2018',
        author: 'Ivy Kroncke',
        title: 'New Favorite Skirt',
        image: 'https://i.s-madewell.com/is/image/madewell/J7909_BR5780_d1?$MW%5F1007x1280$',
        review: 'This skirt is so cute! I love it! It goes with so many of my tops.'
      },
      2: {
        date: '10/02/2018',
        author: 'Talia Bromstad',
        title: 'This dress is EVERYTHING!',
        image: 'https://images.neimanmarcus.com/ca/1/product_assets/B/4/2/M/Q/NMB42MQ_mz.jpg',
        review: 'I looked great at my sister\'s wedding in this GORG Monique Lhullier masterpiece!'
      },
      3: {
        date: '2/17/2018',
        author: 'Parker Douglas',
        title: 'Great boots!',
        image: 'https://www.stuartweitzman.com/assets/item/zoom/tieland_blasue_12.jpg',
        review: 'These are a new classic. Flattering on everyone. Go from dressy to totally caj!'
      }
    }
  }

  render() {
    return (
      <div>
        lil' bit o content
      </div>
    )
  }
}
