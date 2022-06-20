import React, {useContext} from 'react';
import userLogo from '../../asessts/img/userIcon.svg'

import {DataContent} from '../../contents/LoginContents';

export const UsarioAdmin = () => {
    const {logSession} = useContext(DataContent)
    return (
        <section className='userAdmin'>
            <div className='row'>
                <div className='col-sm-12 col-md-2 userAdmin__menu'>
                    <div className='userAdmin__info'>
                        <img src={userLogo} />
                        <div>
                            <span>Nombre: </span>
                            <span>{logSession.name}</span>
                        </div>

                        <div>
                            <span>Email: </span>
                            <span>{logSession.email}</span>
                        </div>

                        <div>
                            <span>Telefono: </span>
                            <span>{logSession.telefono}</span>
                        </div>

                    </div>
                </div>

                <div className='col-sm-12 col-md-10 '>
                    <div className='text-center pt-5'>
                        <h1>Ticket de {logSession.name}</h1>

                        
                    </div>
                </div>
            </div>
        </section>
    )
}
