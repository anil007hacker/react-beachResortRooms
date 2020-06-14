import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
import Title from '../components/Title'
import { Link } from 'react-router-dom'

//get unique val

const getUnique = (item, value) => {
    return [...new Set(item.map(item => item[value]))]
}

function RoomsFilter({rooms}) {
    const context = useContext(RoomContext);
    const {
        handleChange, 
        type, 
        capacity, 
        price, 
        minPrice, 
        maxPrice,
        minSize, 
        maxSize, 
        breakfast, 
        pets
    } = context;
//get unique types
    let types = getUnique(rooms, 'type');
//add all
    types = ['all', ...types];
    types = types.map((item, index)=> {
    return <option value={item} key = {index}>{item}</option>
    });

    let people = getUnique(rooms, 'capacity');
    people = people.map((item,index) => {
    return <option key={index} value={item}>{item}</option>
    })

    return (
        <section className="filter-container">
            <Title title = "search rooms"/>
            <form className="filter-form">
                {/*Select Type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select 
                        className="from-control" 
                        name="type" 
                        id="type" 
                        value={type}
                        onChange={handleChange}>
                           {types}
                        </select>
                </div>
                {/*End of Select Type */}
                {/*guests */}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select 
                        className="from-control" 
                        name="capacity" 
                        id="capacity" 
                        value={capacity}
                        onChange={handleChange}>
                           {people}
                        </select>
                </div>
                {/*end Guests */}
                {/* room price */}
                <div className = "form-group">
                    <label htmlFor="price">
                        room price ${price}
                    </label>
                    <input 
                    type="range" 
                    name="price" 
                    min={minPrice} 
                    max={maxPrice} 
                    id="price" 
                    value={price}
                     onChange={handleChange} 
                    className="form-control"/>
                </div>
                {/*end of room price */}
                {/*size of room*/}
                <div className="form-group">
                    <label htmlFor="size">
                        Room size
                    </label>
                    <div className="size-inputs">
                        <input type="number" 
                            name="minSize" 
                            id="size" 
                            value={minSize} 
                            onChange={handleChange} className="size-input"/>
                        
                        <input type="number" 
                            name="maxSize" 
                            id="size" 
                            value={maxSize} 
                            onChange={handleChange} className="size-input"/>

                    </div>
                </div>
                {/*end of size of room */}
                {/*extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange}/>
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="breakfast" checked={pets} onChange={handleChange}/>
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/*end of extras */}
                
            </form>
        </section>
    )
}

export default RoomsFilter
