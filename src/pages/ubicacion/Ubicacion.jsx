import './ubicacion.css'

const Ubicacion = () => {
  return (
    <section className='ubicacion section' id='ubicacion'>
      {/* titulo */}
      <h2 className="section__titulo" data-title='Ubicación'>
        Nuestro local central
      </h2>

      {/* Mapa de Ubicacion */}
      <div className="mapa container"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="500"
        data-aos-offset="0">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5247.157889509911!2d-46.6524872259519!3d-23.564595637574463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59541c6c79c3%3A0x36b90a85f0f8cb33!2sGrupo%20Alura!5e0!3m2!1ses-419!2spe!4v1688785847563!5m2!1ses-419!2spe" width="100%" height="550" allowfullscreen="true" loading="lazy"
          title="Nuestra ubicacion " referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
  )
}

export default Ubicacion