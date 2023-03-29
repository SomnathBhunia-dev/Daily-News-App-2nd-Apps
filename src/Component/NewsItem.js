import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, NewsUrl, time, author, source, bg } = this.props
        return (
            <div className='shadow-lg  rounded' style={{ height: "90%" }}>
                <div className={`card my-2 bg-${bg}`} style={{ height: "100%" }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                        <span className="badge rounded-pill bg-danger"> {source} </span>
                    </div>
                    <img style={{ height: "15rem" }} src={!imageUrl ? "https://i.ytimg.com/vi/1oO3GDAyHCc/maxresdefault.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 style={{ height: "20%" }} className="card-title">{title}...</h5>
                        <p style={{ height: "25%" }} className="card-text">{!description ? title : description}...</p>
                        <p style={{ height: "20%" }} className="card-text"><small className="text-muted">Last updated At {new Date(time).toDateString()}, By {!author ? "Unknown" : author}</small></p>
                        <a href={NewsUrl} target="_blank" className="btn btn-sm btn-primary" rel="noreferrer">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
