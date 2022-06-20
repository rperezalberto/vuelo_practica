import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../asessts/img/logo.png'
import axios from 'axios';

import {DataContent} from '../../contents/LoginContents';



export const LoginPage = () => {
  const {logSession,setLogSession} = useContext(DataContent)

  const navegate = useNavigate();
  const [regitrar, setRegistrar] = useState(false);

  // Guardamos los datos del formulario de login
  const [user, setUser] = useState({
    txtEmail: "",
    txtPass: ""
  });
  
  // Guardamos los datos del formulario de login
  const [registrar_user, setRegistrar_user] = useState({
    txtNombre: "",
    txtEmail: "",
    txtPass: "",
    txtTelef: "",
  });

  // Sacamos el valor de login
  const handle = (e) => {
    e.preventDefault()
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }


  const SingIg = () => {
    const url = "http://127.0.0.1:5000/login";
    // Mandamos los datos al login
    axios.post(url, {
      email: user.txtEmail,
      password: user.txtPass
    }).then((valor) => {
      if (valor.data.user) {
        // Guardamos los datos en el context
        setLogSession(valor.data.user)
        if(logSession.role == 1){
          navegate('/admin');
        }else{
          navegate('/user');
        }

      } else {
        alert('Usario o Clave incorrecta')
      }
    })

  }



  // Creamos un usuario
  const handleAdd = (e) => {
    e.preventDefault()
    setRegistrar_user({
      ...registrar_user,
      [e.target.name]: e.target.value
    })
  }


  const SingUp = () => {
    axios.post('http://127.0.0.1:5000/registrar', {
      name: registrar_user.txtNombre,
      email:  registrar_user.txtEmail,
      password: registrar_user.txtPass,
      telefono: registrar_user.txtTelef
    }).then(() => {
      // alert("Registrado");
      navegate('/')
    })
  }


  return (
    <section className='login__form'>
      {/* Logo img */}
      <div className='login__form_lgo'>
        <img src={logo} />
      </div>
      {/* Login */}
      <div className='login'>
        <div className='row'>
          <div className='col-sm-12 col-md-6 '>
            <Link to="/" className='login__show'>
              <span>X</span>
            </Link>
            <div className='login__title text-center'>
              <h1>Accede o únete a</h1>
              <h2><span>Flight</span><span>-</span><span>Manager</span></h2>
            </div>
            {
              (regitrar) ?
                <form>
                  <div className='row p-2'>
                    <div className='col-md-6 mb-2 '>
                      <label htmlFor="txtEmail">E-mail</label>
                      <input className='form-control' onChange={(e) => handle(e)} name="txtEmail" id='txtEmail' type='text' />
                    </div>

                    <div className='col col-md-6 mb-2 '>
                      <label htmlFor="txtPass">Contraseña</label>
                      <input className='form-control' onChange={(e) => handle(e)} name="txtPass" id='txtPass' type='password' />
                    </div>

                  </div>
                </form>

                :


                <div className='row p-2'>
                  <form>

                    <div className='col-md-6 mb-2 '>
                      <label htmlFor="txtNombre">Nombre</label>
                      <input className='form-control' onChange={(e) => handleAdd(e)} name="txtNombre" id='txtNombre' type='text' required />
                    </div>

                    <div className='col col-md-6 mb-2 '>
                      <label htmlFor="txtEmail">E-mail</label>
                      <input className='form-control' onChange={(e) => handleAdd(e)} name="txtEmail" id='txtEmail' type='email' required />
                    </div>

                    <div className='col col-md-6 mb-2 '>
                      <label htmlFor="txtPass">Contraseña</label>
                      <input className='form-control' onChange={(e) => handleAdd(e)} name="txtPass" id='txtPass' type='password' required/>
                    </div>


                    <div className='col col-md-6 mb-2 '>
                      <label htmlFor="txtTelef">Telefono</label>
                      <input className='form-control' onChange={(e) => handleAdd(e)} name="txtTelef" id='txtTelef' type='text' required/>
                    </div>
                  </form>
                </div>
            }
            {
              (regitrar) ?
                <div>
                  <div className='col mb-2  login_btn'>
                    <Link to="" onClick={SingIg} >Iniciar Sesion</Link>
                  </div>
                  <div className='col mb-2'>
                    <a className='bg-primaty text-center' onClick={() => setRegistrar(false)}  >Registrar</a>
                  </div>
                </div>
                :
                <div>
                  <div className='col mb-2  login_btn'>
                    <Link to="" onClick={SingUp}>Registrar</Link>
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
    </section>
  )
}
