import React from 'react';
import styles from './ScrollerButton.module.css';
import { IoIosArrowDown } from "react-icons/io";
import classNames from 'classnames';

interface ScrollerButtonProps {
    label: string;
    section: string;
}

const ScrollerButton = ({ label, section }: ScrollerButtonProps) => {
	const handleScroll = () => {
		const target = document.getElementById(section);
		if (target) {
			target.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<button className={styles.button} onClick={handleScroll}>
			<span className={classNames(styles.label, 'button-text-md')}>{label}</span>
            <span className={styles.icon}>
                <IoIosArrowDown />
            </span>
		</button>
	);
}

export default ScrollerButton