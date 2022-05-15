import React from 'react'

const Loading = () => {
    return (
        // <div>
        //     <button className="btn btn-primary" type="button" disabled>
        //         <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>{" "}
        //         Loading...
        //     </button>
        // </div>
        <div className="spinner-border m-5 text-warning" style={{width: "3rem", height: "3rem"}} role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )
}

export default Loading