import React from 'react';
import '../TimeLineItem/TImeLineItem.css'

const TimeLineItem = (props) => {
    const {date, text,} = props.deta;
    return (
        <div className="timeline-item">
            <div className="timeline-item-content">
                <div className='d-flex justify-content-between'>
                    <span className="tag" style={{ background: props.deta.category.color }}>
                        {props.deta.category.tag}
                    </span>
                    <p>{date}</p>
                </div>
                <p>{text}</p>
                {props.deta.link && (
                    <a
                        href={props.deta.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {props.deta.link.text}
                    </a>
                )}
                <span className="circle" />
            </div>
        </div>
    );
};

export default TimeLineItem;