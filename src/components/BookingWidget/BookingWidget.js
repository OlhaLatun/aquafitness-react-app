import React, { useState, useEffect } from 'react'
import './BookingWidget.scss'
import { bookings, timetable } from '../../fakeData'
import { SwimmerIcon } from '../Icons/Icons'


export default function BookingWidget(props) {

    const [day, setDay] = useState('')
    const [date, setDate] = useState('')

    const onDayChosen = (e) => {
        if (e.target.tagName === 'P') {
            setDay(e.target.innerText.slice(0, 2))
            setDate(e.target.children[1].innerText)
        }
    }

    const week = []
    let current = new Date()

    for (let i = 1; i <= 7; i++) {
        let days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']
        let first = current.getDate() - current.getDay() + i
        let d = new Date(current.setDate(first)).toLocaleDateString().slice(0, 10)
        week.push({ name: days[i - 1], date: d })
    }
    return(
         <div className='row booking-widget'>
            <div className='col-md-12 widget-header text-center p-2'>Реєстрація на заняття</div>
            <div className='col-md-12 widget-body d-flex  text-center align-items-center'>
                <div className='col-md-3 weekdays'>
                    {week.map(day => {
                        return <div className='day p-2' key={day.name} onClick={onDayChosen}>
                            <p className='m-0 '>{day.name} <br />
                                <span>{day.date}</span>
                            </p>
                        </div>
                    })}
                </div>
                <div className='col-md-9 widget-field'>
                    {day ? <TimeSlots day={day} date={date} user={props.user} /> : <h2>Оберіть дату</h2>}
                </div>
            </div>
        </div>
    )
}

function TimeSlots(props) {

    const spots = 10
    const [booked, setBookingStatus] = useState(false)
    const [timeslot, setTimeslot] = useState('')
    const { date, day, user } = props
    const timeslotsToRender = timetable.find(d => d.name === day).timeslots
    
    useEffect(() => {
      bookings[date] = {timeslots: []}  
    }, [date])

    const setBooking = (e) => {
        let { date, user } = props

        if (e.target.tagName === 'svg') {
            let timeslot = e.target.parentElement.attributes['data-time'].value
            let slot = bookings[date].timeslots.find(slot => slot.time === timeslot)
                if (slot) {
                   slot.users.push(user)
                } else {
                    bookings[date].timeslots.push({time: timeslot, users: [user]})
                }
               setBookingStatus(true)
               setTimeslot(timeslot)
        }
    }

    const rebook = () => {
         bookings[date].timeslots.map(slot => {
             if(slot.time === timeslot) {
                slot.users = slot.users.filter(u => u !== user)
             }
         });
        setBookingStatus(false)
        setTimeslot('')
    }
       
        return ( 
            booked ? <div>
                 <h2> Ви записані на тренування: {date}, {day}, {timeslot} </h2> 
                 <button className='btn btn-large btn-warning' onClick={rebook}> Змінити дату </button>
                 </div> : <div>
            {timeslotsToRender.map(t =>
                <div className='row flex-column m-1' key={t}>
                    <div className='col-md-12 time-slot d-flex align-items-center justify-content-center '>{t}</div>
                    <div className='col-md-12 d-flex flex-wrap avaliable-spots-container ' data-time={t} onClick={setBooking}>
                        {[...Array(spots)].map(el => < SwimmerIcon />)}
                    </div>
                </div>
            )}
        </div>   
        )
    }

