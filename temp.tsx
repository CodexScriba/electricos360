import React from "react";
import Link from "next/link";
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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Define the menu items for Herramientas and Comunidad
const herramientas = [
	{
		title: "Herramienta de Consumo",
		href: "/herramientas/consumo",
		description: "Calcula el consumo de energía de tu vehículo.",
	},
	{
		title: "Herramienta de Tiempo de Carga",
		href: "/herramientas/carga",
		description: "Calcula el tiempo de carga de tu auto eléctrico.",
	},
	{
		title: "Herramienta de Comparación",
		href: "/herramientas/comparacion",
		description: "Compara diferentes modelos de autos.",
	},
];

const comunidad = [
	{
		title: "Ingresar una reseña",
		href: "/comunidad/resena",
		description: "Comparte tu opinión sobre diferentes vehículos.",
	},
	{
		title: "Foro",
		href: "/comunidad/foro",
		description: "Únete a la conversación con otros entusiastas.",
	},
	{
		title: "Preguntas Frecuentes (FAQ)",
		href: "/comunidad/faq",
		description: "Respuestas a preguntas comunes.",
	},
	{
		title: "Blog",
		href: "/comunidad/blog",
		description: "Lee nuestras últimas entradas de blog.",
	},
	{
		title: "Podcast",
		href: "/comunidad/podcast",
		description: "Escucha nuestros podcasts más recientes.",
	},
];

export default function Navbar() {
	return (
		<header className="w-full bg-background border-b border-muted">
			<div className="container mx-auto max-w-7xl h-16 flex items-center justify-between px-4 md:px-6">
				{/* Left Section: Logo and Navigation */}
				<div className="flex items-center space-x-6">
					<NavbarLogo
						src="/images/logo.png"
						alt="Logo"
						width={32}
						height={32}
					/>

					<NavigationMenu>
						<NavigationMenuList>
							{/* Autos Menu */}
							<NavigationMenuItem>
								<NavigationMenuLink
									href="/autos"
									className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
								>
									Autos
								</NavigationMenuLink>
							</NavigationMenuItem>

							{/* Herramientas Menu */}
							<NavigationMenuItem>
								<NavigationMenuTrigger>Herramientas</NavigationMenuTrigger>
								<NavigationMenuContent>
									<div className="grid w-[400px] p-2">
										{herramientas.map((item) => (
											<NavigationMenuLink asChild key={item.title}>
												<Link
													href={item.href}
													className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
												>
													<div className="text-sm font-medium leading-none group-hover:underline">
														{item.title}
													</div>
													<div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
														{item.description}
													</div>
												</Link>
											</NavigationMenuLink>
										))}
									</div>
								</NavigationMenuContent>
							</NavigationMenuItem>

							{/* Comunidad Menu */}
							<NavigationMenuItem>
								<NavigationMenuTrigger>Comunidad</NavigationMenuTrigger>
								<NavigationMenuContent>
									<div className="grid w-[400px] p-2">
										{comunidad.map((item) => (
											<NavigationMenuLink asChild key={item.title}>
												<Link
													href={item.href}
													className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
												>
													<div className="text-sm font-medium leading-none group-hover:underline">
														{item.title}
													</div>
													<div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
														{item.description}
													</div>
												</Link>
											</NavigationMenuLink>
										))}
									</div>
								</NavigationMenuContent>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>

				{/* Center Section: Search Bar */}
				<div className="flex-1 max-w-md">
					<div className="relative">
						<FaSearch className="absolute left-2.5 top-2.5 text-muted-foreground" />
						<Input
							type="search"
							placeholder="Buscar..."
							className="pl-10 w-full rounded-lg bg-muted"
						/>
					</div>
				</div>

				{/* Right Section: Icons and Buttons */}
				<div className="flex items-center gap-4">
					<Button variant="ghost" size="icon">
						<FaSun className="w-6 h-6" />
						<span className="sr-only">Toggle theme</span>
					</Button>
					<Button variant="ghost" size="icon">
						<FaGlobe className="w-6 h-6" />
						<span className="sr-only">Location</span>
					</Button>
					<Button variant="default">Iniciar Sesión / Registrarse</Button>
				</div>
			</div>
		</header>
	);
}
