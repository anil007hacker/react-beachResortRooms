import React, { Component } from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
import Title from './Title'

export default class Services extends Component {
    state = {
        services : [
            {
                icon : <FaCocktail/>,
                title : "Free Cocktails",
                info : "Free Cocktails on Arrival." 
            },
            {
                icon : <FaHiking/>,
                title : "Endless Hiking...",
                info : "Start your hiking from wherever you want to wherever you want." 
            },
            {
                icon : <FaShuttleVan/>,
                title : "Free Shuttle",
                info : "Free Pickup and DropOff facility from your respective places." 
            },
            {
                icon : <FaBeer/>,
                title : "Strongest Beers",
                info : "Beat and  Strongest Beer in Country-side." 
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title = "Services"/>
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
