import React, { useEffect, useState } from 'react'
import BookingWidget from '../BookingWidget'
import './UserPage.scss'
import firebase from 'firebase'
import { Link } from 'react-router-dom'

export default function UserPage(props){

    const [userName, setUserName] = useState('')

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setUserName(user.displayName)
            }
        })
    })

    const onLogOut = () => props.userLoggedOut()
    
        return ( <section className='container'>
            <div className='row text-end mt-2'>
                <div className='col-md-12'>
                    <Link to='/' className='btn btn-danger'
                        onClick={onLogOut}>Вийти</Link>
                </div>
            </div>
            <div className='row'> <h1>Вітаємо, {userName}</h1></div>
             <BookingWidget user={userName} />
        </section>)
}

