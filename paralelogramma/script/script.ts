function teruletMagassaggal(oldal: number, magassag: number): number {
    let error = '';
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

function teruletSzoggel(Aoldal: number, Boldal: number, szog: number): number {
    let error = '';
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
    let eredmeny: number | string;
    if ((document.getElementById('magassaggal') as HTMLInputElement).checked) {
        try {
            const oldal = Number((document.getElementById('oldal') as HTMLInputElement).value);
            const magassag = Number((document.getElementById('magassag') as HTMLInputElement).value);
            eredmeny = teruletMagassaggal(oldal, magassag).toFixed(3);
        } catch (error) {
            eredmeny = error;
        }
    } else if ((document.getElementById('szoggel') as HTMLInputElement).checked) {
        try {
            const Aoldal = Number((document.getElementById('a-oldal') as HTMLInputElement).value);
            const Boldal = Number((document.getElementById('b-oldal') as HTMLInputElement).value);
            const szog = Number((document.getElementById('szog') as HTMLInputElement).value);
            eredmeny = teruletSzoggel(Aoldal, Boldal, szog).toFixed(3);
        } catch (error) {
            eredmeny = error;
        }
    } else {
        eredmeny = 'Nincs kivalasztva módszer';
    }
    (document.getElementById('terulet') as HTMLInputElement).value = eredmeny.toString();
}
