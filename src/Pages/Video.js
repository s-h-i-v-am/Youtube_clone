import React from 'react'
import PlayVideo from '../components/VideoComponents/PlayVideo'
import RelatedVideos from '../components/VideoComponents/RelatedVideos'

const Video = () => {
  return (
    <div className='px-4 py-5 flex justify-between'>
      <PlayVideo />
      <RelatedVideos />
    </div>
  )
}

export default Video