var User = /** @class */ (function () {
    function User(_nome, _carica, _numerochiamate, _costochiamata) {
        if (_carica === void 0) { _carica = 0; }
        if (_numerochiamate === void 0) { _numerochiamate = 0; }
        if (_costochiamata === void 0) { _costochiamata = 0.2; }
        this.carica = 0;
        this.numerochiamate = 0;
        this.costochiamata = 0.2;
        this.nome = _nome;
        this.carica = _carica;
        this.numerochiamate = _numerochiamate;
        this.costochiamata = _costochiamata;
    }
    User.prototype.ricarica = function (ricaricatelefono) {
        this.carica += ricaricatelefono;
    };
    ;
    User.prototype.chiamata = function (durataminuti) {
        var costoPerChiamata = durataminuti * this.costochiamata;
        if (costoPerChiamata <= this.carica) {
            this.carica -= costoPerChiamata;
            this.numerochiamate++;
        }
        else {
            console.log("Credito Esaurito o Insufficente");
        }
    };
    User.prototype.numero404 = function () {
        var costiTotali = this.numerochiamate * this.costochiamata;
        return this.carica - costiTotali;
    };
    User.prototype.getnumerochiamate = function () {
        return this.numerochiamate;
    };
    User.prototype.azzerachiamate = function () {
        this.numerochiamate = 0;
    };
    User.prototype.getcontenitore = function () {
        var contenitore = document.getElementById("contenitore");
        if (contenitore) {
            contenitore.innerHTML = "\n        \n        <p> ".concat(this.nome, "</p>\n        <p>ricarica ").concat(this.carica, "</p>\n        ");
        }
        else {
            console.log("error");
        }
    };
    return User;
}());
// const Utente1 = new User ("Marco", 20, 5, this._costochiamata);
// console.log("Utente1");
// console.log(Utente1.nome);
// console.log(`Ricarica effettua, di: ${Utente1.carica}$`);
// console.log(`Numero di chiamate: ${Utente1.getnumerochiamate()}`);
// console.log(`Costo della chiamata: ${Utente1.numero404()}$`);
// console.log(`Cancellazione Numeri Chiamate...`)
// Utente1.azzerachiamate();
// console.log(`Numero di chiamate: ${Utente1.getnumerochiamate()}`);
// const Utente2 = new User ("Luca", 30, 10, this._costochiamata);
// console.log("Utente2");
// console.log(Utente2.nome);
// console.log(`Ricarica effettua, di: ${Utente2.carica}$`);
// console.log(`Numero di chiamate: ${Utente2.getnumerochiamate()}`);
// console.log(`Costo della chiamata: ${Utente2.numero404()}$`);
// console.log(`Cancellazione Numeri Chiamate...`)
// Utente2.azzerachiamate();
// console.log(`Numero di chiamate: ${Utente2.getnumerochiamate()}`);
// const Utente3 = new User ("Mario", 5, 1, this._costochiamata);
// console.log("Utente3");
// console.log(Utente3.nome);
// console.log(`Ricarica effettua, di: ${Utente3.carica}$`);
// console.log(`Numero di chiamate: ${Utente3.getnumerochiamate()}`);
// console.log(`Costo della chiamata: ${Utente3.numero404()}$`);
// console.log(`Cancellazione Numeri Chiamate...`)
// Utente3.azzerachiamate();
// console.log(`Numero di chiamate: ${Utente3.getnumerochiamate()}`);
var Utente1 = new User("Marco", this._carica, this._numerochiamate, this._costochiamata);
function Ricarica() {
    // const invioRicarica = document.getElementById("invioRicarica") as HTMLButtonElement
    var ricarica = document.getElementById("ricarica");
    var totRicarica = parseInt(ricarica.value) || 0;
    Utente1.ricarica(totRicarica);
    Utente1.getcontenitore();
}
function Chiamata() {
    var durataMinuti = document.getElementById("chiamata");
    var durata = parseInt(durataMinuti.value) || 0;
    var i = 0;
    var intervallo = setInterval(function () {
        if (Utente1.carica > 0 && i < durata) {
            Utente1.chiamata(i);
            i++;
            Utente1.getcontenitore();
        }
        else {
            clearInterval(intervallo);
        }
    }, 1000);
}
