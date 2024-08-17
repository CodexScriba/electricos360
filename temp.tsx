/**
 * v0 by Vercel.
 * @see https://v0.dev/t/DE8nrsj2RMQ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
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

export default function Component() {
	return (
		<header className="w-full bg-background border-b border-muted">
			<div className="container mx-auto max-w-7xl h-16 flex items-center justify-between px-4 md:px-6">
				<div className="flex items-center gap-6">
					<Link href="#" className="flex items-center gap-2" prefetch={false}>
						<MountainIcon className="w-6 h-6" />
						<span className="sr-only">Acme Inc</span>
					</Link>
					<NavigationMenu>
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuTrigger>Auto</NavigationMenuTrigger>
								<NavigationMenuContent>
									<div className="grid w-[400px] p-2">
										<NavigationMenuLink asChild>
											<Link
												href="#"
												className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
												prefetch={false}
											>
												<div className="text-sm font-medium leading-none group-hover:underline">
													Comparador de Autos
												</div>
												<div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
													Compare diferentes modelos de autos.
												</div>
											</Link>
										</NavigationMenuLink>
										<NavigationMenuLink asChild>
											<Link
												href="#"
												className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
												prefetch={false}
											>
												<div className="text-sm font-medium leading-none group-hover:underline">
													Calculadora de tiempo de Carga
												</div>
												<div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
													Calcula el tiempo de carga de tu auto eléctrico.
												</div>
											</Link>
										</NavigationMenuLink>
									</div>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger>Herramientas</NavigationMenuTrigger>
								<NavigationMenuContent>
									<div className="grid w-[400px] p-2">
										<NavigationMenuLink asChild>
											<Link
												href="#"
												className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
												prefetch={false}
											>
												<div className="text-sm font-medium leading-none group-hover:underline">
													Calculadora de Costos
												</div>
												<div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
													Calcula los costos de tu auto.
												</div>
											</Link>
										</NavigationMenuLink>
									</div>
								</NavigationMenuContent>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>
				<div className="flex-1 max-w-md">
					<div className="relative">
						<SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
						<Input
							type="search"
							placeholder="Buscar..."
							className="pl-8 w-full rounded-lg bg-muted"
						/>
					</div>
				</div>
				<div className="flex items-center gap-4">
					<Button variant="ghost" size="icon">
						<SunIcon className="w-6 h-6" />
						<span className="sr-only">Toggle theme</span>
					</Button>
					<Button variant="ghost" size="icon">
						<MapPinIcon className="w-6 h-6" />
						<span className="sr-only">Location</span>
					</Button>
					<Button>Sign In</Button>
				</div>
			</div>
		</header>
	);
}

function MapPinIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
			<circle cx="12" cy="10" r="3" />
		</svg>
	);
}

function MountainIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m8 3 4 8 5-5 5 15H2L8 3z" />
		</svg>
	);
}

function SearchIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="11" cy="11" r="8" />
			<path d="m21 21-4.3-4.3" />
		</svg>
	);
}

function SunIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="12" cy="12" r="4" />
			<path d="M12 2v2" />
			<path d="M12 20v2" />
			<path d="m4.93 4.93 1.41 1.41" />
			<path d="m17.66 17.66 1.41 1.41" />
			<path d="M2 12h2" />
			<path d="M20 12h2" />
			<path d="m6.34 17.66-1.41 1.41" />
			<path d="m19.07 4.93-1.41 1.41" />
		</svg>
	);
}