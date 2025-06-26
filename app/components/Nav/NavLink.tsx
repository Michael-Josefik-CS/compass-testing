import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavLink.module.css";
import classNames from "classnames";

interface NavLinkProps {
	href: string;
	children: React.ReactNode;
	onImage: boolean;
}

const NavLink = ({ href, children, onImage = false }: NavLinkProps) => {
	const pathname = usePathname();
	const isActive = pathname === href;

/* 	const classNames = [
		styles.link,
		onImage ? styles.onImage : styles.onSurface,
		isActive ? styles.active : ""
	].join(" "); */

	return (
		<Link href={href} className={classNames(
			onImage ? styles.onImage : styles.onSurface,
			styles.link,
			isActive ? styles.active : ""
		)}>
			{children}
		</Link>
	);
};

export default NavLink;