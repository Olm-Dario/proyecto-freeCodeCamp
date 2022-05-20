import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario';
import Tarea from './Tarea';
import '../hoja-de-estilos/ListaDeTareas.css';

function ListaDeTareas() {
	const [tareas, setTareas] = useState([]);

	const agregarTarea = (tarea) => {
		//Verificamos si se manda una tarea vacia con le metodo trim()
		//Este metodo quita los espacio al principio y final de una cadena
		if (tarea.texto.trim()) {
			//Aqui quitamos cualquier espacio al principio o final del texto
			tarea.texto = tarea.texto.trim();

			/*
      Aqui tomamos el estado actual de las tareas y agregamos la tarea nueva
      En principio se toma la tarea nueva y luego las anteriores, esto es asi,
      para poder poner siempre primero la tarea mas nueva
      */
			const tareasActualizadas = [tarea, ...tareas];
			setTareas(tareasActualizadas);
		}
	};

	const eliminarTarea = (id) => {
		//Aqui filtramos segun la condicion para saber si eliminamos la tarea
		const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
		setTareas(tareasActualizadas);
	};

	const completarTarea = (id) => {
		const tareasActualizadas = tareas.map((tarea) => {
			//Verificamos si la tarea se completo o no
			if (tarea.id === id) {
				tarea.completada = !tarea.completada;
			}
			return tarea;
		});
		setTareas(tareasActualizadas);
		console.log(tareasActualizadas);
	};

	return (
		// <></> --> esto se llama fragmento
		<>
			<TareaFormulario onSubmit={agregarTarea} />
			<div className="tareas-lista-contenedor">
				{tareas.map((tarea) => (
					<Tarea
						//Identifica elementos en una lista y debe ser unico
						key={tarea.id}
						//Como no podemos pasar como props a key usamos tambien "id"
						id={tarea.id}
						texto={tarea.texto}
						completada={tarea.completada}
						completarTarea={completarTarea}
						eliminarTarea={eliminarTarea}
					/>
				))}
			</div>
		</>
	);
}

export default ListaDeTareas;
