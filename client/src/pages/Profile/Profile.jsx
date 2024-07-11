import axios from 'axios'
import './profile.css'
import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import burl from '../../utils/burl'
import userStore from '../../store/userStore'

const Profile = () => {

    const user = userStore((state) => state.user)



    return (
        <div className='profile'>
            <h1>Profile</h1><br /><br />
            <h2> Phonee number: {user?.phoneNumber} </h2>
            <p> Id: {user?._id} </p>
            <small> version: {user?.__v} </small>

        </div>
    )
}

export default Profile
