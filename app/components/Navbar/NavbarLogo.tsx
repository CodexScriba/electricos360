import Image from "next/image";
import Link from "next/link";

interface NavbarLogoProps {
	src: string;
	alt: string;
	width: number;
	height: number;
}

const NavbarLogo: React.FC<NavbarLogoProps> = ({ src, alt, width, height }) => {
	return (
		<Link href="/" className="flex items-center gap-2">
			<Image
				src={src}
				alt={alt}
				width={width}
				height={height}
				className="object-contain"
			/>
		</Link>
	);
};

export default NavbarLogo;
