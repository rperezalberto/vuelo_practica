import React, { Fragment, useContext } from 'react'
import { EscogeHome } from '../../components/home/EscogeHome';
import { OfertaHome } from '../../components/home/OfertaHome';
import { ReservaHome } from '../../components/home/ReservaHome';
import {Helmet} from 'react-helmet';

import {DataContent} from '../../contents/LoginContents';
import { HeaderHome } from '../../components/home/HeaderHome';
import { FooterHome } from '../../components/home/FooterHome';

export const HomePage = () => {

  const data = useContext(DataContent);

  return (
    <Fragment>
      
      {/* Tutulo */}
      <Helmet>
      <title>Flight-Manager</title>
      </Helmet>
      <HeaderHome />
      <ReservaHome />{/* Componente de Reserva */}
      <OfertaHome/>{/* Componente de Oferta */}
      <EscogeHome/>{/* Componente de Escoger */}
      {/* <FooterHome /> */}
    </Fragment>
  )
}
