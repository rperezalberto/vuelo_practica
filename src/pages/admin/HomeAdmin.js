import React, {useEffect, useState} from 'react';
import { MenuClick } from '../../asessts/js/script';
import axios from 'axios';

export const HomeAdmin = () => {

    const [listUser, setListUser] = useState([]);

    useEffect(() => {
        const vueloData = async () => {
            try {
                const url = "http://localhost:3001/login";
                const resultado = await axios.get(url);
                setListUser(resultado.data);
                console.log(listUser);
            } catch (error) {
                console.log(error);
            }
        } 
        vueloData();
    }, []);


    return (
        <section className='menu_admin'>
            <div className="container_menu">
                <nav>
                    <ul>
                        <li className="list">
                            <a href="#">
                                <span className="icon">
                                    <ion-icon name="home-outline"></ion-icon>
                                </span>
                                <span className="title">Home</span>
                            </a>
                        </li>

                        <li className="list">
                            <a href="#">
                                <span className="icon">
                                    <ion-icon name="person-outline"></ion-icon>
                                </span>
                                <span className="title">Profile</span>
                            </a>
                        </li>

                        <li className="list">
                            <a href="#">
                                <span className="icon">
                                    <ion-icon name="settings-outline"></ion-icon>
                                </span>
                                <span className="title">Setting</span>
                            </a>
                        </li>

                        <li className="list">
                            <a href="#">
                                <span className="icon">
                                    <ion-icon name="help-outline"></ion-icon>
                                </span>
                                <span className="title">Help</span>
                            </a>
                        </li>

                        <li className="list">
                            <a href="#">
                                <span className="icon">
                                    <ion-icon name="lock-closed-outline"></ion-icon>
                                </span>
                                <span className="title">Password</span>
                            </a>
                        </li>

                        <li className="list">
                            <a href="#">
                                <span className="icon">
                                    <ion-icon name="log-out-outline"></ion-icon>
                                </span>
                                <span className="title">Segn In</span>
                            </a>
                        </li>

                    </ul>
                </nav>

            </div>
            <div className=''>
                <div>
                    <h1>Admin</h1>
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Email</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Accion</th>
                        </tr>
                    </thead>
                    <tbody className='text-aline'>
                        {
                            listUser.map((e) => (
                               <tr>
                                    <td>{e.name}</td>
                                    <td>{e.email}</td>
                                    <td>{e.telefono}</td>
                                    <td>
                                        <a className='btn btn-success btn-sm m-1'>Edict</a>
                                        <a className='btn btn-danger btn-sm m-1'>Delet</a>
                                    </td>
                               </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div>
            <div className="container__menu" onClick={MenuClick}>
                <ion-icon name="menu-outline" className="open"></ion-icon>
                <ion-icon name="close-outline" className="close"></ion-icon>
            </div>
        </section>
    )
}
