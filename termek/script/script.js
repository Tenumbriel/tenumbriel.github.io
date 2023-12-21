var termekek = [];
function hozzaad() {
    var nev = document.getElementById('nev').value;
    var ar = Number(document.getElementById('ar').value);
    if (nev.length < 3) {
        alert('Túl rövid név');
        return;
    }
    var ujTermek = { nev: nev, ar: ar };
    termekek.push(ujTermek);
    document.getElementById('termekek').innerHTML += "<li>".concat(ujTermek.nev, ": ").concat(ujTermek.ar, "</li>");
    if (termekek.length < 5) {
        document.getElementById('atlag').textContent = 'Túl kevés a termék (5-6-7 vagy több)';
        document.getElementById('szoras').textContent = 'Túl kevés a termék (5-6-7 vagy több)';
        document.getElementById('legolcsobb').textContent = 'Túl kevés a termék (5-6-7 vagy több)';
    }
    else {
        var atlag_1 = termekek.reduce(function (szum, termek) { return szum + termek.ar; }, 0) / termekek.length;
        var szoras = Math.sqrt(termekek.map(function (x) { return Math.pow(x.ar - atlag_1, 2); }).reduce(function (x, y) { return x + y; }) / termekek.length);
        document.getElementById('atlag').textContent = atlag_1.toFixed(3).toString();
        document.getElementById('szoras').textContent = szoras.toFixed(3).toString();
        document.getElementById('legolcsobb').textContent = legolcsobb(termekek).nev;
    }
}
function legolcsobb(t) {
    return t.sort(function (x, y) { return x.ar - y.ar; })[0];
}
