import "./servicios.css";
// import img1 from "../../assets/cabello.jpg";
// import img2 from "../../assets/barba.jpg";
// import img3 from "../../assets/cabello+barba.jpg";
import { servicios } from "../../Data";

const Servicios = () => {
  return (
    <section className="servicios section" id="servicios">
      {/* titulo */}
      <h2 className="section__titulo" data-title="Servicios">
        Lo que ofrecemos
      </h2>

      <div className="servicios__grid container grid">
        {/* mapeo de data */}
        {servicios.map(({ img, titulo, descripcion, precio }, indice) => {
          return (
            <ul className="productos" key={indice} data-aos="zoom-out">
              <li>
                <h2 className="producto-titulo">{titulo}</h2>
                <img src={img} alt="imagen" />
                <p class="producto-descripcion">
                  {descripcion}
                </p>
                <p class="producto-precio">$ {precio}</p>
              </li>
            </ul>
          );
        })}
      </div>
    </section>
  );
};

export default Servicios;