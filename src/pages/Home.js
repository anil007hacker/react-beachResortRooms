import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Services from '../components/Services'
import FeartuedRooms from '../components/FeaturedRooms'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <Hero>
                <Banner title="luxurious rooms" 
                        subtitle="Amazing Rooms Starting at $299">
                            <Link to ="/rooms" className="btn-primary">
                                Our Rooms...
                            </Link>
                </Banner>
            </Hero>
            <Services/>
            <FeartuedRooms/>
            
        </>
    )
}

export default Home
