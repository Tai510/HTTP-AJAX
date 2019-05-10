import React from 'react'


const NewForm = ({addNewFriend , changeHandler, id , name, age, email}) => {
    return (
        <div className='form'>
            <form onSubmit={addNewFriend}>
                <h1 className='form-title'>Form</h1>
                <input onChange={changeHandler} 
                type='number' 
                placeholder='ID' 
                name='id' 
                value={id}/>
                <div>
                <input onChange={changeHandler} 
                type='text' 
                placeholder='NAME' 
                name='name' 
                value={name}/>
                </div>
                <div>
                <input onChange={changeHandler} 
                type='number' 
                placeholder='AGE' 
                name='age' 
                value={age}/>
                </div>
                <div>
                <input onChange={changeHandler} 
                type='email' 
                placeholder='EMAIL' 
                name='email' 
                value={email}/>
                </div>
                <button type="submit">Add To List</button>
            </form>
        </div>
    )
}
export default NewForm;