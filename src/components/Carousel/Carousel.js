import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Alina from './alina.jpg'
import Julia from './julia.jpg'
import Kate from './kate.jpg'
import './Carousel.scss'

function MyCarousel() {
    return <section id='carousel' className="container carousel-container mt-5">
        <h2 className="mb-4 text-center">Наші тренери</h2>
        <div className="row align-items-center">
            <div className="col-md-5">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Alina}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3> Аліна </h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Julia}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Юлія</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Kate}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Катерина</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="col-md-7">
                <ul className="list-group">
                    <li className="list-group-item">
                        Аліна - аквафітнес півищеної складності.<br />
                        <i>Знає усі хитрощі гарного силового тренування.</i>
                    </li>
                    <li className="list-group-item">
                        Юля - драйв, позитив та емоції! <br /><i
                        >Використовує різноманітний інвентар від нудлз до м'ячів та
                caps.</i
                        >
                    </li>
                    <li className="list-group-item">
                        Катерина - гнучкість та сила. <br /><i
                        >Допоможе з поставою та реабілітацією.</i
                        >
                    </li>
                </ul>
            </div>
        </div>
    </section>
}

export default MyCarousel;