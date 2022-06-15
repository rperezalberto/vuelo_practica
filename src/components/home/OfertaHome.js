import React from 'react';
import fll from '../../asessts/img/FLL-r2x.jpg';
import las from '../../asessts/img/LAS-r2x.jpg';
import orl from '../../asessts/img/ORL-r2x.jpg';

export const OfertaHome = () => {
    return (
        <section className='oferta container'>
            <div className='row'>
                <div>
                    <h2>¡No Te Pierdas Estas Ofertas!*</h2>
                </div>
                {/* Card New York Ofertas */}
                <div className='col-sm-12 col-md-4 oferta_cont'>
                    <div className='oferta_img'>
                        <img src={fll} />
                    </div>

                    <div className='oferta_tl_cont'>
                        <div className='oferta_title'>
                            <a href='#'>
                                <span>New ⇌ York</span>
                                <span>Ida y Vuelta | jun 18 - jun 22</span>
                                <span>$200</span>
                            </a>
                        </div>

                        <a className='oferta_btn'>Reserva Ahora</a>
                    </div>
                </div>

                {/* Card Dener Ofertas */}
                <div className='col-sm-12 col-md-4 oferta_cont'>
                    <div className='oferta_img'>
                        <img src={las} />
                    </div>

                    <div className='oferta_tl_cont'>
                        <div className='oferta_title'>
                            <a href='#'>
                                <span>Dener ⇌ Las Vegas </span>
                                <span>Ida y Vuelta | jun 25 - jun 29</span>
                                <span>$111</span>
                            </a>
                        </div>
                        <a className='oferta_btn'>Reserva Ahora</a>

                    </div>
                </div>

                {/* Card Philadelphia Ofertas */}
                <div className='col-sm-12 col-md-4 oferta_cont'>
                    <div className='oferta_img'>
                        <img src={orl} />
                    </div>

                    <div className='oferta_tl_cont'>
                        <div className='oferta_title'>
                            <a href='#'>
                                <span>Philadelphia ⇌ Orlan</span>
                                <span>Ida y Vuelta | jun 18 - jun 22</span>
                                <span>$150</span>
                            </a>
                        </div>

                        <a className='oferta_btn'>Reserva Ahora</a>
                    </div>
                </div>

            </div>
        </section>
    )
}
