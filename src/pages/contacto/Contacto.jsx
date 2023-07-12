import './contacto.css';
import {FiSend} from 'react-icons/fi'

const Contacto = () => {
	return (
		<section className='contacto section' id='contacto'>

			{/* titulo */}
			<h2 className="section__titulo" data-title='Contacto'>
				Reserva tu cita
			</h2>


			{/* cuadricula del contacto */}
			<div className="contacto__grid container grid">

				{/* Panel de horarios */}
				<div className="contacto__content">

					<div className="contacto__info" data-aos="zoom-in-right">

						<div className='contacto__modo'>
							{/* Radio Buttons de modo de contacto */}
							<h3 className='contacto-pregunta'>¿Cómo le gustaría que le contactemos?</h3>

							{/* Email */}
							<input className='radio-button' name='contacto' type='radio' value='email' id='radio-email' />
							<label for='radio-email' className='label-radio'>Email</label>
							<br />

							{/* Teléfono */}
							<input className='radio-button' name='contacto' type='radio' value='telefono' id='radio-telefono' />
							<label for='radio-telefono' className='label-radio'>Teléfono</label>
							<br />

							{/* Whatsapp */}
							<input className='radio-button' name='contacto' type='radio' value='whatsapp' id='radio-whatsapp' />
							<label for='radio-whatsapp' className='label-radio'>Whatsapp</label>

						</div>

						<div className='contacto__modo'>
							<h3 className='contacto-pregunta '>¿En cúal horario prefiere ser atendido?</h3>

							{/* Tabla de horarios */}
							<div className='contacto-tabla'>
								<table className='tabla-horario'>
									{/* Encabezado de tabla  */}
									<thead className='tabla-cabecera'>
										<tr>
											<th>Día</th>
											<th>Horario</th>
										</tr>
									</thead>
									{/* Cuerpo de tabla */}
									<tbody className='tabla-cuerpo'>
										<tr>
											<td>Lunes</td>
											<td>8:00 h ~ 20:00 h</td>
										</tr>
										<tr>
											<td>Miércoles</td>
											<td>8:00 h ~ 20:00 h</td>
										</tr>
										<tr>
											<td>Viernes</td>
											<td>8:00 h ~ 20:00 h</td>
										</tr>
									</tbody>
								</table>
							</div>


							{/* ComboBox de turnos */}
							<select name='turno' id='turno'>
								<option selected disabled>Seleccionar</option>
								<option value='Mañana'>Mañana</option>
								<option value='Tarde'>Tarde</option>
								<option value='Noche'>Noche</option>
							</select>
						</div>
					</div>

				</div>

				{/* Panel del formulario */}
				<div className="contacto__content">
					<form action="" className="contacto__form" id="contacto__form" data-aos="zoom-in-left">
						{/* <form ref={form} onSubmit={sendEmail} className="contact__form"> */}
						{/* Input Nombre */}
						<div className="contact__form-div">
							<label className="contact__form-tag">Nombre completo</label>
							<input type="text" name='name' className='contact__form-input' placeholder='Ingrese su nombre completo' required />
						</div>

						{/* Input Email */}
						<div className="contact__form-div">
							<label className="contact__form-tag">Email</label>
							<input type="email" name='email' className='contact__form-input' placeholder='Ingrese su email' required />
						</div>

						{/* Input Telefono */}
						<div className="contact__form-div">
							<label className="contact__form-tag">Teléfono</label>
							<input type="tel" name='tel' className='contact__form-input' placeholder='Ingrese su número de teléfono' required />
						</div>

						{/* Input Mensaje */}
						<div className="contact__form-div contact__form-area">
							<label className="contact__form-tag">Mensaje</label>
							<textarea name="mensaje" cols="30" rows="10" className='contact__form-input' placeholder='Escriba su mensaje' required></textarea>
						</div>

						{/* Checkbox */}
						<div className="contact__form-div-check">
							<input type="checkbox" className='contact__form-check' />
							<label htmlFor="contact__form-check" className='label-check'>¿Le gustaría conocer novedades de la Barbería Alura?</label>

						</div>

						{/* Boton Enviar mensaje */}
						<button type="submit" class="btn" onclick="sendMail()">
							<i class="button__icon"></i>
							Enviar mensaje <FiSend className='icon-btn'/>
						</button>
					</form>

				</div>
			</div>

		</section>
	)
}

export default Contacto