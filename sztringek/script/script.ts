function randomStringek() {	
	const babo = 'Volt egyszer egy földbe vájt lyuk, abban élt egy babó. Nem volt ez a lyuk rút, mocskos, nedves, teli féregmaradékkal, dohszaggal, sem száraz, csupasz, homokos lyuk, ahol se leülni, sem enni nemigen lehet: ez babólyuk volt, ami egyértelmű a kényelemmel.'
	const random = babo.replace(/,/g, '').split(' ').sort(() => 0.5 - Math.random()).slice(0, 5).join(',');
	(document.getElementById('sztringek') as HTMLInputElement).value = random;
}

function kerekHarmat() {
	const s = (document.getElementById('sztringek') as HTMLInputElement).value.split(',');
	if (s.indexOf('') >= 0)  {
		document.getElementById('veletlen').textContent = "Ne adj meg üres tringet!";
	} else if (s.length < 5) {
		document.getElementById('veletlen').textContent = "Túl keveset adtál meg.";
	} else {
		document.getElementById('veletlen').textContent = s.sort(() => 0.5 - Math.random()).slice(0, 3).join(',');
		
	}
}