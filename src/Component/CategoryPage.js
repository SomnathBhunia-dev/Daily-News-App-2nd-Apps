import React from 'react'
import { ContextApi } from '../Context'
import { Loading } from './Loading'
import { NewsCard } from './NewsCard'

export const CategoryPage = () => {
    const { NewsData, Topic, isLoading } = ContextApi()

    return (
        <>
            {isLoading ? <Loading /> :
                <>
                    <h2 className='text-center'>
                        Today's Top {Topic === 'ScienceAndTechnology' ? 'Science & Technology' : Topic} News</h2>

                    <div className="container d-flex justify-content-center flex-wrap">
                        {Object.values(NewsData).map((i) => {
                            return (
                                <NewsCard i={i} key={i.url} />
                            )
                        })}
                    </div>
                </>
            }
        </>
    )
}
