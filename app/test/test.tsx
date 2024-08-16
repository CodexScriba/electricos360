import React from "react";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { FaSearch, FaGlobe, FaMoon, FaSun } from "react-icons/fa";
import NavbarLogo from "../components/Navbar/NavbarLogo";
import { cn } from "../../lib/utils";

const tools = [
	{
		title: "Comparador de Vehículos",
		description:
			"Compara características, precios, autonomía y tiempos de carga entre diferentes vehículos eléctricos.",
		href: "/comparador-de-vehiculos",
	},
	{
		title: "Calculadora de Tiempos de Carga",
		description:
			"Calcula cuánto tiempo tomará cargar completamente un vehículo eléctrico según la capacidad de la batería y la potencia del cargador.",
		href: "/calculadora-tiempos-carga",
	},
	{
		title: "Calculadora de Costos de Carga",
		description:
			"Estima el costo de cargar un vehículo eléctrico en función de la capacidad de la batería, la distancia del viaje y el precio de la electricidad.",
		href: "/calculadora-costos-carga",
	},
	{
		title: "Calculadora de Seguros",
		description:
			"Estima el costo del seguro para distintos vehículos eléctricos basado en el perfil del conductor y el tipo de vehículo.",
		href: "/calculadora-seguros",
	},
];

const Navbar2: React.FC = () => {
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
							<NavigationMenuTrigger>Herramientas</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
									{tools.map((tool) => (
										<ListItem
											key={tool.title}
											title={tool.title}
											href={tool.href}
										>
											{tool.description}
										</ListItem>
									))}
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</nav>
		</header>
	);
};

export default Navbar2;

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className,
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";
