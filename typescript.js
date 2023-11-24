var User = /** @class */ (function () {
    function User(_nome, _carica, _numerochiamate, _costochiamata) {
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
    return User;
}());
var Utente1 = new User("Marco", 20, 5, this._costochiamata);
console.log("Utente1");
console.log(Utente1.nome);
console.log("Ricarica effettua, di: ".concat(Utente1.carica, "$"));
console.log("Numero di chiamate: ".concat(Utente1.getnumerochiamate()));
console.log("Costo della chiamata: ".concat(Utente1.numero404(), "$"));
console.log("Cancellazione Numeri Chiamate...");
Utente1.azzerachiamate();
console.log("Numero di chiamate: ".concat(Utente1.getnumerochiamate()));
var Utente2 = new User("Luca", 30, 10, this._costochiamata);
console.log("Utente2");
console.log(Utente2.nome);
console.log("Ricarica effettua, di: ".concat(Utente2.carica, "$"));
console.log("Numero di chiamate: ".concat(Utente2.getnumerochiamate()));
console.log("Costo della chiamata: ".concat(Utente2.numero404(), "$"));
console.log("Cancellazione Numeri Chiamate...");
Utente2.azzerachiamate();
console.log("Numero di chiamate: ".concat(Utente2.getnumerochiamate()));
var Utente3 = new User("Mario", 5, 1, this._costochiamata);
console.log("Utente3");
console.log(Utente3.nome);
console.log("Ricarica effettua, di: ".concat(Utente3.carica, "$"));
console.log("Numero di chiamate: ".concat(Utente3.getnumerochiamate()));
console.log("Costo della chiamata: ".concat(Utente3.numero404(), "$"));
console.log("Cancellazione Numeri Chiamate...");
Utente3.azzerachiamate();
console.log("Numero di chiamate: ".concat(Utente3.getnumerochiamate()));
