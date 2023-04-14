import "./CampoTexto.css";

export function CampoTexto({
	titulo,
	placeholder,
	required,
	valor,
	actualizarValor,
	type = "text",
}) {
	const placeholderModificado = `${placeholder}...`;

	const manejarCambio = (e) => {
		actualizarValor(e.target.value);
	};
	return (
		<div className={`campo campo-${type}`}>
			<label>{titulo}</label>
			<input
				placeholder={placeholderModificado}
				required={required}
				onChange={manejarCambio}
				value={valor}
				type={type}
			/>
		</div>
	);
}
