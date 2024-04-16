import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed';
import ShortSidebar from '../components/ShortSidebar';

const Home = ({sidebar,setSidebar}) => {

  const [category, setCategory] = useState(0)

  return (
    <>
      <Sidebar setSidebar={setSidebar} sidebar={sidebar} setCategory={setCategory} category={category} />
      <Feed sidebar={sidebar} setCategory={setCategory} category={category} />
      <ShortSidebar sidebar={sidebar} setCategory={setCategory} category={category} />
    </>
  )
}

export default Home