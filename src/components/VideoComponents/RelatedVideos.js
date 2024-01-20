import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { RelatedVideosAPI } from '../../../utilis/APIs'
import {Link} from "react-router-dom"

const RelatedVideos = () => {
  
   const {vidId} = useParams();
   const [RelatedVideos, setRelatedVideos] = useState([]) 

  useEffect(()=>{

    RelatedVideosAPI(`search?relatedToVideoId=${vidId}&part=id%2Csnippet&type=video&maxResults=50`)
    .then((data)=> setRelatedVideos(data.items))
    // console.log(RelatedVideos);

  },[vidId])  

  return (
    <div className='w-[30%]'>
       {RelatedVideos?.map((vid)=>(
            <Link to={`/video/${vid?.id?.videoId}`} key={vid?.id?.videoId} className='w-full mb-3 flex justify-between p-2'>

                <div className='bg-red-700 w-[40%]'>
                    <img className='' src={vid?.snippet?.thumbnails?.medium?.url} alt="" />
                </div>

                <div className='w-[55%]'>
                    <p className='text-[14px]'>{vid?.snippet?.title}</p>
                    <p className='mt-2 text-gray-500'>{vid?.snippet?.channeTitle}</p>
                </div>

            </Link>
       ))}
    </div>
  )
}

export default RelatedVideos