import React, { useContext } from 'react'
import plusImg from '../assets/plus.svg'
import GlobalContext from '../context/GlobalContext'

export default function CreateEventButton() {
    const { setShowEventModal } =  useContext(GlobalContext)
    return (
        <button onClick={() => setShowEventModal(true)} className="border py-2 p-2 rounded-full flex item-center shadow-md hover:shadow-xl">
            <img src={plusImg} alt="create_event" className="w-7 h-7"/>
            <span className="pl-3 pr-7">
                Create
            </span>
        </button>
    )
}
