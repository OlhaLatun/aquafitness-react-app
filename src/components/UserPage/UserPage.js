import React, { Component } from 'react'
import BookingWidget from '../BookingWidget'
import './UserPage.scss'

export default class UserPage extends Component {

    state = {
        isBooked: false
    }

    render() {
        const { isBooked } = this.state
        return <section className='container'>
            <div className='row text-end mt-2'><div className='col-md-12'><button className='btn btn-danger'>Вийти</button></div></div>
            <div className='row'> <h1>Вітаємо, User Name!</h1></div>
            <div className='row'>
                {isBooked ? <React.Fragment>
                    <p>Ви записані на заняття (date/time)</p>
                    <button className='btn btn-warning'>Відмінити заняття</button>
                </React.Fragment>
                    : <BookingWidget />
                }
            </div>
        </section>
    }
}

