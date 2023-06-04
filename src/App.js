import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes';
import { createContext, useState } from 'react';

export const ThemeContext = createContext();

function App() {
  const [isDark, setIsDark] = useState(true);
  return (
    <ThemeContext.Provider
      value={{ isDark, setIsDark }}
    >
      <div data-theme={`${isDark ? "dark" : "retro"}`} className='bg-base-100'>
        <RouterProvider router={router}></RouterProvider>
        <Toaster />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
