import React from 'react';

const FeedHead = ({feedItem}) => (
    <div className="feed-head">
        <div id="serial-number">{feedItem.id+'.'}</div>
        <div>&nbsp;</div>
        <div><i className="upvote fas fa-caret-up"></i></div>
        <div>&nbsp;</div>
        <div className="post-title"><h2>{feedItem.title}</h2></div> 
        <div className="post-source">&nbsp;{`(${feedItem.source})`} </div>
    </div> 
)

export default FeedHead;