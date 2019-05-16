import React from 'react';
import FeedHead from "./feedhead.jsx"
import FeedStats from "./feedstats.jsx"

const NewsListItem = ({feeds}) => {
    return(
        <div>
            <div className="feed-list">
                {feeds.map(feed => (
                    <div key={feed.id} className="feed-item">
                        <FeedHead  feedItem={feed}/>
                        <FeedStats feedItem={feed}/>
                    </div>
                ))}
            </div>
        </div>    
    )
}

export default NewsListItem;