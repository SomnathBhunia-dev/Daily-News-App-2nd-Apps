import React from 'react'
import { ContextApi } from '../Context'

export const Pagination = () => {
    const { changePage , pageSet} = ContextApi()
    return (
        <>

            <div className="container d-flex justify-content-between">
                <button type="button" className="btn btn-dark" onClick={()=> changePage(pageSet - 10)}>&larr; Previous</button>
                <button type="button" className="btn btn-dark" onClick={()=> changePage(pageSet + 10)} >Next &rarr;</button>
            </div>






            {/* <nav aria-label="...">
                <ul className="pagination pagination-lg justify-content-center">
                    <li className="page-item active" aria-current="page">
                        <button className="page-link" onClick={()=> changePage(0)} >1</button>
                    </li>
                    <li className="page-item"><button className="page-link" onClick={()=> changePage(10)}>2</button></li>
                    <li className="page-item"><button className="page-link" onClick={()=> changePage(20)}>3</button></li>
                </ul>
            </nav> */}
        </>
    )
}
