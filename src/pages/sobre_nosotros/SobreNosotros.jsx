import './sobrenosotros.css'
import AboutImg from '../../assets/utensilios.jpg';
import { FiCheck } from "react-icons/fi"

const SobreNosotros = () => {
	return (
		<section className="sobre-nosotros section" id="sobre-nosotros">

			{/* Cuadricula del sobre nosotros */}
			<div className="sobre-nosotros__grid container grid">

				{/* Imagen lateral */}
				<div className="sobre-nosotros__img-wrapper" data-aos="fade-right">
					<img src={AboutImg} alt='imagen sobre nosotros' className='sobre-nosotros__img' />
				</div>

				{/* contenido del sobre nosotros */}
				<div className="sobre-nosotros__content" data-aos="fade-left">
					{/* titulo */}
					<h2 className="section__titulo titulo-izquierda" data-title="Sobre Nosotros">
						¿Quiénes somos?
					</h2>

					{/* descripcion */}
					<p className="sobre-nosotros__descripcion">
						Ubicada en el corazón de la ciudad, la <strong>Barbería Alura</strong> trae para el mercado lo que hay de mejor para su cabello y barba. Fundada en 2020, la Barbería Alura ya es destaque en la ciudad y conquista nuevos clientes diariamente.
					</p>

					<div className="sobre-nosotros__detalles grid">
						{/* items con viñeta */}
						<p className="sobre-nosotros__detalles-descripcion">
							<FiCheck />
							Ofrecemos profesionales experimentados que están constantemente observando los cambios y movimiento en el mundo de la moda, para así ofrecer a nuestros clientes las últimas tendencias.
						</p>

						<p className="sobre-nosotros__detalles-descripcion">
							<FiCheck />
							El atendimiento posee un padrón de excelencia y agilidad, garantizando calidad y satisfacción de nuestros clientes.
						</p>
					</div>


					{/* Mision */}
					<h3 className="section__subtitulo">Nuestra misión</h3>

					<span>"Proporcionar autoestima y calidad de vida a nuestros clientes"
					</span>


				</div>

			</div>

		</section>
	)
}

export default SobreNosotros