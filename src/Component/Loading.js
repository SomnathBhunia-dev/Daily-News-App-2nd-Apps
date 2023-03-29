import React from 'react'

export const Loading = () => {
    return (
        <>
        <div className=" d-flex justify-content-center mt-5">

            <div className="spinner-grow text-primary me-2" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-secondary me-2" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-success me-2" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-danger me-2" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-warning me-2" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-info me-2" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>             
        </div>
        </>
    )
}
