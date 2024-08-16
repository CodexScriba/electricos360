import type React from "react";
import NavbarLogo from "./NavbarLogo";
import { FaSearch, FaGlobe, FaMoon, FaSun } from "react-icons/fa";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
	Card,
	CardHeader,
	CardContent,
	CardTitle,
	CardDescription,
} from "@/components/ui/card"; // Assuming you have a Card component in your UI library

const Navbar: React.FC = () => {
	return (
		<header className="w-full bg-white shadow-sm">
			{/* TODO: change the background color to the actual color */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<NavbarLogo
							src="/images/logo.png"
							alt="Company Logo"
							width={60}
							height={60}
						/>
					</div>
				</div>
			</div>
			<nav aria-label="Main Navigation">
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuLink href="/autos">Autos</NavigationMenuLink>
						</NavigationMenuItem>
						{/* Add more menu items here */}
					</NavigationMenuList>
				</NavigationMenu>
			</nav>
			{/* Tools Section */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<h2 className="text-2xl font-semibold mb-6">Herramientas</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					<Card>
						<CardHeader>
							<CardTitle>Comparador de Vehículos</CardTitle>
						</CardHeader>
						<CardContent>
							<CardDescription>
								Compara características, precios, autonomía y tiempos de carga
								entre diferentes vehículos eléctricos.
							</CardDescription>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>Calculadora de Tiempos de Carga</CardTitle>
						</CardHeader>
						<CardContent>
							<CardDescription>
								Calcula cuánto tiempo tomará cargar completamente un vehículo
								eléctrico según la capacidad de la batería y la potencia del
								cargador.
							</CardDescription>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>Calculadora de Costos de Carga</CardTitle>
						</CardHeader>
						<CardContent>
							<CardDescription>
								Estima el costo de cargar un vehículo eléctrico en función de la
								capacidad de la batería, la distancia del viaje y el precio de
								la electricidad.
							</CardDescription>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>Calculadora de Seguros</CardTitle>
						</CardHeader>
						<CardContent>
							<CardDescription>
								Estima el costo del seguro para distintos vehículos eléctricos
								basado en el perfil del conductor y el tipo de vehículo.
							</CardDescription>
						</CardContent>
					</Card>
				</div>
			</section>
		</header>
	);
};

export default Navbar;
