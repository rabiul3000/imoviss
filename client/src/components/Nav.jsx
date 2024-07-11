import React from 'react'
import './nav.css'
import userStore from '../store/userStore'

const Nav = () => {

    const user = userStore((state) => state.user)

    return (
        <div className='nav'>
            <div className='nav__left'>
                <div>more</div>
                <div>help</div>
            </div>
            <div className='nav__right'>
                <div className='nav__rightTickMark'>🟢</div>
                <div className='nav__rightName'>{user ? 'rabiul' : 'login please'}</div>
            </div>
        </div>
    )
}

export default Nav