import React, { Component } from "react";
import { Home } from "../src/components/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { DetalleInstrumento } from "../src/components/DetalleInstrumento";
import { ListaInstrumentos } from "../src/components/ListaInstrumentos";
import { Maps } from "../src/components/Maps";
import { GrillaInstrumentos } from "../src/components/GrillaInstrumentos";
import { FormularioInstrumento } from "../src/components/FormularioInstrumento";

class AppRutas extends Component {

  render() {

    return (
      <Routes>
        <Route path="/grilla" element={<GrillaInstrumentos />} />
        <Route path="/formulario/:idinstrumento" element={<FormularioInstrumento />} />

        <Route path="/listaInstrumentos" element={<ListaInstrumentos />} />
        <Route path="/buscar/:termino" element={<ListaInstrumentos />} />
        <Route path="/buscar/" element={<ListaInstrumentos />} />
        
        <Route path="/detalle">
          <Route path=":idInstrumento" element={<DetalleInstrumento />}></Route>
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/Map" element={<Maps />} />
      </Routes>
    );
  }
}

export default AppRutas;
