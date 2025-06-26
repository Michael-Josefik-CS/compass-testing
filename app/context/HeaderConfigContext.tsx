// context/HeaderConfigContext.tsx
/* import { createContext, useContext, useState } from 'react';

export type HeaderVariant = 'default' | 'image' | 'branded';

const HeaderContext = createContext({
  variant: 'default' as HeaderVariant,
  setVariant: () => {},
});

export const useHeaderConfig = () => useContext(HeaderContext);

export const HeaderProvider = ({ children }: { children: React.ReactNode }) => {
  const [variant, setVariant] = useState<HeaderVariant>('default');

  return (
    <HeaderContext.Provider value={{ variant, setVariant }}>
      {children}
    </HeaderContext.Provider>
  );
}; */