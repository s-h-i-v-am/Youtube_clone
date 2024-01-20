import React from 'react'
import React, { useState } from 'react'
import SideBar from '../components/HomeComponents/SideBar'
import VideosList from '../components/HomeComponents/VideosList'

const Home = () => {

  const [Category, setCategory] = useState('News');  

  return (
    <div className='px-4 py-4 flex justify-between'>
      <SideBar category={Category} setCategory={setCategory} />
      <VideosList category={Category} />
    </div>
  )
}

export default Home