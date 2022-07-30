import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import LogoWhite from "../../assets/logowhite.svg";
import Frame46 from "../../assets/Frame 46.svg";

const Footer = () => {
	return (
		<section className="footer">
			<div className="container">
				<div className="top">
					<div>
						<Link className="top-link" to="/about">
							About
						</Link>
						<Link className="link-to" to="/about">
							The Connected Magazine
						</Link>
						<Link className="link-to" to="/about">
							Past Editions
						</Link>
						<Link className="link-to" to="/about">
							Celebrated Techies
						</Link>
					</div>
					<div>
						<Link className="top-link" to="/about">
							Legal
						</Link>
						<Link className="link-to" to="/about">
							Terms of Service
						</Link>
						<Link className="link-to" to="/about">
							Privacy Policy
						</Link>
					</div>
					<div>
						<Link className="top-link" to="/about">
							Social
						</Link>
						<Link className="link-to" to="/about">
							Linkedin
						</Link>
					</div>
					<div>
						<Link className="top-link" to="/about">
							Contact
						</Link>
						<Link className="link-to" to="/about">
							+2347057219951
						</Link>
						<Link className="link-to" to="/about">
							Chat on Whatsapp
						</Link>
						<Link className="link-to" to="/about">
							connectedawards@gmail.com
						</Link>
					</div>
				</div>
				<div className="bottom">
					<div>
						<img src={LogoWhite} alt="" />
						<p>Celebrating Techies Globally</p>
					</div>
					<p>© 2022 The Conected Awards - All rights reserved</p>
				</div>
			</div>
			{/* <img src={Frame45} alt="" /> */}
			<img src={Frame46} alt="" />
		</section>
	);
};

export default Footer;
