import React, { useState } from 'react';
import '../hoja-de-estilos/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props) {
	const [input, setInput] = useState('');

	const manejarCambio = (e) => {
		setInput(e.target.value);
	};

	const manejarEnvio = (e) => {
		//Evita la recarga de la pagina
		e.preventDefault();

		const tareaNueva = {
			id: uuidv4(),
			texto: input,
			completada: false,
		};

		/*
    Aqui mandamos como props la tarea agregada,
    asi podemos usarla en ListaDeTareas y mostrarla
    */
		props.onSubmit(tareaNueva);
	};

	return (
		<form className="tarea-formulario" onSubmit={manejarEnvio}>
			<input
				className="tarea-input"
				type="text"
				placeholder="Escribe una tarea"
				name="texto"
				onChange={manejarCambio}
			/>
			<button className="tarea-boton">Agregar tarea</button>
		</form>
	);
}

export default TareaFormulario;
