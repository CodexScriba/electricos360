import type React from "react";
import NavbarLogo from "./NavbarLogo";
import { FaSearch, FaGlobe, FaMoon, FaSun } from "react-icons/fa";
import {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuTrigger,
	NavigationMenuContent,
	NavigationMenuLink,
} from "@/components/ui/navigation-menu";

const Navbar: React.FC = () => {
	return (
		<header className="w-full bg-background border-b border-muted">
			{/* //TODO: change the background color */}
			<div className="container mx-auto max-w-7xl h-16 flex items-center justify-between px-4 md:px-6">
				<div className="flex items-left justify-between h-16">
					<div className="flex items-left">
						<NavbarLogo
							src="/images/logo.png"
							alt="Company Logo"
							width={60}
							height={60}
						/>
					</div>
					<nav aria-label="Main Navegation">
						<NavigationMenu>
							<NavigationMenuList>
								<NavigationMenuItem>
									<NavigationMenuLink href="/autos">Autos</NavigationMenuLink>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<NavigationMenuTrigger>Herramientas</NavigationMenuTrigger>
									<NavigationMenuContent>
										<NavigationMenuLink href="/comprador">
											Comparador de Vehículos
										</NavigationMenuLink>
										<NavigationMenuLink href="/comprador">
											Comparador de Vehículos
										</NavigationMenuLink>
									</NavigationMenuContent>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>
					</nav>
					<div className="flex items-center space-x-4">
						<FaSearch className="text-gray-500 hover:text-gray-700 cursor-pointer" />
						<FaGlobe className="text-gray-500 hover:text-gray-700 cursor-pointer" />
						<FaMoon className="text-gray-500 hover:text-gray-700 cursor-pointer" />
						{/* You can toggle between FaMoon and FaSun based on the current theme */}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
