import React from 'react'
import mainIMG from './all.JPG'
import './Jumbotron.scss'

function Jumbotron() {
    return <section id='jumbotron' className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="jumbotron bg-white">
                    <h1 className="display-4">Привіт, красуне!</h1>
                    <p className="lead">Раді бачити тебе у нашій Аква-родині</p>
                    <hr className="my-4" />
                    <p>
                        Простою мовою, аквафітнес - фізичні вправи у воді. Чому це так
                        привабливо? Уявіть тренування на якому ви одночасно спалюєте
                        калорії, насолоджуєтеся собою, покращуєте жіноче здоров'я та
                        сповнюєтеся позитивом. Вода тонізує, заряджає, надихає! А під
                        музику ще й пританцьовувати класно!
                        </p>
                    <button className="btn jumbo-btn btn-lg">Дізнатися більше</button>
                </div>
            </div>
            <div className="col-md-6"><img className="w-100 mb-4 main-img" src={mainIMG} alt="auqateam" /></div>
        </div>
    </section>
}

export default Jumbotron