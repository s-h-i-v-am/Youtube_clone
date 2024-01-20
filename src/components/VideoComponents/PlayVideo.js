import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { AiFillLike } from "react-icons/ai";
import { VideoDetailsAPI } from '../../../utilis/APIs';

const PlayVideo = () => {
  
  const [videoDetails, setvideoDetails] = useState(null);  
  const {vidId} = useParams();
  
  useEffect(()=>{

        VideoDetailsAPI(`videos?part=contentDetails%2Csnippet%2Cstatistics&id=${vidId}`)
        .then((data)=> setvideoDetails(data.items[0]))
        console.log(videoDetails)

  },[vidId])
  
  
//   console.log(vidId)
  return (
    <div className=' w-[65%]'>
        <ReactPlayer width="full" height="500px" url={`https://www.youtube.com/watch?v=${vidId}`}  controls/>

        <h3 className='text-[20px] font-bold mt-3'>{videoDetails?.snippet?.title}</h3>

        <div className='flex justify-between my-3'>
            <div className='flex gap-5 items-center'>
                <h4 className='font-bold text-gray-300'>{videoDetails?.snippet?.channelTitle}</h4>
                <p className='bg-white text-black px-4 py-2 rounded-full'>View Channel</p>
            </div>
            <p className='flex items-center bg-[rgba(255,255,255,0.1)] px-4 gap-3'><span><AiFillLike /></span> {videoDetails?.statistics?.likeCount}</p>
        </div>

        <div className='mt-4 bg-[rgba(255,255,255,0.1)] px-3 py-4 rounded-lg'>
            <h4>{videoDetails?.statistics?.viewCount} views</h4>
            <p className='mt-2'>{videoDetails?.snippet?.description}</p>
        </div>
    </div>
  )
}

export default PlayVideo