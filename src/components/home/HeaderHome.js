import React, { useState } from 'react';
import { ViewLogin, ShowLogin } from "../../asessts/js/script";
import { Link } from 'react-router-dom';

export const HeaderHome = () => {

    const [regitrar, setRegistrar] = useState(false);

    



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
                        <a href='#' onClick={ViewLogin}><ion-icon name="person-outline"></ion-icon>Acceder</a>
                        <Link to='/login'>Atención al cliente</Link>
                        <a href='tel:1-809-559-8844'>1-809-559-8844</a>
                    </nav>
                </div>

                <div className='header__login'>
                    <div className='row login_in'>
                        <div className='col-sm-12 col-md-6 login__form'>
                            <div className='login__show' onClick={ShowLogin}>
                                <span>X</span>
                            </div>
                            <h1>Accede o únete a Flight-Manager</h1>
                            {
                                (regitrar) ?
                                    <div className='row p-2'>
                                        <div className='col-md-6 mb-2 '>
                                            <label htmlFor="txtEmail">E-mail</label>
                                            <input className='form-control' id='txtEmail' type='text'/>
                                        </div>

                                        <div className='col col-md-6 mb-2 '>
                                            <label htmlFor="txtPass">Contraseña</label>
                                            <input className='form-control' id='txtPass' type='password' />
                                        </div>

                                    </div>

                                    :


                                    <div className='row p-2'>
                                        <div className='col-md-6 mb-2 '>
                                            <label htmlFor="txtNombre">Nombre</label>
                                            <input className='form-control' id='txtNombre' type='text' />
                                        </div>

                                        <div className='col col-md-6 mb-2 '>
                                            <label htmlFor="txtEmail">E-mail</label>
                                            <input className='form-control' id='txtEmail' type='email' />
                                        </div>

                                        <div className='col col-md-6 mb-2 '>
                                            <label htmlFor="txtPass">Contraseña</label>
                                            <input className='form-control' id='txtPass' type='password' />
                                        </div>


                                        <div className='col col-md-6 mb-2 '>
                                            <label htmlFor="txtTelef">Telefono</label>
                                            <input className='form-control' id='txtTelef' type='password' />
                                        </div>
                                    </div>
                            }
                            {
                                (regitrar) ?
                                    <div>
                                        <div className='col mb-2  login_btn'>
                                            <a>Iniciar Sesion</a>
                                        </div>
                                        <div className='col mb-2'>
                                            <a className='bg-primaty text-center' onClick={() => setRegistrar(false)}  >Registrar</a>
                                        </div>
                                    </div>
                                    :
                                    <div>
                                        <div className='col mb-2  login_btn'>
                                            <a>Registrar</a>
                                        </div>
                                        <div className='col mb-2'>
                                            <a className='bg-primaty text-center' onClick={() => setRegistrar(true)} >Login</a>
                                        </div>
                                    </div>

                            }
                        </div>


                        <div className='col-sm-12 col-md-6 '>
                            <div className='login__inf'>
                                <h2>Flight-Manager Consigue recompensas con Flight-Manager</h2>
                                <p>Canjea instantáneamente los puntos obtenidos en tus reservas mientras estés conectado a tu cuenta de usuario Aprende sobre Flight-Manager</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </header>
    )
}
