// piszemy kod do gry w statki: siatka = 6 , statek = 3//
//deklarujemy zmienne przechowujące pola, pod którymi ukryty jest statek//
var randomLoc = Math.floor(Math.random() * 5);

var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
//deklaracja zmiennej przechowującej podane pole użytkownika //
var guess;
// deklaracja zmiennej z liczbą trafień //
var hits = 0;// deklaracja zmiennej z liczbą prób //
var guesses = 0;
//deklaracja zmiennej z informacją o zatopieniu okrętu//
var isSunk = false;


//pętla - dopóki okręt nie jest zatopiony//
while (isSunk == false) {
    guess = prompt('podaj numer pola(zakres: 0-6): ');
    if (guess < 0 || guess > 6) {
        alert("Proszę podać rawidłowy numer komórki");
    } else {
        guesses = guesses + 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            hits = hits + 1;
            alert('Trafiony!');

            if (hits == 3) {
                isSunk = true;
                alert('Zatopiłeś mój okręt!');
            }
        }else {
            alert('Pudło...');
        }

    }
}


var stats = 'Potrzebowałeś ' + guesses + ' trafień, by zatopić okręt. <br> czyli Twoja efektywność wynosi ' +
    (3/guesses);

alert(stats);