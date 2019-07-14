import PistaAudio from "./pista-audio";
import Playlist from "./playlist";
import Musica from "./musica";

let tema1: Musica = new PistaAudio(1, "El Tiempo No Para", 311, "Bersuit Vergarabat");
let tema2: Musica = new PistaAudio(2, "Mi Caramelo", 290, "Bersuit Vergarabat");
let tema3: Musica = new PistaAudio(3, "Party Rock Anthem", 408, "LMFAO");
let tema4: Musica = new PistaAudio(4, "Sorry for Party Rocking", 421, "LMFAO");
let tema5: Musica = new PistaAudio(5, "Fix You", 255, "Coldplay");
let tema6: Musica = new PistaAudio(6, "Speed of Sound", 455, "Coldplay");
let tema7: Musica = new PistaAudio(7, "Viva la Vida", 320, "Coldplay");
let tema8: Musica = new PistaAudio(8, "With or Without You", 360, "U2");
let tema9: Musica = new PistaAudio(9, "Vertigo", 355, "U2");
let tema10: Musica = new PistaAudio(10, "City of Blinding Lights", 284, "U2");
let tema11: Musica = new PistaAudio(11, "A la Luz de la Luna", 438, "El Indio Solari");
let tema12: Musica = new PistaAudio(12, "Yo Canibal", 258, "Patricio Rey y sus Redonditos de Ricota");

let base = new Playlist('Playlist Base');
base.agregar(tema1);
base.agregar(tema2);
base.agregar(tema3);
base.agregar(tema4);
base.agregar(tema5);
base.agregar(tema6);
base.agregar(tema7);
base.agregar(tema8);
base.agregar(tema9);
base.agregar(tema10);
base.agregar(tema11);
base.agregar(tema12);

let playlist1 = new Playlist("Clasicos del Rock");
playlist1.agregar(tema1);
playlist1.agregar(tema2);
playlist1.agregar(tema8);
playlist1.agregar(tema9);
playlist1.agregar(tema10);
playlist1.agregar(tema12);

let playlist2 = new Playlist("Lo mejor");
playlist2.agregar(tema3);
playlist2.agregar(tema4);
playlist2.agregar(tema7);
playlist2.agregar(tema12);

let playlist3 = new Playlist("Coldplay");
playlist3.agregar(tema5);
playlist3.agregar(tema6);
playlist3.agregar(tema7);

let playlist4 = new Playlist("El Indio");
playlist4.agregar(tema12);
playlist4.agregar(tema11);

console.log(playlist1);
console.log(playlist2);
console.log(playlist3);
console.log(playlist4);

console.log("Duracion lista base: " + base.getDuracion());
console.log("Duracion de Clasicos del Rock: " + playlist1.getDuracion());
console.log("Duracion de Lo Mejor: " + playlist2.getDuracion());
console.log("Duracion de Coldplay: " + playlist3.getDuracion());
console.log("Duracion de El Indio: " + playlist4.getDuracion());
