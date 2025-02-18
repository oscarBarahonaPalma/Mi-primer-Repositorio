import '../Estilos/Header.css';
import 'animate.css';

const Header = () => {
    return (
        <div id='header'>
            <h1 className='animate__lightSpeedInLeft'>Desarrollador Front End</h1>         
<ul>
    <li id='Inicio'>Inicio</li>
    <li>Perfil</li>
    <li>Proyectos</li>
    <li>Cv</li>
    <li>Contactos</li>
</ul>
        </div>
    );
};

export default Header;