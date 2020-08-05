import React, {useEffect, useState} from 'react'
import {useParams} from "react-router";
import io from 'socket.io-client'
import InfoBar from "../info/InfoBar";
import Input from "../input/Input";
let socket

const Chat = ()=>{
    let params = useParams()
    const ENDPOINT ='localhost:5000'

    const [room, setRoom] =useState('')
    const [name, setName] =useState('')
    const [message, setMessage] =useState('')
    const [messages, setMessages] =useState([])

    useEffect(()=>{
        const {name, room} = params
        socket = io(ENDPOINT)

        setName(name)
        setRoom(room)

        socket.emit('join', {name,room}, ()=>{

        });

        return ()=>{
            socket.emit('disconnect')

            socket.off()
        }
    },[ENDPOINT, params])

    useEffect(()=>{
        socket.on('message', (message)=>{
            setMessages([...messages,message])
        })
    }, [messages])

    const sendMessage = (e)=>{
        e.preventDefault()
        if (message){
            socket.emit('sendMessage',message, ()=> setMessage(''))
        }
    }

    console.log(message)
    console.log(messages)
    useEffect(()=>{
        document.title = room
    })
    return (
        <main>
            <InfoBar/>
            <div className="container">
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
        </main>
    )

}

export default Chat