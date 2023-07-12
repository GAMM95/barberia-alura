import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Inicio from "./pages/inicio/Inicio";
import SobreNosotros from "./pages/sobre_nosotros/SobreNosotros";
import Ubicacion from "./pages/ubicacion/Ubicacion";
import Diferenciales from "./pages/diferenciales/Diferenciales";
import Servicios from "./pages/servicios/Servicios";
import Contacto from "./pages/contacto/Contacto";
import Footer from "./components/footer/Footer";
// Importacion de librerias AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Inicio />
        <SobreNosotros />
        <Diferenciales />
        <Servicios />
        <Ubicacion />
        <Contacto />
      </main>
      <Footer />
    </>
  );
};

export default App;
