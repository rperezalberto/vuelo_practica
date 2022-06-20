import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export const SingIgHook = (user) => {

    // console.log(user.txtEmail)

    const navegate = useNavigate();

    const url = "http://127.0.0.1:5000/login";
    // Mandamos los datos al login
    axios.post(url, {
        email: user.txtEmail,
        password: user.txtPass
    }).then((valor) => {
        if (valor.data.user) {
            // Guardamos los datos en el localStore
            localStorage.setItem("lgon_active", JSON.stringify(valor.data.user));
            console.log(valor)

        } else {
            console.log('eee')
        }
    })
}



