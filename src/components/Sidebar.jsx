import React from 'react'
import home from '../assets/home.png'
import game_icon from '../assets/game_icon.png'
import automobiles from '../assets/automobiles.png'
import music from '../assets/music.png'
import sports from '../assets/sports.png'
import news from '../assets/news.png'
import tech from '../assets/tech.png'
import entertainment from '../assets/entertainment.png'
import blogs from '../assets/blogs.png'
import jack from '../assets/jack.png'
import simon from '../assets/simon.png'
import tom from '../assets/tom.png'
import megan from '../assets/megan.png'
import cameron from '../assets/cameron.png'
import '../App.css'

const Sidebar = ({sidebar,category,setCategory}) => {
  return (
    <section className={sidebar?'hidden':'block absolute z-5'}>
        <div className='bg-white w-56 h-[100vh] fixed top-0 pt-20 '>
            <div className='flex flex-col px-6'>
                <div className='flex gap-4 px-2 py-2 cursor-pointer hover:bg-gray-100 rounded-lg' onClick={()=>{setCategory(0)}}>
                    <img className='w-6' src={home} /><p>Home</p>
                </div>
                <div className='flex gap-4 px-2 py-2 cursor-pointer hover:bg-gray-100 rounded-lg' onClick={()=>{setCategory(20)}}>
                    <img className='w-6' src={game_icon} /><p>Gaming</p>
                </div>
                <div className='flex gap-4 px-2 py-2 cursor-pointer hover:bg-gray-100 rounded-lg' onClick={()=>{setCategory(2)}}>
                    <img className='w-6' src={automobiles} /><p>Automobiles</p>
                </div>
                <div className='flex gap-4 px-2 py-2 cursor-pointer hover:bg-gray-100 rounded-lg' onClick={()=>{setCategory(17)}}>
                    <img className='w-6' src={sports} /><p>Sports</p>
                </div>
                <div className='flex gap-4 px-2 py-2 cursor-pointer hover:bg-gray-100 rounded-lg' onClick={()=>{setCategory(24)}}>
                    <img className='w-6' src={entertainment} /><p>Entertainment</p>
                </div>
                <div className='flex gap-4 px-2 py-2 cursor-pointer hover:bg-gray-100 rounded-lg' onClick={()=>{setCategory(28)}}>
                    <img className='w-6' src={tech} /><p>Tech</p>
                </div>
                <div className='flex gap-4 px-2 py-2 cursor-pointer hover:bg-gray-100 rounded-lg' onClick={()=>{setCategory(10)}}>
                    <img className='w-6' src={music} /><p>Music</p>
                </div>
                <div className='flex gap-4 px-2 py-2 cursor-pointer hover:bg-gray-100 rounded-lg' onClick={()=>{setCategory(22)}}>
                    <img className='w-6' src={blogs} /><p>Blogs</p>
                </div>
                <div className='flex gap-4 px-2 py-2 cursor-pointer hover:bg-gray-100 rounded-lg' onClick={()=>{setCategory(25)}}>
                    <img className='w-6' src={news} /><p>News</p>
                </div>
                <hr className='my-2' />
                <p className='font-semibold uppercase my-2'>subscribed</p>
                <div className='flex flex-col'> 
                    <div className='flex gap-4 px-2 py-2 cursor-pointer hover:bg-gray-100 rounded-lg'>
                        <img className='w-6 h-6 rounded-full' src={jack} /><p>PewDiePie</p>
                    </div>
                    <div className='flex gap-4 px-2 py-2 cursor-pointer hover:bg-gray-100 rounded-lg'>
                        <img className='w-6 h-6 rounded-full' src={simon} /><p>MrBeast</p>
                    </div>
                    <div className='flex gap-4 px-2 py-2 cursor-pointer hover:bg-gray-100 rounded-lg'>
                        <img className='w-6 h-6 rounded-full' src={tom} /><p>Justin Beiber</p>
                    </div>
                    <div className='flex gap-4 px-2 py-2 cursor-pointer hover:bg-gray-100 rounded-lg'>
                        <img className='w-6 h-6 rounded-full' src={megan} /><p>5-Minute Crafts</p>
                    </div>
                    <div className='flex gap-4 px-2 py-2 cursor-pointer hover:bg-gray-100 rounded-lg'>
                        <img className='w-6 h-6 rounded-full' src={cameron} /><p>Nas Daily</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Sidebar