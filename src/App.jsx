import './App.css';
import Header from './Componentes/Header';
import Cuerpo from './Componentes/Cuerpo';
import RelojDigital from './Componentes/RelojDigital';
import Presentacion from './Componentes/Presentacion';
import SplashScreen from './Componentes/SplashScreen';
import { useEffect, useState } from 'react';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
      const removeSplashTimer = setTimeout(() => {
        setShowSplash(false);
      }, 500);

      return () => clearTimeout(removeSplashTimer); // Limpiar el segundo timeout
    }, 1000);

    return () => clearTimeout(fadeTimer); // Limpiar el primer timeout
  }, []);

  return (
    <div className="App">
      {showSplash && <SplashScreen isFading={isFading} />}
      <Header />
      <Cuerpo />
      <Presentacion />
      <RelojDigital />
    </div>
  );
}

export default App;
