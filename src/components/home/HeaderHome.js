import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export const HeaderHome = () => {

    return (
        <header className='container-fluid cnt'>
            <div className='header container'>
                <div className='row header_row'>
                    <div className='col-sm-12 col-md-8'>
                        <a href='/'>
                            <span className='header_flght'>Flight</span>-<span className='header_flght'>Manager</span>
                        </a>
                    </div>

                    <nav className='col-sm-12 col-md-4 nav_header'>
                        <Link to='/login'><ion-icon name="person-outline"></ion-icon>Acceder</Link>
                        <Link to='/login'>Atención al cliente</Link>
                        <a href='tel:1-809-559-8844'>1-809-559-8844</a>
                    </nav>
                </div>
            </div>
        </header>
    )
}
