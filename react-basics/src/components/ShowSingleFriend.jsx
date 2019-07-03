import React from 'react'

export default function ShowSingleFriend(props) {
    return (
        <div>
        <h1> Currently friend that's being viewed</h1>
            <h1> {props.singlefriend} </h1>
        </div>
    )
}
