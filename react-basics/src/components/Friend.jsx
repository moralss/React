import React from 'react'

export default function Friend(props) {
    return (
        <div>
            <span>{props.friend.name}</span>
            <p style={{fontSize:"10px"}}> {props.friend.text}</p>
            <button onClick={() => props.showSingleFriend(props.friend.name)}> show single user</button>
        </div>
    )
}
