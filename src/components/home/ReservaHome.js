import React, { useState, useEffect} from 'react';
import axios from 'axios';

export const ReservaHome = () => {

    const [psjro, setpPsjro] = useState(1);
    const [ida, setIda] = useState(true);
    const [dataVuelo, setDataVuelo] = useState([]);

    
    useEffect(() => {
        const vueloData = async () => {
            try {
                const url = "http://localhost:5000";
                const resultado = await axios.get(url);
                const data = resultado.data.vuelos;
                setDataVuelo(data);
                console.log(dataVuelo);
            } catch (error) {
                console.log(error);
            }
        } 
        vueloData();
    }, []);
    

    return (
        <main className='reserva'>
            <div className=' reserva_grp'>
                <div className='reserva_title'>
                    <h1>Compara y Reserva Vuelos Baratos</h1>
                    <span>Viaja dentro de Los Estados Unidos o Visita el Extranjero</span>
                </div>
                <div className='reserva__form container'>
                    <form>
                        <div className='reserva__ida'>
                            <div className=' mb-3'>
                                <input className='' id='txtIda' defaultChecked={ida} onChange={() => setIda(true)} name='ida' type='radio' />
                                <label htmlFor="txtIda">Ida y Vuelta</label>
                            </div>
                            <div className=' mb-3'>
                                <input className='' id='txtSolo' name='ida' onChange={() => setIda(false)} type='radio' />
                                <label htmlFor="txtSolo">Solo Ida</label>
                            </div>
                        </div>

                        {/* Formulario */}
                        <div className='row'>
                            <div className='col mb-3'>
                                <label htmlFor="txtDonde">De donde?</label>
                                <select className='form-select' id='txtDonde' >
                                    <option>De donde?</option>
                                    {/* Mostramos aeropuerto actual */}
                                    {
                                        dataVuelo.map((e) => (
                                            <option>{e.aeropuerto_origen}</option>
                                       ))
                                    }
                                </select>
                            </div>

                            {/* Condicion para evaluar la ida y vuelta */}
                            {
                                (ida) ? <div className='col mb-3'>
                                    <label htmlFor="txtAdonde">A donde?</label>
                                    <select className='form-select' id='txtDonde' >
                                    <option>A donde?</option>

                                    {
                                        dataVuelo.map((e) => (
                                            <option>{e.aeropuerto_destino}</option>
                                       ))
                                    }
                                </select>
                                </div>
                                    : null
                            }

                            <div className='col mb-3 '>
                                <label htmlFor="txtSalida">Salida</label>
                                <input className='form-control' id='txtSalida' type='date' />
                            </div>

                            <div className='col mb-3'>
                                <label htmlFor="txtRegreso">Regreso</label>
                                <input className='form-control' id='txtRegreso' type='date' />
                            </div>

                            <div className='col mb-3 reserva__pasj'>
                                <label htmlFor="txtPasajero">Pasajero</label>
                                <div>
                                    <a onClick={() => setpPsjro(psjro + 1)}>+</a>
                                    <span id='txtPasajero'>{psjro}</span>
                                    <a onClick={() => setpPsjro(psjro - 1)}>-</a>
                                </div>
                            </div>
                        </div>
                            <div className='reserva__btn'>
                                <a>Buscar Vuelo</a>
                            </div>

                    </form>
                </div>
            </div>
        </main>
    )
}
