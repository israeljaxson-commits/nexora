import React, { createContext, useContext, useState } from 'react';
import { Platform, Country } from '../types';

export interface ToastMessage {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'info';
}

interface AppContextType {
  toasts: ToastMessage[];
  showNotification: (cfg: { title: string; message: string; type: 'success' | 'info' }) => void;
  removeToast: (id: string) => void;
  selectedSimulatorTab: string;
  setSelectedSimulatorTab: (tab: string) => void;
  preloadedPlatform: Platform | null;
  preloadedCountry: Country | null;
  preloadSimulator: (platform: Platform, country: Country) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [selectedSimulatorTab, setSelectedSimulatorTab] = useState<string>('sms');
  const [preloadedPlatform, setPreloadedPlatform] = useState<Platform | null>(null);
  const [preloadedCountry, setPreloadedCountry] = useState<Country | null>(null);

  const showNotification = (cfg: { title: string; message: string; type: 'success' | 'info' }) => {
    const id = 'TOAST-' + Math.floor(Math.random() * 90000 + 10000);
    const newToast: ToastMessage = {
      id,
      title: cfg.title,
      message: cfg.message,
      type: cfg.type,
    };
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const preloadSimulator = (platform: Platform, country: Country) => {
    setPreloadedPlatform(platform);
    setPreloadedCountry(country);
    setSelectedSimulatorTab('sms');
  };

  return (
    <AppContext.Provider
      value={{
        toasts,
        showNotification,
        removeToast,
        selectedSimulatorTab,
        setSelectedSimulatorTab,
        preloadedPlatform,
        preloadedCountry,
        preloadSimulator,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
