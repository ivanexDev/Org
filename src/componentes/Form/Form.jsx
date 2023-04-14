import { Boton } from "../Boton";
import { CampoTexto } from "../CampoTexto/CampoTexto";
import { ListaOpciones } from "../ListaOpciones";
import { useState } from "react";
import "./Form.css";

export function Form({ equipos, registrarColaborador, crearEquipo }) {
	const [nombre, setNombre] = useState("");
	const [puesto, setPuesto] = useState("");
	const [foto, setFoto] = useState("");
	const [equipo, setEquipo] = useState("");
	const [titulo, setTitulo] = useState("");
	const [color, setColor] = useState("");

	const manejarEnvio = (e) => {
		e.preventDefault();

		let infoEnviar = { nombre, puesto, foto, equipo };
		registrarColaborador(infoEnviar);
		// console.log(infoEnviar);
	};

	const manejarEnvioEquipo = (e) => {
		e.preventDefault();
		crearEquipo({ titulo, colorPrimario: color });
	};

	return (
		<section className="formulario">
			<form onSubmit={manejarEnvio}>
				<h2>Rellena el formulario para crear el colaborador.</h2>
				<CampoTexto
					titulo="Nombre"
					placeholder="Ingresar Nombre"
					required
					valor={nombre}
					actualizarValor={setNombre}
				/>

				<CampoTexto
					titulo="Puesto"
					placeholder="Ingresar Puesto"
					required
					valor={puesto}
					actualizarValor={setPuesto}
				/>
				<CampoTexto
					titulo="Foto"
					placeholder="Ingresar enlace de foto"
					required
					valor={foto}
					actualizarValor={setFoto}
				/>
				<ListaOpciones
					valor={equipo}
					actualizarEquipo={setEquipo}
					equipos={equipos}
				/>
				<Boton>Crear</Boton>
			</form>
			<form onSubmit={manejarEnvioEquipo}>
				<h2>Rellena el formulario para crear el equipo.</h2>
				<CampoTexto
					titulo="Titulo"
					placeholder="Ingresar Titulo"
					required
					valor={titulo}
					actualizarValor={setTitulo}
				/>

				<CampoTexto
					titulo="Color"
					placeholder="Ingresar color en Hexadecimal"
					required
					valor={color}
					actualizarValor={setColor}
					type="color"
				/>

				<Boton>Registrar Equipo</Boton>
			</form>
		</section>
	);
}
