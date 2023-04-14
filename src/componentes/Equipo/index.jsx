import { Colaborador } from "../Colaborador";
import hexToRgba from "hex-to-rgba";
import "./Equipo.css";
export function Equipo(props) {
	const { colorPrimario, colorSecundario, titulo, id } = props.datos;
	const { colaboradores, eliminarColaborador, actualizarColor, like } = props;
	return (
		<>
			{colaboradores.length > 0 && (
				<section
					className="equipo"
					style={{ backgroundColor: hexToRgba(colorPrimario, 0.4) }}>
					<input
						type="color"
						className="color"
						value={colorPrimario}
						onChange={(e) => {
							actualizarColor(e.target.value, id);
						}}
					/>
					<h3 style={{ borderColor: colorPrimario }}>{titulo}</h3>
					<div className="colaboradores">
						{colaboradores.map((colaborador) => (
							<Colaborador
								eliminarColaborador={eliminarColaborador}
								colorPrimario={colorPrimario}
								datos={colaborador}
								key={colaborador.nombre}
								like={like}
							/>
						))}
					</div>
				</section>
			)}
		</>
	);
}
