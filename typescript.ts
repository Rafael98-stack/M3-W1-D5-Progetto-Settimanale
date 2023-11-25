

interface Smartphone{
    nome: string;
    carica: number;
    numerochiamate: number;

     ricarica(ricaricatelefono: number): void;
chiamata(durataminuti: number): void;
numero404(): number; 
getnumerochiamate(): number;
azzerachiamate(): void;
}

class User implements Smartphone {
    nome: string;
carica: number = 0;
numerochiamate: number = 0;
costochiamata: number = 0.2;
constructor (_nome: string, _carica: number = 0, _numerochiamate: number = 0, _costochiamata: number = 0.2) {
this.nome = _nome;
this.carica = _carica;
this.numerochiamate = _numerochiamate;
this.costochiamata = _costochiamata;
}

ricarica(ricaricatelefono: number): void {
this.carica += ricaricatelefono;
};

chiamata(durataminuti: number): void {
    const costoPerChiamata = durataminuti * this.costochiamata;
    if (costoPerChiamata <= this.carica) {
this.carica -= costoPerChiamata;
this.numerochiamate ++;
    } else {
        console.log("Credito Esaurito o Insufficente")
    }
}

numero404(): number {
    const costiTotali = this.numerochiamate * this.costochiamata;
    return this.carica - costiTotali;
}

getnumerochiamate(): number {
    return this.numerochiamate;
}

azzerachiamate(): void {
    this.numerochiamate = 0;
}

getcontenitore(): void {
    const contenitore = document.getElementById("contenitore");
    if (contenitore) {
        contenitore.innerHTML = `
        
        <p> ${this.nome}</p>
        <p>ricarica ${this.carica}</p>
        `
    } else {
        console.log("error")
    }
}
}

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

const Utente1 = new User ("Marco", this._carica, this._numerochiamate, this._costochiamata)



 function Ricarica(): void {
    // const invioRicarica = document.getElementById("invioRicarica") as HTMLButtonElement
    const ricarica = document.getElementById("ricarica") as HTMLInputElement;
  const totRicarica: number = parseInt(ricarica.value) || 0;
Utente1.ricarica(totRicarica)
Utente1.getcontenitore()
}

function Chiamata(): void {
const durataMinuti = document.getElementById("chiamata") as HTMLInputElement;
const durata: number = parseInt(durataMinuti.value) || 0;
let i = 0;
const intervallo = setInterval(() => {
    if (Utente1.carica > 0 && i < durata) {
Utente1.chiamata(i)
i++;
Utente1.getcontenitore();
    } else {
clearInterval(intervallo)
    }
}, 1000)
}





