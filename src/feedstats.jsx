import React from 'react';
import moment from 'moment'

const FeedStats = ({feedItem}) => {
    const timeString =  moment(feedItem.uploaded_at).fromNow()
    const feedString = `${feedItem.points} points by ${feedItem.user} ${timeString} | flag | hide | ${feedItem.comments} comments | instapaper | save to pocket`
    return (
        <div>
            <p className="stat-text">{feedString}</p>
        </div>
    )
}

export default FeedStats;