import './footer.css'
import logo from '../../assets/logo-blanco.png'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__logo container'>
				<img src={logo} className='logo-footer' alt='logoG' />

			</div>

			<span className='footer__copy'data-aos="fade-up"
     data-aos-duration="3000">&#169; Hecho por <strong>Jhonatan Mantilla</strong></span>

		</footer>
	)
}

export default Footer