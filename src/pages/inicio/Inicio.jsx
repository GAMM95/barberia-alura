import './inicio.css'

const Inicio = () => {
	return (
		<section className='inicio' id='inicio'>
			<div className='inicio__container container'
				data-aos="fade-left"
				data-aos-anchor="#example-anchor"
				data-aos-offset="500"
				data-aos-duration="500">
				<div className='inicio__content'>
					<span className='inicio__subtitulo'>Bienvenido!</span>
					<h1 className='inicio__titulo'>Barbería Alura </h1>
					<p className='inicio__descripcion'>
						Nuestro equipo de expertos barberos te brindará una atención personalizada, adaptando cada corte y estilo a tu gusto y personalidad. Además, contarás con un ambiente acogedor y moderno donde podrás relajarte y disfrutar de una experiencia única.
					</p>

					{/* Botones del inicio */}
					<div className="inicio__btns">
						<a href="#contacto" className="btn">Contáctanos
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Inicio