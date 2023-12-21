type termek = {
    nev: string;
    ar: number;
};

const termekek: termek[] = [];

function hozzaad() {
    const nev = (document.getElementById('nev') as HTMLInputElement).value;
    const ar = Number((document.getElementById('ar') as HTMLInputElement).value);
    if (nev.length < 3) {
        alert('Túl rövid név');
        return;
    }
    const ujTermek: termek = { nev, ar };
    termekek.push(ujTermek);
    document.getElementById('termekek').innerHTML += `<li>${ujTermek.nev}: ${ujTermek.ar}</li>`;

    if (termekek.length < 5) {
        document.getElementById('atlag').textContent = 'Túl kevés a termék (5-6-7 vagy több)';
        document.getElementById('szoras').textContent = 'Túl kevés a termék (5-6-7 vagy több)';
        document.getElementById('legolcsobb').textContent = 'Túl kevés a termék (5-6-7 vagy több)';
    } else {
        const atlag = termekek.reduce((szum, termek) => szum + termek.ar, 0) / termekek.length;
        const szoras = Math.sqrt(termekek.map((x) => Math.pow(x.ar - atlag, 2)).reduce((x, y) => x + y) / termekek.length);

        document.getElementById('atlag').textContent = atlag.toFixed(3).toString();
        document.getElementById('szoras').textContent = szoras.toFixed(3).toString();
        document.getElementById('legolcsobb').textContent = legolcsobb(termekek).nev;
    }
}

function legolcsobb(t: termek[]): termek {
    return t.sort((x, y) => x.ar - y.ar)[0];
}
