import "./Footer.css";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import logo from "../../assets/Logo.png";
import footerbg from "../../assets/footer.png";

export function Footer() {
	return (
		<footer className="footer" style={{ backgroundImage: `url(${footerbg})` }}>
			<div className="redes">
				<a href="https://www.aluracursos.com/">
					<img src={facebook} alt="Facebook" />
				</a>
				<a href="https://www.aluracursos.com/">
					<img src={twitter} alt="twitter" />
				</a>
				<a href="https://www.aluracursos.com/">
					<img src={instagram} alt="instagram" />
				</a>
			</div>
			<img src={logo} alt="org" />
			<strong>
				Desarrollado por <br /> Iván Pereira
			</strong>
		</footer>
	);
}
