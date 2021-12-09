import React from 'react'
import FeedBackCard from './FeedBackCard'

function InfoOfFeedBacks(props) {
    return (
        <div>
            {
                props.feedbacks.map((item,index) => {
                    return <FeedBackCard key={index} item={item}/>
                })
            }
        </div>
    )
}

export default InfoOfFeedBacks
