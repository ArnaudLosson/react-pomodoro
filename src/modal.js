import React from 'react'
import Pomodoro from './pomodoro'

export default function Modal(props) {
    return (
        <div className="modal">
            <div className="modalContainer">
                <p>Break Time, maybe a coffe?</p>
                <button onClick={() => props.setModal(false)}>Close</button>
            </div>
        </div>
    )
}