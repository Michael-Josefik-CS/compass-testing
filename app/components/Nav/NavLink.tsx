import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavLink.module.css";

interface NavLinkProps {
	href: string;
	children: React.ReactNode;
	onTransparent: boolean;
}

export const NavLink = ({ href, children, onTransparent = false }: NavLinkProps) => {
	const pathname = usePathname();
	const isActive = pathname === href;

	const classNames = [
		styles.link,
		onTransparent ? styles.onTransparent : styles.onOpaque,
		isActive ? styles.active : ""
	].join(" ");

	return (
		<Link href={href} className={classNames}>
			{children}
		</Link>
	);
};