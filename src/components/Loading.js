import React from 'react'

const Loading = () => {
    return (
        <div className='text-center'>
            <div className="spinner-border m-4 text-primary" style={{ width: "5rem", height: "5rem" }} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loading