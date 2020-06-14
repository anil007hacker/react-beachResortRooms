import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div>
            <Hero >
                <Banner title ="404" 
                    subtitle="Something Went Wrong.">
                        <Link to = "/" className="btn-primary">
                            Back to Home.
                        </Link>
                </Banner>
            </Hero>
       </div>
    )
}

export default Error
