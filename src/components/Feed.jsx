import React, { useEffect, useState } from 'react'
import '../App.css'
import { Link, useParams } from 'react-router-dom'
import { API_KEY } from '../data'
import { value_converter } from '../data'
import moment from 'moment'
import '../App.css'

const Feed = ({ sidebar, category, setCategory}) => {

    const [videoList, setVideoList] = useState([]);
    const fetchVideos = async () => {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=75&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`)
        const data = await response.json()
        // console.log(data)
        setVideoList(data.items)
    }

    // console.log(videoList);

    useEffect(() => {
        fetchVideos();
    }, [category])

    return (
        <section className={sidebar ? 'feed max-w-screen-2xl px-4 py-4 gap-4 bg-gray-100 ml-24' : 'bg-gray-100 feed max-w-screen-2xl ml-56 px-4 py-4 '}>
            {
                videoList.map((video, index) => {
                    return (
                        <Link to={`/video/${video.snippet.categoryId}/${video.id}`} className='w-full' key={index}>
                            <div className='flex flex-col'>
                                <div>
                                    <img className='rounded-lg w-full' src={video.snippet.thumbnails.medium.url} alt="thumbnail" />
                                </div>
                                <div className='flex gap-2 '>
                                    {/* <div className=' w-[50px] h-[50px] my-4 rounded-full'><img className='rounded-full w-full h-full' src={video.snippet.thumbnails.default.url} alt="thumbnail" /></div> */}
                                    <div className='w-10/12'>
                                        <h2 className='mx-1 text-lg font-semibold mt-2'> {video.snippet.title} </h2>
                                        <p className='mx-1 font-semibold text-gray-500'>{video.snippet.channelTitle}</p>
                                        <p className='mx-1 text-sm text-gray-500'>{value_converter(video.statistics.viewCount)} Views &bull; {moment(video.snippet.publishedAt).fromNow()} </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </section>
    )
}

export default Feed