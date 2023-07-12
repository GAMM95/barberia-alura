import "./diferenciales.css";
import imgDiferencial from '../../assets/diferencial.jpg';
import { GiBeard } from 'react-icons/gi'

const Diferenciales = () => {
  return (
    <section className="diferenciales section" id="diferenciales">
      {/* titulo */}
      <h2 className="section__titulo" data-title="Diferenciales">
        Marcamos la diferencia
      </h2>

      {/* Cuadricula de los diferenciales */}
      <div className="diferenciales__grid container grid">

        {/* Panel de listas */}
        <div class="diferenciales__content" data-aos="zoom-out-up">
          <ul class="lista-diferenciales">
            <li class="items">
              <GiBeard className="item-icon" />
              Atención personalizada a los clientes
            </li>
            <li class="items">
              <GiBeard className="item-icon" />
              Espacio diferenciado
            </li>
            <li class="items">
              <GiBeard className="item-icon" />
              Localización
            </li>
            <li class="items">
              <GiBeard className="item-icon" />
              Profesionales calificados
            </li>
            <li class="items">
              <GiBeard className="item-icon" />
              Puntualidad</li>
            <li class="items">
              <GiBeard className="item-icon" />
              Limpieza
            </li>
          </ul>

          {/* Imagen diferencial */}
          <div className="diferencial__img">
            <img
              src={imgDiferencial} alt="imagen diferencial"
              className="imagen-diferenciales"
            />
          </div>

        </div>

        {/* Panel de video */}
        <div class="diferenciales__content" data-aos="flip-right">
          <iframe className="video"
            title="video-promocional"
            width="100%"
            height="600"
            src="https://www.youtube.com/embed/wcVVXUV0YUY"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Diferenciales;
