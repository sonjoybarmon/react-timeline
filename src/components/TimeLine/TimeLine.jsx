import React, { useContext } from 'react';
import { timeLineContext } from '../../App';
import TimeLineItem from '../TimeLineItem/TimeLineItem';
import './TimeLine.css'
const TimeLine = () => {
    const [timeLine, setTimeLine] = useContext(timeLineContext)
    return (
        <div className="container">
            <div className='timeline-container'>
                {
                    timeLine.map( timeLine => 
                            <TimeLineItem 
                            deta={timeLine}
                            key={timeLine.id}> 
                            </TimeLineItem>)
                }
            </div>
            
        </div>
    );
};

export default TimeLine;