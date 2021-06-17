import React, { Component } from 'react'
import './BookingWidget.scss'

export default class BookingWidget extends Component {
    render() {
        const week = []
        let current = new Date()

        for (let i = 0; i <= 6; i++) {
            let days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']
            let first = current.getDate() - current.getDay() + i
            let d = new Date(current.setDate(first)).toLocaleDateString().slice(0, 10)
            week.push({ name: days[i], date: d })
        }

        return <section className='container booking-widget'>
            <div className='widget-header text-center p-2'>Реєстрація на заняття</div>
            <div className='widget-body d-flex flex-row text-center align-items-center'>
                <div className='col-md-3 weekdays'>
                    {week.map(day => {
                        return <div className='day p-2' key={day.name}>
                            <p className='m-0 '>{day.name}</p>
                            <span>{day.date}</span>
                        </div>
                    })}
                </div>
                <div className='col-md-9 widget-field'>
                    <h2>Оберіть дату</h2>
                </div>
            </div>


        </section>
    }
}