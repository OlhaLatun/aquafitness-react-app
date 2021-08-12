import React, { useState, useEffect } from 'react'
import './AdminPage.scss'


export default function AdminPage() {

    const [activeTab, setTab] = useState('')

    const onTabClick = (e) => {
        setTab(e.target.dataset.tab)
    }
    
    return  (
        <section className='container'>
            <nav className='row text-end mt-2'>
                <ul className='nav justify-content-end' onClick={onTabClick}>
                    <li className='nav-item btn btn-info m-2' data-tab='timetable'>Розклад та тренери</li>
                    <li className='nav-item btn btn-warning m-2' data-tab='clients'>Кліенти</li>
                </ul>
            </nav>
            {activeTab === 'timetable' ? <TimetablePanel /> : <ClientsPanel />}
        </section>
    )
}

function TimetablePanel() {

    let timetable = []

    useEffect(() => {
        timetable.push({name: '', timeslots: []})
    }, [])

    const onFormSubmit = e => {
        e.preventDefault()
        

        timetable.forEach(day => {
            if (day.name === e.target[0].value) {
                day.timeslots.push(e.target[1].value)
            } else {
                timetable.push({name: e.target[0].value, timeslots: [e.target[1].value]})
            }
        })
       
        console.log(timetable)
    }

    return (
        <div className='row'>
        <h2> Тут можна встановити розклад </h2>
        <form onSubmit={onFormSubmit}>
        <label htmlFor='day'>Оберіть день</label>
        <select className='form-select' name='day'>
        <option value='пн'>ПН</option>
        <option value='вт'>ВТ</option>
        <option value='ср'>СР</option>
        <option value='чт'>ЧТ</option>
        <option value='пт'>ПТ</option>
        <option value='сб'>СБ</option>
        <option value='вс'>ВС</option>
        </select> 
        <br />
        <label htmlFor='time'>Уведіть час у форматі "год:хв". Наприклад: 7:10, 10:00 </label>
        <input  className='form-control' type='text' placeholder='Зазначте час' name='time'/>
        <br />
        <button className='btn btn-info'> Зберегти</button>
        </form>
        
        </div>
    )
}

function ClientsPanel() {
    return (
        <div className='row'>
        <h2> Список клієнтів, що записалися на заняття </h2>
        </div>
    )
}