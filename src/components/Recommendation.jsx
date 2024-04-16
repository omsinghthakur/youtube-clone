import React, { useEffect, useState } from 'react'
import { API_KEY, value_converter } from '../data'
import moment from 'moment';
import { Link, useParams } from 'react-router-dom';

const Recommendation = ({categoryId}) => {
    
    console.log(categoryId);
    const [recommendedVideo, setRecommendedVideo] = useState([]);
    const fetchRecommendedVideos = async () => {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`)
        const data = await response.json()
        setRecommendedVideo(data.items)
    }
    useEffect(()=>{
        fetchRecommendedVideos()
    },[categoryId])
    console.log(recommendedVideo);
    return (
        <>
            <section className='flex flex-col gap-4'>
                {
                    recommendedVideo.map((video, index) => {
                        return (
                            <Link to={`/video/${video.snippet.categoryId}/${video.id}`} className='flex w-full' key={video.id}>
                                <img className='w-[360px] h-[140px] bg-cover' src={video.snippet.thumbnails.medium.url} alt='recommended video thumbnail' />
                                <div className='w-full px-2 flex flex-col gap-1 items-start'>
                                    <h2 className='text-sm font-semibold'>{video.snippet.title}</h2>
                                    <p className='font-bold text-sm'>{video.snippet.channelTitle}</p>
                                    <p className='text-sm text-gray-500'>{value_converter(video.statistics.viewCount)} Views &bull; {moment(video.snippet.publishedAt).fromNow()}</p>
                                </div>
                            </Link>
                        )
                    })
                }

            </section>
        </>
    )
}

export default Recommendation