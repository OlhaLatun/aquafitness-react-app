import React, { Component } from 'react'
import firebase from 'firebase'
import { StyledFirebaseAuth } from 'react-firebaseui'
import { firebaseConfig } from '../../firebaseConfig'
import { Link } from 'react-router-dom'

firebase.initializeApp(firebaseConfig)

const user = firebase.auth().currentUser
console.log(user)
const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/user/',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
};


export default class Login extends Component {

    render() {
        return <section className="container mt-5">
            <div className="row text-md-center">
                <h2>Вітаємо у аквафітнес родині!</h2>
                <p>Щоб забронювати місце на заняття, увійдіть в аккаунт за допомогою:</p>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                <Link to='/admin'>Увійти як адміністратор</Link>
            </div>
        </section>
    }
}

