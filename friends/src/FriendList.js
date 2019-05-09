import React from 'react';
import './index.css'

export const FriendList = (props) => {
    
    return (
        <div>
          {/* {props.friends.map((item , index) => {
              return <FriendList key={index} item = {item} />
          })} */}
          {props.friends.map((friend,index) => {
              return <Friend {...friend} key={index}/>
          })}
        </div>
    )
}


const Friend = ({id , name , age , email}) => {

    return(
        <div className='friendlist'>
        <h2>ID : {id}</h2>
        <h4>NAME : {name}</h4>
        <p>AGE : {age}</p>
        <p>EMAIL : {email}</p>
        {/* {id}------{name}------{age}------{email} */}
        <div className='buttons'>
        <button  className='update'>Update</button>
        <button  className='delete'>Delete</button>
        </div>
        </div>
    )
}

export default FriendList