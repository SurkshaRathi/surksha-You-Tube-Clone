
import React from 'react';
import VideosItem from './VideosItem';

   const VedioList = ({videos, onSelectedVedio}) =>{ 
    const randerList= videos.map((video)=>{
    return (
 <VideosItem 
    key= {video.id.videoId}
    onVideoSelect= {onSelectedVedio}   
    video={video}/>
    );
    });
    return <div className="ui relaxed divided list">{randerList}</div>
}

export default  VedioList ;