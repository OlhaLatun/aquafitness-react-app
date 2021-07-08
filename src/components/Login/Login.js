import React, { Component } from 'react'
import firebase from 'firebase'
import { StyledFirebaseAuth } from 'react-firebaseui'
import { firebaseConfig } from '../../firebaseConfig'
import { Link } from 'react-router-dom'

firebase.initializeApp(firebaseConfig)

class AdminLoginForm extends Component {

    adminLoggedIn = (e) => {
        e.preventDefault()
        let email = e.target[0].value
        let password = e.target[1].value

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => console.log(userCredential.user))
            .catch(e => console.log(e))
    }
    render() {
        return <div className="row text-md-center">
            <div className='col-md-6 m-auto'>
                <form onSubmit={this.adminLoggedIn}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Пароль</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <Link to='/admin' className="btn btn-primary" type='submit'>Увійти</Link>
                </form>
            </div>
        </div>
    }
}

export default class Login extends Component {

    state = {
        admin: false
    }

    uiConfig = {
        signInFlow: 'popup',
        signInSuccessUrl: '/user/',
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ],
    };

    adminSignIn = () => {
        this.setState({ admin: true })
    }

    render() {

        return <section className="container mt-5">
            <div className="row text-md-center">
                <h2>Вітаємо у аквафітнес родині!</h2>
                <p>Щоб забронювати місце на заняття, увійдіть в аккаунт за допомогою:</p>
                <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
                <a href='#' onClick={this.adminSignIn}>Увійти як адміністратор</a>
                {this.state.admin ? <AdminLoginForm /> : null}
            </div>
        </section>
    }
}

