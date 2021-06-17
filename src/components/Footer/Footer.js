import React from 'react'
import './Footer.scss'

function Footer() {
    return <section id='footer' className="container-fluid footer pt-5 mt-5 h-100">
        <div className='row'>
            <div className='col-md-4'>
                <p>Адреса: м. Київ, вул. Маршала Тимошенка 13б. метро Мінська</p>
            </div>
            <div className='col-md-4'>
                <a className='footer-link' href='https://www.facebook.com/%D0%90%D0%BA%D0%B2%D0%B0%D1%84%D0%B8%D1%82%D0%BD%D0%B5%D1%81-%D1%81%D0%B5%D0%BC%D1%8C%D1%8F-102724254651208'>Сторінка Аквафітнес</a> <br />
                <a className='footer-link' href=' https://www.facebook.com/grinchenkoswimming'>Сторінка басейну</a>
            </div>
            <div className='col-md-4'>
                <p>Пишіть нам! grinchswim@gmail.com</p>
            </div>
        </div>
    </section >
}

export default Footer