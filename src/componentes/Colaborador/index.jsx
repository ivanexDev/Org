import "./Colaborador.css";
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export function Colaborador({
	colorPrimario = "red",
	datos,
	eliminarColaborador,
	like,
}) {
	const { nombre, puesto, foto, equipo, id, fav } = datos;
	return (
		<div className="colaborador">
			<div className="encabezado" style={{ backgroundColor: colorPrimario }}>
				<AiFillCloseCircle
					onClick={() => eliminarColaborador(id)}
					className="delete"
				/>
			</div>
			<img src={foto} alt={nombre} />
			<div className="info">
				<h4>{nombre}</h4>
				<h5>{puesto}</h5>
				{fav ? (
					<AiFillHeart color="red" onClick={() => like(id)} />
				) : (
					<AiOutlineHeart onClick={() => like(id)} />
				)}
			</div>
		</div>
	);
}
