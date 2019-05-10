import React from 'react';
import './index.css'

export const FriendList = (props) => {
    
    return (
        <div>
          {props.friends.map((friend, id) => {
              return <Friend key={id} deleteFriends=
              {props.deleteFriends} {...friend} />
          })}
        </div>
    )
}


const Friend = ({ deleteFriends , id , name , age , email}) => {

    return(
    <div className='friendlist'>
        <h2>ID : {id}</h2>
        <h4>NAME : {name}</h4>
        <p>AGE : {age}</p>
        <p>EMAIL : {email}</p>
        {/* {id}------{name}------{age}------{email} */}
        <div className='buttons'>
        <button onClick={deleteFriends} id={id} className='delete'>Delete</button>
        </div>
    </div>
    )
}

export default FriendList