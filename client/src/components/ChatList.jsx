import React, { useState } from 'react'
import './chatList.css'


const ChatList = () => {
  const [chats, setChats] = useState([
    {
      name: 'apple',
      avatar: 'A'
    },
    {
      name: 'Google',
      avatar: 'G'
    },
    {
      name: 'SnapChat',
      avatar: 'S'
    },
    {
      name: 'Whatsapp',
      avatar: 'W'
    },
    {
      name: 'Bigo',
      avatar: 'B'
    },
    {
      name: 'Yahoo',
      avatar: 'Y'
    },
  ])


  return (
    <div className='chatList'>
      {
        chats.map((chat, index) => (
          <div key={index} className='chats'>

            <div className='chat__avatar'>
              {chat.avatar}
            </div>

            <div className='chat__name'>
              {chat.name}
            </div>

          </div>
        ))
      }
    </div>
  )
}

export default ChatList