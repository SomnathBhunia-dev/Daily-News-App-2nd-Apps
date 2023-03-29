import React, { useState, } from 'react'
import { Loading } from './Loading'
import { ContextApi } from '../Context'
import { SearchCard, SlideCard } from './NewsCard'

const FrontPage = () => {
    const { isLoading, Search, SearchResult, SearchText, NewsData, Mode } = ContextApi()
    const [Value, setValue] = useState('')

    return (
        <>
            <div className="container mt-4">
                <form
                    className="d-flex flex-column align-items-center" role="search"
                    onSubmit={(e) => {
                        e.preventDefault();
                        Search(Value);
                    }}
                >
                    <input
                        className="form-control me-2" type="search" placeholder="Type a KeyWord to Search News about it..." aria-label="Search" style={{color : Mode === 'dark' ? 'white' : '' , backgroundColor : Mode === 'dark' ? '#113468' : ''}}
                        onChange={(e) => setValue(e.target.value)} value={Value}
                    />
                    <button className={`btn btn-outline-${Mode === 'light' ? 'success' : "light"} mt-2`} type="submit" style={{ width: 'fix-content' }}> Search </button>
                </form>
            </div>
            <div className="container">
                {isLoading ? <Loading /> :
                    <>
                        {SearchText !== '' && SearchResult.length !== 0 ? <h2 className={`text-center text-${Mode === 'dark' ? 'light' : "dark"}`}> You Searched News For '{SearchText}'</h2> : ''}
                        <div className="container">
                            {Object.values(SearchResult).map((i) => <SearchCard i={i} key={i.name} />)}
                        </div>
                    </>}
            </div>
            {SearchResult.length === 0 &&
                <> <h2 className={`text-center mt-2 mb-2 text-${Mode === 'dark' ? 'light' : "dark"}`}>Some Recent News </h2>
                    <SlideCard NewsData={NewsData} />
                </>
            }


        </>
    )
}

export default FrontPage