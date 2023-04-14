import { useState } from "react";
import "./App.css";
import { Header } from "./componentes/Header/Header.jsx";
import { Form } from "./componentes/Form/Form";
import { MiOrg } from "./componentes/MiOrg";
import { Equipo } from "./componentes/Equipo";
import { Footer } from "./componentes/Footer";
import { v4 as uuid } from "uuid";

function App() {
	const [mostrarFormulario, actualizarMostrar] = useState(false);
	const [colaboradores, setColaboradores] = useState([
		{
			id: uuid(),
			equipo: "Front-End",
			foto: "https://github.com/harlandlohora.png",
			nombre: "Harland Lohora",
			puesto: "Instructor",
			fav: true,
		},
		{
			id: uuid(),
			equipo: "Programación",
			foto: "https://github.com/genesysaluralatam.png",
			nombre: "Genesys Rondón",
			puesto: "Desarrolladora de software e instructora",
			fav: false,
		},
		{
			id: uuid(),
			equipo: "Ux y Diseño",
			foto: "https://github.com/JeanmarieAluraLatam.png",
			nombre: "Jeanmarie Quijada",
			puesto: "Instructora en Alura Latam",
			fav: false,
		},
		{
			id: uuid(),
			equipo: "Programación",
			foto: "https://github.com/christianpva.png",
			nombre: "Christian Velasco",
			puesto: "Head de Alura e Instructor",
			fav: false,
		},
		{
			id: uuid(),
			equipo: "Innovación y Gestión",
			foto: "https://github.com/JoseDarioGonzalezCha.png",
			nombre: "Jose Gonzalez",
			puesto: "Dev FullStack",
			fav: false,
		},
	]);
	const [equipos, setEquipos] = useState([
		{
			id: uuid(),
			titulo: "Programación",
			colorPrimario: "#57C278",
			colorSecundario: "#D9F7E9",
		},

		{
			id: uuid(),
			titulo: "Front-End",
			colorPrimario: "#82CFFA",
			colorSecundario: "#E8F8FF",
		},
		{
			id: uuid(),
			titulo: "Data-Science",
			colorPrimario: "#A6D157",
			colorSecundario: "#F0F8E2",
		},
		{
			id: uuid(),
			titulo: "DevOps",
			colorPrimario: "#E06B69",
			colorSecundario: "#FDE7E8",
		},
		{
			id: uuid(),
			titulo: "Ux y Diseño",
			colorPrimario: "#DB6EBF",
			colorSecundario: "#FAE9F5",
		},
		{
			id: uuid(),
			titulo: "Móvil",
			colorPrimario: "#FFBA05",
			colorSecundario: "#FFF5D9",
		},
		{
			id: uuid(),
			titulo: "Innovación y Gestión",
			colorPrimario: "#FF8A29",
			colorSecundario: "#FFEEDF",
		},
	]);

	const cambiarEstado = () => {
		actualizarMostrar(!mostrarFormulario);
	};

	const eliminarColaborador = (id) => {
		console.log("Eliminar Colaborador: ", id);
		const nuevoColaboradores = colaboradores.filter(
			(colaborador) => colaborador.id !== id
		);
		console.log(nuevoColaboradores);
		setColaboradores(nuevoColaboradores);
	};

	const actualizarColor = (color, id) => {
		const equipoActualizado = equipos.map((equipo) => {
			if (equipo.id === id) {
				equipo.colorPrimario = color;
			}
			return equipo;
		});

		setEquipos(equipoActualizado);
	};

	const registrarColaborador = (colaborador) => {
		setColaboradores([...colaboradores, colaborador]);
	};

	const crearEquipo = (equipo) => {
		console.log(equipo);
		const nuevoEquipo = [...equipos, { ...equipo, id: uuid() }];
		setEquipos(nuevoEquipo);
	};

	const like = (id) => {
		const colaboradoresActualizado = colaboradores.map((colaborador) => {
			if (colaborador.id === id) {
				colaborador.fav = !colaborador.fav;
			}
			return colaborador;
		});

		setColaboradores(colaboradoresActualizado);
	};

	return (
		<div className="App">
			<Header />
			{mostrarFormulario === true ? (
				<Form
					equipos={equipos.map((e) => e.titulo)}
					registrarColaborador={registrarColaborador}
					crearEquipo={crearEquipo}
				/>
			) : (
				<></>
			)}
			<MiOrg estado={cambiarEstado} />
			{equipos.map((equipo) => {
				return (
					<Equipo
						actualizarColor={actualizarColor}
						datos={equipo}
						key={equipo.titulo}
						eliminarColaborador={eliminarColaborador}
						like={like}
						colaboradores={colaboradores.filter(
							(colaborador) => colaborador.equipo === equipo.titulo
						)}
					/>
				);
			})}
			<Footer />
		</div>
	);
}

export default App;
