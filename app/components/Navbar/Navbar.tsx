import Link from "next/link";
import styles from "./Navbar.module.css";
import { FaSearch, FaGlobe, FaMoon, FaSun } from "react-icons/fa";

const Navbar: React.FC = () => {
	return (
		<header className="flex items-center justify-between h-16 px-4 md:px-6">
			<div className="flex items-center gap-6">
				<Link href="/" className="h-6 w-6">
					<FaSearch className="h-6 w-6" />
					<span className="text-lg font-semibold">Your Logo arriba</span>
				</Link>
			</div>
		</header>
	);
};

export default Navbar;
