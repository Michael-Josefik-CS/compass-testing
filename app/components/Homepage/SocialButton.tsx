import React, { ReactNode } from 'react'
import styles from './SocialButton.module.css'

type SocialButtonProps = {
    icon?: ReactNode;
    onClick?: () => void;
};

const SocialButton = ({ icon }: SocialButtonProps) => {
  return (
    <button className={styles.button}>
        <span className={styles.icon}>{icon}</span>
    </button>
  )
}

export default SocialButton