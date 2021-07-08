import React, { Component } from 'react'
import './Schedule.scss'
import { Link } from 'react-router-dom'

export default class Schedule extends Component {

    render() {
        return <section id='schedule' className='container schedule-container mt-5'>
            <h2>Розклад занять</h2>
            <table className='schedule-table'>
                <thead>
                    <tr>
                        <td>
                            ПН
                        </td>
                        <td>
                            ВТ
                        </td>
                        <td>
                            СР
                        </td>
                        <td>
                            ЧТ
                        </td>
                        <td>
                            ПТ
                        </td>
                        <td>
                            СБ
                        </td>
                        <td>
                            ВС
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>&nbsp;</td>
                        <td>
                            7:10
                        </td>
                        <td>&nbsp;</td>
                        <td>
                            7:10
                        </td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>
                            8:50
                        </td>
                        <td>&nbsp;</td>
                        <td>
                            8:50
                        </td>
                        <td>&nbsp;</td>
                        <td>
                            9:30
                            <p>Прайм-тайм</p>
                        </td>
                        <td>
                            9:30
                            <p>Прайм-тайм</p>
                        </td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>
                            11:00
                        </td>
                        <td>&nbsp;</td>
                        <td>
                            11:00
                        </td>
                        <td>&nbsp;</td>
                        <td>
                            11:00
                            <p>Прайм-тайм</p>
                        </td>
                        <td>
                            11:00
                            <p>Прайм-тайм</p>
                        </td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>16:20</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>
                            19:00
                            <p>Прайм-тайм</p>
                        </td>
                        <td>&nbsp;</td>
                        <td>
                            19:00
                            <p>Прайм-тайм</p>
                        </td>
                        <td>&nbsp;</td>
                        <td>
                            19:00
                            <p>Прайм-тайм</p>
                        </td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                </tbody>
            </table>
            <span className='mt-2'>Прайм-тайм – час, коли відвідуваність максимальна. Встигайте зареєструватись.</span>
            <span> <Link to='/login' className='btn btn-lg btn-warning mt-2'>Забронювати місце</Link> </span>
        </section>
    }
}