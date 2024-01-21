//Exercițiul 2 - video player
//În HTML există <iframe> pentru player-ul Vimeo. Scrieți un script care va salva timpul curent de redare a videoclipului 
//în spațiul de stocare local și, când pagina este reîncărcată, se va continua redarea videoclipului din acel moment.
//Îndepliniți acest task în fișierele 02-video.html și 02-video.js. Împărțiți-l în mai multe subtask-uri:
//Citiți documentația pentru librăria player-ului Vimeo.
//Adăugați biblioteca ca dependență de proiect prin npm.
//Inițializați player-ul în fișierul script așa cum este descris în secțiunea pre-existing player, dar nu uitaiți faptul că 
//player - ul din proiect este adăugat ca pachet npm și nu printr - un CDN.
//Citiți documentația metodei on() și urmărește evenimentul de timeupdate, folosind pentru a actualizați timpul de redare.
//Salvați timpul de redare în local storage. "videoplayer-current-time" va fi cheia de stocare.
//La reîncărcarea paginii, utilizați metoda setCurrentTime() pentru a relua redarea de la poziţia salvată.
//Adaugați la proiect librăria lodash.throttle și faceți astfel încât timpul de redare să fie actualizat în spațiul de stocare 
//nu mai mult de o dată pe secundă.
//

import throttle from 'lodash/throttle';
import  Player  from '@vimeo/player';

const VCT_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const onPlay = function (event) {
  
  localStorage.setItem(VCT_KEY, event.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(VCT_KEY)) || 0);
