import React from 'react';
import './index.css'

export const FriendList = (props) => {
    
    return (
        <div>
          {props.friends.map((friend,index) => {
              return <Friend {...friend} key={index}/>
          })}
        </div>
    )
}


const Friend = ({updateFriends , deleteFriends , id , name , age , email}) => {

    return(
        <div className='friendlist'>
        <h2>ID : {id}</h2>
        <h4>NAME : {name}</h4>
        <p>AGE : {age}</p>
        <p>EMAIL : {email}</p>
        {/* {id}------{name}------{age}------{email} */}
        <div className='buttons'>
        <button onClick={updateFriends} id={id} className='update'>Update</button>
        <button onClick={deleteFriends} id={id} className='delete'>Delete</button>
        </div>
        </div>
    )
}

export default FriendList