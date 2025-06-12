import styles from './Container.module.css'

interface ContainerProps {
  children: React.ReactNode;
  alignment?: 'center' | 'flex-start' | 'flex-end'; // Prop to control alignment
  layout?: 'row' | 'column' | 'grid'; // Added 'grid' option for layout
  gridColumnWidth?: number; // Optional prop to define column width for grid layout
  pad?: string; // Optional prop for padding
}

const Container = ({ children, alignment = 'flex-start', layout = 'row', gridColumnWidth, pad = '32px' }: ContainerProps) => {

  // Use state or props to dynamically adjust styles
  const containerStyles: React.CSSProperties = {
    display: layout === 'grid' ? 'grid' : 'flex', // Switch between flex and grid
    flexDirection: layout === 'grid' ? 'unset' : layout, // Only apply flexDirection if it's flex layout
    justifyContent: alignment,
    gridTemplateColumns: layout === 'grid' ? `repeat(auto-fill, minmax(min(${gridColumnWidth}px, 100%), 1fr))` : 'unset', // Define grid columns dynamically
    gap: '32px',
    padding: pad ? pad : '32', // Use padding prop or default to '0 16px'
    flexGrow: 1, // Allow the container to grow
  };

  return (
    <div style={containerStyles} className={styles.container}>
      {children}
    </div>
  )
}

export default Container;