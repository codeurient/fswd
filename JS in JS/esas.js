import {
    url,
    valyutaCevirmek,
    qutu,
} from './elave.js';

console.log("Bu bizim esas JS faylimizdir: ", url, valyutaCevirmek);  




var metin = '';
function ekranaYazdir(deyerler) {
    metin += deyerler[0] + "<br>";
    metin += deyerler[1] + "<br>";
    metin += deyerler[2] + "<br>";
    metin += deyerler[3] + "<br>";
}
ekranaYazdir(qutu);
document.getElementById('test').innerHTML = metin;