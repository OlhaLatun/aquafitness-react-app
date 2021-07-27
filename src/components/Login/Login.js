import React, { useState } from 'react'
import firebase from 'firebase'
import { StyledFirebaseAuth } from 'react-firebaseui'
import { firebaseConfig } from '../../firebaseConfig'
import { admins } from '../../fakeData/admins'

firebase.initializeApp(firebaseConfig)

function AdminLoginForm() {

    const onAdminLogin = (e) => {
        e.preventDefault()
        let email = e.target[0].value
        let password = e.target[1].value

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) =>  {
               const admin = admins.find(admin => admin.email === userCredential.user.email)  
                    if (admin) {
                        console.log('admin is logged in')
                    } else {
                        console.log('It seems you have no admin rights')
                    } 
            })
            .catch(e => console.log(e))
    }

        return <div className="row text-md-center">
            <div className='col-md-6 m-auto'>
                <form onSubmit={onAdminLogin}>
                    <div className="mb-3">
                        <label htmlFor="InputEmail" className="form-label">Email</label>
                        <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputPassword" className="form-label">Пароль</label>
                        <input type="password" className="form-control" id="InputPassword" />
                    </div>
                    <button className="btn btn-primary" type='submit'>Увійти</button>
                </form>
            </div>
        </div>
    
}

export default function Login() {

const [isAdmin, setIsAdmin] = useState(false)
const onAdminLogin = () => setIsAdmin(true)

const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/user/',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
};
    return ( <section className="container mt-5">
             <div className="row text-md-center">
                    <h2>Вітаємо у аквафітнес родині!</h2>
                    <p>Щоб забронювати місце на заняття, увійдіть в аккаунт за допомогою:</p>
                    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                    <button className='btn btn-info' href='#' onClick={onAdminLogin}>Увійти як адміністратор</button>
                    { isAdmin ? <AdminLoginForm /> : null}
                </div>
             </section>
        )
}

