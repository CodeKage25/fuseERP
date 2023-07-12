import React, { createContext, useContext, useState } from 'react';

interface State {
  chat: boolean;
  cart: boolean;
  userProfile: boolean;
  notification: boolean;
}

interface ContextProps {
  currentColor: string;
  currentMode: string;
  activeMenu: boolean;
  screenSize: undefined | string;
  setScreenSize: (size: undefined | string) => void;
  handleClick: (clicked: keyof State) => void;
  isClicked: State;
  initialState: State;
  setIsClicked: React.Dispatch<React.SetStateAction<State>>;
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentColor: React.Dispatch<React.SetStateAction<string>>;
  setCurrentMode: React.Dispatch<React.SetStateAction<string>>;
  setMode: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setColor: (color: string) => void;
  themeSettings: boolean;
  setThemeSettings: React.Dispatch<React.SetStateAction<boolean>>;
}

const StateContext = createContext<ContextProps | undefined>(undefined);

const initialState: State = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [screenSize, setScreenSize] = useState<undefined | string>(undefined);
  const [currentColor, setCurrentColor] = useState('#000000');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState<State>(initialState);

  const setMode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  };

  const setColor = (color: string) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };

  const handleClick = (clicked: keyof State) => setIsClicked({ ...initialState, [clicked]: true });

  const contextValue: ContextProps = {
    currentColor,
    currentMode,
    activeMenu,
    screenSize,
    setScreenSize,
    handleClick,
    isClicked,
    initialState,
    setIsClicked,
    setActiveMenu,
    setCurrentColor,
    setCurrentMode,
    setMode,
    setColor,
    themeSettings,
    setThemeSettings,
  };

  return <StateContext.Provider value={contextValue}>{children}</StateContext.Provider>;
};

export const useStateContext = (): ContextProps => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error('useStateContext must be used within a ContextProvider');
  }
  return context;
};
