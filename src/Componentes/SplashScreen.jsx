import PropTypes from 'prop-types';
import '../Estilos/SplashScreen.css'; // Tu archivo de estilos CSS

export default function SplashScreen({ isFading }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100vh',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
        ...(isFading ? { opacity: 0, transition: 'opacity 0.3s ease' } : {}),
      }}
    >
      <h1 id='Hello' style={{ margin: 0 }}>¡Hello, Bienvenido!</h1>
    </div>
  );
}

// ✅ Validación de props
SplashScreen.propTypes = {
  isFading: PropTypes.bool.isRequired, // isFading debe ser un booleano y obligatorio
};