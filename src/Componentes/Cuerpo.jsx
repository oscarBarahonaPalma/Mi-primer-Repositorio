import '../Estilos/Cuerpo.css'; // Tu archivo de estilos CSS

export default function Cuerpo() {

  // Función para manejar el clic en el botón de Facebook
  const abrirFacebook = () => {
    window.open('https://www.facebook.com', '_blank'); // Abre Facebook en una nueva pestaña
  };
  const abrirWhatsapp = () => {
    window.open('https://api.whatsapp.com/send?phone=+569891234567', '_blank'); // Abre Whatsapp en una nueva pestaña
  }
  const abrirInstagram = () => {
    window.open('https://www.instagram.com/', '_blank'); // Abre Instagram en una nueva pestaña
  }
  const abrirTelegram = () => {
    window.open('https://t.me/your_telegram_username', '_blank'); // Abre Telegram en una nueva pestaña
  }

  return (
    <div id="cuerpo">
      <img src="../public/imagenes/Perfil.png" alt="Perfil" />
      
      <nav id="Padre_Redes">
        {/* Botón de Facebook con evento onClick */}
        <nav 
          className="redes sociales" 
          id="Facebook" 
          onClick={abrirFacebook} // Agregamos el evento de clic aquí
        >
        
        </nav>

        {/* Puedes agregar más botones de redes sociales aquí */}
        <nav
         className="redes sociales" 
         id="Whatsapp" onClick={abrirWhatsapp}></nav>
        <nav className="redes sociales" id="Instagram"
        onClick={abrirInstagram}></nav>
        <nav className="redes sociales" id="Telegram"
        onClick={abrirTelegram}></nav>
      </nav>
    </div>
  );
}
