import React from 'react'
import Gif from './Gif'

const GifList = props => {
  const gifs = props.data.map(gif => {
    return <Gif url={gif.images.fixed_height.url} key={gif.id} />
  })
  return (
    <ul className='gif-list'>
      {gifs}
    </ul>
  )
}

export default GifList
