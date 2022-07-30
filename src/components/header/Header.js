import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../../assets/Frame 37.svg";
import { Outlet } from "react-router-dom";

function Header() {
	return (
		<header className="nav">
			<nav className="nav-container container">
				<Link to="/">
					<img src={Logo} alt="" />
				</Link>
				<ul className="nav-links">
					<li>
						<Link className="a" to="/">
							Categories
						</Link>
					</li>
					<li>
						<Link className="a" to="/About">
							Past editions
						</Link>
					</li>
					<li>
						<Link className="a" to="/">
							Future editions
						</Link>
					</li>
					<li>
						<Link className="a" to="/">
							About us
						</Link>
					</li>
					<li>
						<Link className="a" to="/">
							Make a donation{" "}
						</Link>
					</li>
				</ul>
				<div className="nav-btn-container">
					<Link className="login" to="/login">
						Log In
					</Link>
					<Link className="sign-up" to="/signup">
						Create Account
					</Link>
				</div>
			</nav>
			<Outlet />
		</header>
	);
}

export default Header;
