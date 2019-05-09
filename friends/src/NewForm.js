import React from 'react'


const NewForm = ({addNewFriend , changeHandler, id , name, age, email}) => {
    return (
        <div className='form'>
            <form onSubmit={e =>addNewFriend(e)}>
                <h1 className='form-title'>Form</h1>
                <input className='id' onChange={changeHandler} type='number' placeholder='ID' name='id' value={id}/>
                <div>
                <input className='name' onChange={changeHandler} type='text' placeholder='NAME' name='name' value={name}/>
                </div>
                <div>
                <input className='age' onChange={changeHandler} type='number' placeholder='AGE' name='age' value={age}/>
                </div>
                <div>
                <input className='email' onChange={changeHandler} type='email' placeholder='EMAIL' name='email' value={email}/>
                </div>
                <button type="submit">Add To List</button>
            </form>
        </div>
    )
}
export default NewForm;