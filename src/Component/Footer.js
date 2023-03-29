import React from 'react'
import { ContextApi } from '../Context'

export const Footer = () => {
    const { isLoading } = ContextApi()
    return (
        <>
            {!isLoading &&
                <div className="container">
                    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                        <div className="col-md-4 d-flex align-items-center">
                            <span className="text-muted">© Somnath</span>
                        </div>
                    </footer>
                </div>
            }
        </>
    )
}
