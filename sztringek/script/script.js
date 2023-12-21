function randomStringek() {
    var babo = 'Volt egyszer egy földbe vájt lyuk, abban élt egy babó. Nem volt ez a lyuk rút, mocskos, nedves, teli féregmaradékkal, dohszaggal, sem száraz, csupasz, homokos lyuk, ahol se leülni, sem enni nemigen lehet: ez babólyuk volt, ami egyértelmű a kényelemmel.';
    var random = babo.replace(/,/g, '').split(' ').sort(function () { return 0.5 - Math.random(); }).slice(0, 5).join(',');
    document.getElementById('sztringek').value = random;
}
function kerekHarmat() {
    var s = document.getElementById('sztringek').value.split(',');
    if (s.indexOf('') >= 0) {
        document.getElementById('veletlen').textContent = "Ne adj meg üres tringet!";
    }
    else if (s.length < 5) {
        document.getElementById('veletlen').textContent = "Túl keveset adtál meg.";
    }
    else {
        document.getElementById('veletlen').textContent = s.sort(function () { return 0.5 - Math.random(); }).slice(0, 3).join(',');
    }
}
