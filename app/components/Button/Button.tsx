'use client';

import styles from './Button.module.css';
import classNames from 'classnames';
import { ReactNode } from 'react';

type ButtonProps = {
	children?: ReactNode;
	type?: 'primary' | 'secondary' | 'tertiary' | 'link';
	onImage?: boolean;
	onBrand?: boolean;
	icon?: ReactNode;
	iconRight?: boolean;
	onClick?: () => void;
};

export default function Button({
  children,
	type = 'primary',
	onImage = false,
	onBrand = false,
	icon,
	iconRight = false,
	onClick = () => {}, // Default to no-op if not provided
}: ButtonProps) {
	const variantKey = `btn${type.charAt(0).toUpperCase() + type.slice(1)}${onImage || onBrand ? 'OnDark' : ''}`;
  const classes = classNames(
    styles.button,
    styles[variantKey],
  );

	return (
		<button className={classes} onClick={onClick} type="button">
			{!iconRight && icon && <span className={styles.icon}>{icon}</span>}
			{children && <span className={`${styles.label} button-text-md`}>{children}</span>}
			{iconRight && icon && <span className={styles.icon}>{icon}</span>}
		</button>
	);
}