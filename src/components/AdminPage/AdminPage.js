import React, { useState, useEffect } from 'react'
import './AdminPage.scss'
import { TrashIcon } from '../Icons/Icons'
import firebase from 'firebase'

const database = firebase.database();



export default function AdminPage() {

    const [activeTab, setTab] = useState('')

    const onTabClick = (e) => {
        setTab(e.target.dataset.tab)
    }

    return (
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
    const days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']

    const [timetable, setTimetable] = useState({})

    useEffect(() => {
        database.ref().on('value', (snapshot => setTimetable(snapshot.val())))
    }, [])

    const onFormSubmit = e => {
        e.preventDefault()
        const currentDay = e.target[0].value.toLowerCase()
        const currentTime = e.target[1].value

        if (timetable) {
            let exist = timetable[currentDay] ? timetable[currentDay].find(time => time === currentTime) : null
            if (!timetable[currentDay]) {
                firebase.database().ref().update({
                    [`${currentDay}`]: [currentTime]
                });
            } else if (!exist) {
                let id = timetable[currentDay].length
                firebase.database().ref().child(`${currentDay}`).update({
                    [`${id}`]: currentTime
                });
            }
        } else {
            firebase.database().ref().set({
                [`${currentDay}`]: [currentTime]
            });
        }
    }

    const onDeleteItem = e => {
        let dayID = e.nativeEvent.path.find(el => el.tagName === 'UL').id
        let timeID = e.nativeEvent.path.find(el => el.tagName === 'LI').id
        let removed = timetable[dayID].filter(el => el !== timeID)

        database.ref(`${dayID}`).set(removed)
    }

    const renderTimetable = () => {
        return days.map(day => {
            return <ul key={day} id={day}> <span className='day'>{day.toUpperCase()}</span>
                {timetable ? Object.entries(timetable).map(el => {
                    if (day === el[0]) {
                        return el[1].map(t => {
                            return <li key={t} id={t}>
                                {t} <span className='delete' onClick={(e) => onDeleteItem(e)}  >< TrashIcon /></span>
                            </li>
                        })
                    }
                }
                ) : null}
            </ul>
        })
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
                <input className='form-control' type='text' placeholder='Зазначте час' name='time' />
                <br />
                <button className='btn btn-info'> Зберегти</button>
            </form>
            <div className='timetable'>
                {renderTimetable()}
            </div>
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