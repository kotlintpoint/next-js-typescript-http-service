import React from 'react';

function SampleNextArrow(props) {
    return (
        <div className="Arrows" {...props}>
            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={9} fill="none" viewBox="0 0 14 9">
                <path fillRule="evenodd" d="M9.091.265a1 1 0 0 1 1.413.057l3.231 3.5a1 1 0 0 1 0 1.357l-3.231 3.5a1 1 0 0 1-1.47-1.357L10.716 5.5H1a1 1 0 1 1 0-2h9.716L9.034 1.678A1 1 0 0 1 9.091.265z" fill="#777E90" />
            </svg>
        </div>
    );
}

export default SampleNextArrow;