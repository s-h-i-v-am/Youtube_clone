import React, { useEffect, useState } from 'react'
import { FetchAPI } from '../../../utilis/APIs'
import ShimmerCard from './ShimmerCard';
import {Link} from "react-router-dom"

const VideosList = ({category}) => {

  const [Videos, setVideos] = useState([]);

  
  useEffect(()=>{
    
    setVideos([])
    FetchAPI(`search?q=${category}&part=snippet%2Cid`)
    .then((data)=> setVideos(data.items))

  },[category])  
      
  return (
    <div className='w-[80%]'>
        <h1 className='text-[30px]'><span className='font-bold text-red-600'>{category}</span> Videos</h1>

        {
            Videos.length>0 ? 
            (<> 
            <div className='flex flex-wrap justify-between gap-4 mt-6'>
            {Videos.map((item)=>(

              <Link className='cursor-pointer mt-4 w-[30%] overflow-hidden' to={`/video/${item.id.videoId}`} key={item.id.videoId}>
                  
                  <div className='h-[225px] '>
                      <img className='w-full h-full rounded-xl' src={item.snippet.thumbnails.medium.url} alt="" />
                  </div>
                  
                  <div className='mt-4'>
                      <h3 className='font-medium text-[16px] mb-2'>{item.snippet.title}</h3>
                      <span>{item.snippet.channelTitle}</span>
                  </div>

              </Link>

            ))}
            </div> 
            </>) :

            (<div className='flex flex-wrap justify-between gap-8 mt-6'>
              {[...Array(50)].map((_,i)=>(
                <ShimmerCard />
              ))}
            </div>)
        }

    </div>
  )
}

export default VideosList