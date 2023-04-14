import "./MiOrg.css";
import add from "../../assets/add.png";

export function MiOrg({ estado }) {
	return (
		<section className="sectionOrg">
			<h3>Mi Origanización</h3>
			<img
				src={add}
				alt="Icono para abrir o cerrar formulario"
				onClick={estado}
			/>
		</section>
	);
}
