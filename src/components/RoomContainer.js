import React from 'react'
import RoomFilter from './RoomFilter.js'
import RoomList from './RoomList.js'
import { withRoomConsumer } from '../context'
import Loading from './Loading'

function RoomContainer({context}){
    const {loading, sortedRooms, rooms} = context;

    if(loading){
         return <Loading/>
    }
        return (
            <>
                <RoomFilter rooms={rooms}/>
                <RoomList rooms={sortedRooms}/>
            </>
        ) 
}


export default withRoomConsumer(RoomContainer)

// import React from 'react'
// import RoomFilter from './RoomFilter.js'
// import RoomList from './RoomList.js'
// import {RoomConsumer} from '../context'
// import Loading from './Loading'

// function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             {
//                 (value) => {
//                     const {loading, sortedRooms, rooms} = value
//                 if(loading){
//                     return <Loading/>
//                 }
//                     return (
//                         <div>
//                             Hello from Rooms Container
//                             <RoomFilter rooms={rooms}/>
//                             <RoomList rooms={sortedRooms}/>
//                         </div>
//                     )
//                 }
//             }
//         </RoomConsumer>
//     )
// }

// export default RoomsContainer