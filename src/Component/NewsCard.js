import React, { useState, useEffect } from 'react'
import { ContextApi } from '../Context'
import { AgoTime, PublishedDate } from './PublishedDate'

export const NewsCard = ({ i }) => {
    const { Mode } = ContextApi()
    return (
        <>
            <div className="card m-2 overflow-hidden" style={{ width: "18rem" }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                    <span className="badge rounded-pill bg-danger"> {i.provider[0].name} </span>
                </div>
                {i.image && i.image.thumbnail && i.image.thumbnail.contentUrl
                    ?
                    <img src={i.image.thumbnail.contentUrl ? i.image.thumbnail.contentUrl : "https://i.ytimg.com/vi/1oO3GDAyHCc/maxresdefault.jpg"} alt={i.name} style={{ height: "15rem" }} />
                    :
                    <img src="https://i.ytimg.com/vi/1oO3GDAyHCc/maxresdefault.jpg" alt={i.name} style={{ height: "15rem" }} />
                }
                <div className={`card-body pe-2 text-bg-${Mode}`}>
                    <h5 className="card-title" style={{ height: "20%" }}><u>{i.name.slice(0, 45)}...</u></h5>
                    <p className="card-text m-0" style={{ height: "40%" }}>{i.description.slice(0, 90)}...</p>
                    <p><b>Published at : </b><PublishedDate time={i.datePublished} /> </p>
                    <a href={i.url} target="_blank" className="btn btn-primary" rel="noreferrer">Read More</a>
                </div>
            </div>
        </>
    )
}

export const SearchCard = ({ i }) => {
    const { Mode } = ContextApi()

    return (
        <>
            <div className="card mb-3 m-auto overflow-hidden" style={{ maxWidth: "600px" }}>
                <div className="row g-0">
                    <div className={`col-md-4 d-flex justify-content-center align-items-center overflow-hidden bg-${Mode}`}>
                        <img className='responsive' src={i.image?.thumbnail?.contentUrl ? i.image.thumbnail.contentUrl : "https://artsmidnorthcoast.com/wp-content/uploads/2014/05/no-image-available-icon-6.png"} alt={i.name} style={{ height: "10rem" }} />
                    </div>
                    <div className="col-md-8">
                        <div className={`card-body text-bg-${Mode}`}>
                            <a className='card-title' href={i.url} target="_blank" rel="noreferrer">
                                <strong className="d-inline-block mb-2 text-primary">{i.name}</strong>
                            </a>
                            <p className="card-text">{i.description}</p>
                            <div className='d-flex align-items-center'>
                                {i.provider[0]?.image?.thumbnail?.contentUrl
                                    ?
                                    <img src={i.provider[0].image.thumbnail.contentUrl} alt={i.name} style={{ height: "2rem" }} />
                                    :
                                    <b>Unknown Sources</b>
                                }
                                <p className="card-text ms-4"><small className="text-body-secondary"><AgoTime Time={i.datePublished} /></small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export const SlideCard = ({ NewsData }) => {

    const [groups, setGroups] = useState([]);

    useEffect(() => {
        const tempGroups = [];
        for (let i = 0; i < NewsData.length; i += 4) {
            tempGroups.push(NewsData.slice(i, i + 4));
        }
        setGroups(tempGroups);
    }, [NewsData]);
    return (
        <>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                <div className="carousel-inner">
                    {groups.map((group, index) => (
                        <div className={index === 0 ? 'carousel-item  active' : 'carousel-item '} key={index}>
                            <div className='d-flex justify-content-center flex-wrap'>
                                {group.map((item, i) => (
                                    <NewsCard i={item} key={i} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}