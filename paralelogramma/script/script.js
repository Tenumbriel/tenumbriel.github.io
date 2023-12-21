function teruletMagassaggal(oldal, magassag) {
    var error = '';
    if (isNaN(oldal) || oldal <= 0) {
        error += 'Hibás oldal ';
    }
    if (isNaN(magassag) || magassag <= 0) {
        error += 'Hibás magasság';
    }
    if (error !== '') {
        throw new Error(error);
    }
    return oldal * magassag;
}
function teruletSzoggel(Aoldal, Boldal, szog) {
    var error = '';
    if (isNaN(Aoldal) || Aoldal <= 0) {
        error += 'Hibás A oldal ';
    }
    if (isNaN(Boldal) || Boldal <= 0) {
        error += 'Hibás B oldal ';
    }
    if (isNaN(szog) || szog <= 0 || szog >= 180) {
        error += 'Hibás szög';
    }
    if (error !== '') {
        throw new Error(error);
    }
    return Aoldal * Boldal * Math.sin((szog * Math.PI) / 180);
}
function szamol() {
    var eredmeny;
    if (document.getElementById('magassaggal').checked) {
        try {
            var oldal = Number(document.getElementById('oldal').value);
            var magassag = Number(document.getElementById('magassag').value);
            eredmeny = teruletMagassaggal(oldal, magassag).toFixed(3);
        }
        catch (error) {
            eredmeny = error;
        }
    }
    else if (document.getElementById('szoggel').checked) {
        try {
            var Aoldal = Number(document.getElementById('a-oldal').value);
            var Boldal = Number(document.getElementById('b-oldal').value);
            var szog = Number(document.getElementById('szog').value);
            eredmeny = teruletSzoggel(Aoldal, Boldal, szog).toFixed(3);
        }
        catch (error) {
            eredmeny = error;
        }
    }
    else {
        eredmeny = 'Nincs kivalasztva módszer';
    }
    document.getElementById('terulet').value = eredmeny.toString();
}
