import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type CartItem = {
  id: string;
  name: string;
  imgUrl: string;
  price: number;
  quantity: number;
  size: string;
  checked: boolean;
};

type StepContextType = {
  whichStep: string;
  setWhichStep: (step: string) => void;
  selectedItems: CartItem[];
  setSelectedItems: (items: CartItem[]) => void;
};

const StepContext = createContext<StepContextType | undefined>(undefined);

export const StepProvider = ({ children }: { children: ReactNode }) => {
  const [whichStep, setWhichStep] = useState('');
  const [selectedItems, setSelectedItems] = useState<CartItem[]>([]);

  useEffect(() => {
    if (whichStep) {
      localStorage.setItem('step', whichStep); 
    }
  }, [whichStep]);

  useEffect(() => {
    if (selectedItems.length > 0) {
      localStorage.setItem('items', JSON.stringify(selectedItems));
    }
  }, [selectedItems]);

  useEffect(() => {
    const savedStep = localStorage.getItem('step');
    const savedItems = localStorage.getItem('items');
    
    if (savedStep) {
      setWhichStep(savedStep); 
    }
    else {
      localStorage.setItem('step', '1'); 
    }
    
    if (savedItems) {
      try {
        const parsedItems = JSON.parse(savedItems) as CartItem[];
        if (Array.isArray(parsedItems)) {
          setSelectedItems(parsedItems);
        }
      } catch (error) {
        console.error('解析 items 失败:', error);
      }
    }
  }, []);

  const value = {
    whichStep,
    setWhichStep,
    selectedItems,
    setSelectedItems
  };

  return (
    <StepContext.Provider value={value}>
      {children}
    </StepContext.Provider>
  );
};

export const useStep = () => {
  const context = useContext(StepContext);
  if (!context) {
    throw new Error('useStep must be used within a StepProvider');
  }
  return context;
};