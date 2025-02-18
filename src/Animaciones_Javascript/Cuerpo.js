const Facebook = document.getElementById(Facebook);
const Whatsapp = document.getElementById(Whatsapp);

addEventListener("click", function(Event){
  Event.preventDefault();
  Facebook.this.window.open("https://www.facebook.com/barahona.oscar.9");
  Whatsapp.this.window.open("https://wa.me/593991234567");
   });
