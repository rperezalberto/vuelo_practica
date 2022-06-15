import React from 'react'

export const EscogeHome = () => {
    return (
        <section className='escoge'>
            <h2>¡Coge tu vuelo con Flight-Manager!</h2>
            <div className='row escoge__cont'>

                {/* Comparador */}
                <div className='col-sm-12 col-md-col-4 col-lg-4 escoge__card'>
                    <ion-icon name="ribbon-outline"></ion-icon>
                    <span>Comparador rápido de vuelos</span>
                    <span>Encuentra los vuelos más baratos en pocos segundos, gracias al buscador de Flight-Manager que compara miles de rutas y te propone las mejores combinaciones de billetes de avión de cualquier compañía aérea.</span>
                </div>

                {/* Rutas */}
                <div className='col-sm-12 col-md-col-4 col-lg-4 escoge__card'>
                    <ion-icon name="rocket-outline"></ion-icon>
                    <span>Rutas aéreas a la carta</span>
                    <span>Con Flight-Manager puedes elegir cómodamente entre muchísimas combinaciones de vuelo. Indica tus preferencias y encuentra los billetes de avión ideales para ti al mejor precio posible.</span>
                </div>

                {/* Reseñas */}
                <div className='col-sm-12 col-md-col-4 col-lg-4 escoge__card'>
                    <ion-icon name="shield-checkmark-outline"></ion-icon>
                    <span>Reseñas de compañías aéreas</span>
                    <span>¿Quieres saber cuáles son las compañías que ofrecen la mejor experiencia de vuelo? Descúbrelo gracias a las opiniones de nuestros usuarios. Añade tu propia opinión y consulta la puntuación media de cada compañía.</span>
                </div>

            </div>
        </section>
    )
}
