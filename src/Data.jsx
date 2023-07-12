import servicio1 from "./assets/cabello.jpg";
import servicio2 from "./assets/barba.jpg";
import servicio3 from "./assets/cabello+barba.jpg";

export const links = [
  {
    nombre: 'Inicio',
    ruta: 'inicio',
  },
  {
    nombre: 'Sobre nosotros',
    ruta: 'sobre-nosotros',
  },
  {
    nombre: 'Diferenciales',
    ruta: 'diferenciales',
  },
  {
    nombre: 'Servicios',
    ruta: 'servicios',
  },
  {
    nombre: 'Ubicación',
    ruta: 'ubicacion',
  },
  {
    nombre: 'Contacto',
    ruta: 'contacto',
  }
];

export const servicios = [
  {
    id: 1,
    img: servicio1,
    titulo: 'Cabello',
    descripcion: 'Con tijera o máquina, a gusto del cliente',
    precio: 10.00,
  },
  {
    id: 2,
    img: servicio2,
    titulo: 'Barba',
    descripcion: 'Corte y diseño profesional de barba',
    precio: 8.00,
  },
  {
    id: 3,
    img: servicio3,
    titulo: 'Cabello + Barba',
    descripcion: 'Paquete completo de cabello y barba',
    precio: 15.00,
  }
];
