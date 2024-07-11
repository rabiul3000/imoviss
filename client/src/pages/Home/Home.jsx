import React, { useState } from 'react'
import './home.css'
import Nav from '../../components/Nav'
import ChatList from '../../components/ChatList'
import Contacts from '../../components/Contacts'


const Home = () => {
  const [click, setClick] = useState(false)
  return (
    <div className='home'>
      <div>
        <Nav />
      </div>
      <div className='chatMenu'>
        <div className='chatMenu__title'>

          <div className='chatMenu__titleLeft'
            style={{ borderBottom: click ? '4px solid green' : '2px solid lightgrey' }}
            onClick={() => setClick(true)}>Chats
          </div>

          <div className='chatMenu__titleRight'
            style={{ borderBottom: click ? '2px solid lightgrey' : '4px solid green' }}
            onClick={() => setClick(false)}>Contacts
          </div>


        </div>
        {
          click ? <ChatList /> : <Contacts />
        }



      </div>




    </div >
  )
}

export default Home 