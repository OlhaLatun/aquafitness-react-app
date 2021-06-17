import React from 'react'
import heart from './heart.png'
import slimBody from './slim-body.png'
import woman from './woman.png'
import './Cards.scss'


function Cards() {
    const cards = [
        {
            img: slimBody,
            name: 'fit-girl',
            title: 'Активні',
            description: 'Тим, хто живе у ритмі, слідкує за здоров\'ям та фігурою!'
        },
        {
            img: woman,
            name: 'old_lady',
            title: 'Люди у віці',
            description: 'Тим, хто бажає підтримувати здоров\'я та полегшити болі у суглобах'
        },
        {
            img: heart,
            name: 'heart',
            title: 'Усі охочі',
            description: 'Тим, хто бажає спробувати нове, весело та активно проводити час.'
        },
    ]
    return <section className="container mt-5 mb-4">
        <h2 className="card-title">Кому підходять заняття аквафітнесом?</h2>
        <div className="row mt-4">
            {cards.map(card => {
                return <div className="col-md-4 col-sm-12">
                    <div className="card" >
                        <img
                            src={card.img}
                            className="card-img-top"
                            alt={card.name}
                        />
                        <div className="card-body">
                            <h5 className="card-title">{card.title}</h5>
                            <p className="card-text">
                                {card.description}
                            </p>
                        </div>
                    </div>
                </div>
            })
            }
        </div>
    </section>
}

export default Cards