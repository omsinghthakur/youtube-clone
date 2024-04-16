import React, { useEffect, useState } from 'react'
import video from '../assets/video.mp4'
import like from '../assets/like.png'
import dislike from '../assets/dislike.png'
import share from '../assets/share.png'
import save from '../assets/save.png'
import jack from '../assets/jack.png'
import { useParams } from 'react-router-dom'
import { API_KEY } from '../data'
import { value_converter } from '../data'
import moment from 'moment'

const PlayVideo = ({category}) => {

    const { categoryId, videoId} = useParams();
    console.log(categoryId, videoId);
    const [videoData, setVideoData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentData, setCommentData] = useState([]);

    const fetchVideo = async () => {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`)
        const data = await response.json()
        setVideoData(data.items[0])
    }

    const fetchChannelData = async () => {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${videoData.snippet.channelId}&key=${API_KEY}`)
        const data = await response.json();
        setChannelData(data.items[0])
    }
    // console.log(channelData);
    useEffect(() => {
        fetchChannelData()
    }, [videoData])

    useEffect(() => {
        fetchVideo()
    }, [videoId])
    // console.log(videoData);

    const fetchComments = async () => {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`)
        const data = await response.json()
        setCommentData(data.items)
    }
    // console.log(commentData);
    useEffect(() => {
        fetchComments()
    }, [videoId])

    return (
        <>
            <div className='w-full'>
                {/* <video src={video} controls autoplay muted /> */}
                <iframe className='w-full h-[40vw]' src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <h2 className='text-2xl font-semibold py-2'>{videoData ? videoData.snippet.title : 'Title here'}</h2>
                <div className='flex justify-between border-b-2 border-gray-300 pb-2 mb-4'>
                    <p>{videoData ? value_converter(videoData.statistics.viewCount) : ''} Views &bull; {videoData ? moment(videoData.snippet.publishedAt).fromNow() : ''} </p>
                    <div className='flex gap-6 items-center'>
                        <span className='flex gap-1 items-center'><img className='w-6 h-6' src={like} alt='' /> {videoData ? value_converter(videoData.statistics.likeCount) : ''} </span>
                        <span className='flex gap-1 items-center'><img className='w-6 h-6' src={dislike} alt='' />  </span>
                        <span className='flex gap-1 items-center'><img className='w-6 h-6' src={share} alt='' /> Share</span>
                        <span className='flex gap-1 items-center'><img className='w-6 h-6' src={save} alt='' /> Save </span>
                    </div>
                </div>
                <div>
                    <div className='flex gap-4 items-center '>
                        <div className='flex self-start py-1'><img className='w-10 h-10 rounded-full' src={channelData ? channelData.snippet.thumbnails.default.url : ''} alt='' /></div>
                        <div className='w-full flex gap-4 flex-col border-b-2 border-gray-300 pb-2'>
                            <div className='w-full flex items-center justify-between'>
                                <div>
                                    <h2 className='font-bold'>{videoData ? videoData.snippet.channelTitle : ''}</h2>
                                    <p className='text-sm font-semibold'>{channelData ? value_converter(channelData.statistics.subscriberCount) : ''} Subscribers</p>
                                </div>
                                <button className=' px-4 py-2 text-white rounded bg-red-600 hover:opacity-85'>Subscribe</button>
                            </div>
                            <p> {videoData ? videoData.snippet.description : ''} </p>
                        </div>
                    </div>
                    <div className=' ml-10 px-4 py-4 '>
                        <p className='capitalize font-semibold text-lg'>{videoData ? videoData.statistics.commentCount : ''} Comments</p>
                        {
                            commentData.map((item, index) => {
                                return (
                                    <div className='flex gap-4 mb-4 '>
                                        <div className='flex self-start py-1'><img className='w-10 h-10 rounded-full' src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt='' /></div>
                                        <div className='flex flex-col gap-1 w-full'>
                                            <p><strong>{item.snippet.topLevelComment.snippet.authorDisplayName} </strong> {item.snippet.topLevelComment.publishedAt}</p>
                                            <p >{item.snippet.topLevelComment.snippet.textDisplay}</p>
                                            <div className='flex gap-6 items-center'>
                                                <span className='flex gap-1 items-center'><img className='w-6 h-6' src={like} alt='' /> {value_converter(item.snippet.topLevelComment.snippet.likeCount)} </span>
                                                <span className='flex gap-1 items-center'><img className='w-6 h-6' src={dislike} alt='' />  </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default PlayVideo