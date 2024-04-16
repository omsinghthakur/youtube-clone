import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import PlayVideo from '../components/PlayVideo'
import Recommendation from '../components/Recommendation'
import { useParams } from 'react-router-dom'

const Video = ({sidebar,category,setCategory,setSidebar}) => {
  
  const {categoryId,videoId} = useParams();
  console.log(categoryId,videoId);
  setSidebar(true)
  
  return (
    <>
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />
      
      <section className={sidebar?' w-full px-8 py-4 bg-gray-100 flex gap-4':'bg-gray-100 gap-4 flex max-w-screen-2xl ml-56 px-4 py-4'}>
        <div className='w-2/3'>
          <PlayVideo category={category} setCategory={setCategory} videoId={videoId}/>
        </div>
        <div className='w-1/3'>
          <Recommendation category={category}  categoryId={categoryId} videoId={videoId}/>
        </div>
      </section>
    </>
  )
}

export default Video