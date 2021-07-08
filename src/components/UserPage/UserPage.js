import React, { Component } from 'react'
import BookingWidget from '../BookingWidget'
import './UserPage.scss'
import firebase from 'firebase'
import { Link } from 'react-router-dom'

export default class UserPage extends Component {

    state = {
        isBooked: false,
        userName: ''
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ userName: user.displayName })
            }
        })
    }

    onLogOut = () => {
        this.props.userLoggedOut()
    }

    render() {
        const { isBooked } = this.state

        return <section className='container'>
            <div className='row text-end mt-2'>
                <div className='col-md-12'>
                    <Link to='/' className='btn btn-danger'
                        onClick={this.onLogOut}>Вийти</Link>
                </div>
            </div>
            <div className='row'> <h1>Вітаємо, {this.state.userName}</h1></div>

            {isBooked ?
                <React.Fragment>
                    <p>Ви записані на заняття (date/time)</p>
                    <button className='btn btn-warning'>Відмінити заняття</button>
                </React.Fragment>
                : <BookingWidget user={this.state.userName} />
            }

        </section>
    }
}

