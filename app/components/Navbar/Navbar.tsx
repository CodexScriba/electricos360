import type React from "react";
import NavbarLogo from "./NavbarLogo";
import { FaSearch, FaGlobe, FaMoon, FaSun } from "react-icons/fa";

const Navbar: React.FC = () => {
	return (
		<header className="flex items-center justify-between h-16 px-4 md:px-6">
			<div className="flex items-center gap-6">
				<NavbarLogo
					src="/images/logo.png"
					alt="Company Logo"
					width={60}
					height={60}
				/>
			</div>
		</header>
	);
};

export default Navbar;
