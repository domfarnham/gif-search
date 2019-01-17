import React from 'react'

const Gif = props => (
  <li className='gif-wrap'>
    <img src={props.url} key={props.id} alt='' />
  </li>
)

export default Gif
