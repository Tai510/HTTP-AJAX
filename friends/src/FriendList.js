import React from 'react';

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
        <div>{id}------{name}------{age}------{email}</div>
    )
}

export default FriendList