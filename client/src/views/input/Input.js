import React from 'react'

const Input = ({message,setMessage,sendMessage})=>{
    return (
        <form>
            <input
                type="text"
                className='input'
                placeholder='type a message...'
                value={message}
                onChange={(e)=> setMessage(e.target.value)}
                onKeyPress={(e)=> e.key=== 'Enter' ? sendMessage(e):null}
            />
            <button onClick={(e)=> sendMessage(e)}>Submit</button>
        </form>
    )
}

export default Input