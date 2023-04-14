import "./ListaOpciones.css";

export function ListaOpciones({ actualizarEquipo, valor, equipos }) {
	const manejarCambio = (e) => {
		actualizarEquipo(e.target.value);
	};

	return (
		<div className="lista-opciones">
			<label>Equipos</label>
			<select value={valor} onChange={manejarCambio}>
				<option value="" disabled defaultValue="" hidden>
					Seleccionar equipo
				</option>
				{equipos.map((equipo, index) => {
					return <option key={index}> {equipo} </option>;
				})}
			</select>
		</div>
	);
}
