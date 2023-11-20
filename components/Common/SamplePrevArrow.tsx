import React from 'react';

function SamplePrevArrow(props) {
    return (
        <div className="Arrows"  {...props}>
            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={9} fill="none" viewBox="0 0 14 9">
                <path fillRule="evenodd" d="M4.909.265a1 1 0 0 0-1.413.057l-3.231 3.5a1 1 0 0 0 0 1.357l3.231 3.5a1 1 0 0 0 1.47-1.357L3.284 5.5H13a1 1 0 1 0 0-2H3.284l1.682-1.822A1 1 0 0 0 4.909.265z" fill="#777E90" />
            </svg>
        </div>
    );
}

export default SamplePrevArrow;