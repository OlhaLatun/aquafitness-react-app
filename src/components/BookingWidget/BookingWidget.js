import React, { Component } from 'react'
import './BookingWidget.scss'
import { bookings, timetable } from '../../fakeData'
import { SwimmerIcon } from '../Icons/Icons'


export default class BookingWidget extends Component {

    state = {
        day: '',
        date: ''
    }

    onDayChosen = (e) => {
        if (e.target.tagName == 'P') {
            this.setState({ day: e.target.innerText.slice(0, 2), date: e.target.children[1].innerText })
        }
    }

    render() {
        const week = []
        let current = new Date()

        for (let i = 1; i <= 7; i++) {
            let days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']
            let first = current.getDate() - current.getDay() + i
            let d = new Date(current.setDate(first)).toLocaleDateString().slice(0, 10)
            week.push({ name: days[i - 1], date: d })
        }
        return <div className='row booking-widget'>
            <div className='col-md-12 widget-header text-center p-2'>Реєстрація на заняття</div>
            <div className='col-md-12 widget-body d-flex  text-center align-items-center'>
                <div className='col-md-3 weekdays'>
                    {week.map(day => {
                        return <div className='day p-2' key={day.name} onClick={this.onDayChosen}>
                            <p className='m-0 '>{day.name} <br />
                                <span>{day.date}</span>
                            </p>
                        </div>
                    })}
                </div>
                <div className='col-md-9 widget-field'>
                    {this.state.day ? <TimeSlots day={this.state.day} date={this.state.date} user={this.props.user} /> : <h2>Оберіть дату</h2>}
                </div>
            </div>
        </div>
    }
}

class TimeSlots extends Component {

    state = {
        spots: 10,
    }

    setBooking = (e) => {
        if (e.target.tagName === 'svg') {
            let { date, user } = this.props
            let bookingInfo = {
                date: date,
                users: [user]
            }

            if (bookings.length === 0) {
                bookings.push(bookingInfo)
            } else {
                bookings.forEach(obj => {
                    if (obj.date !== date) {
                        bookings.push(bookingInfo)
                    } else {
                        if (obj.users.length < 10) {
                            obj.users.push(user)
                        } else {
                            console.log('there are no free spots')
                        }
                    }
                })
            }
        }
        console.log(bookings)
    }

    render() {
        const choosenDay = timetable.find(day => day.name === this.props.day)
        return (
            <div>
                {choosenDay.timeslots.map(t =>
                    <div className='row flex-column m-1'>
                        <div className='col-md-12 time-slot d-flex align-items-center justify-content-center'>{t}</div>
                        <div className='col-md-12 d-flex flex-wrap avaliable-spots-container' onClick={this.setBooking}>
                            {[...Array(this.state.spots)].map(el => < SwimmerIcon />)}
                        </div>
                    </div>
                )}
            </div>
        )
    }
}