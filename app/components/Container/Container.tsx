import classNames from 'classnames'
import styles from './Container.module.css'

interface ContainerProps {
  children: React.ReactNode;
  verticalStretch?: boolean;
}

const Container = ({ children, verticalStretch }: ContainerProps) => {

  return (
    <div
      className={classNames(styles.container, verticalStretch && styles.verticalStretch)}
    >
      {children}
    </div>
  )
}

export default Container;