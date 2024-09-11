// Source Code by Nadhif Rif'at Rasendriya

document.getElementById('luasForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const alas = parseFloat(document.getElementById('alas').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);

    if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
        alert("Masukkan nilai alas dan tinggi yang valid.");
        return;
    }

    const luas = 0.5 * alas * tinggi;
    document.getElementById('luasResult').textContent = `L = ${luas}`;
    document.getElementById('calculationSteps').textContent = `L = 1/2 x ${alas} x ${tinggi} = ${luas}`;
});


document.getElementById('kelilingSegitigaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const sisiA = parseFloat(document.getElementById('sisiA').value);
    const sisiB = parseFloat(document.getElementById('sisiB').value);
    const sisiC = parseFloat(document.getElementById('sisiC').value);

    if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC) || sisiA <= 0 || sisiB <= 0 || sisiC <= 0) {
        alert("Error! Masukkan nilai sisi yang valid.");
        return;
    }

    const keliling = sisiA + sisiB + sisiC;
   // document.getElementById('kelilingSegitigaResult').textContent = `K = ${keliling}`;
    document.getElementById('kelilingSegitigaResult').textContent = `K = ${sisiA} + ${sisiB} + ${sisiC} = ${keliling}`; 
});

function switchTab(tabId) {

    document.querySelectorAll('.tab-content').forEach(function(content) {
        content.style.display = 'none';
    });

    document.querySelectorAll('.tab-button').forEach(function(button) {
        button.classList.remove('active');
    });

    document.getElementById(tabId).style.display = 'block';
    document.querySelector(`.tab-button[onclick="switchTab('${tabId}')"]`).classList.add('active');
}

document.getElementById('luasJajarGenjangForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const alas = parseFloat(document.getElementById('alasJG').value);
    const tinggi = parseFloat(document.getElementById('tinggiJG').value);

    if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
        alert("Masukkan nilai alas dan tinggi yang valid.");
        return;
    }

    const luas = alas * tinggi;
    document.getElementById('luasJajarGenjangResult').textContent = `L = ${alas} x ${tinggi} = ${luas}`; 
});

document.getElementById('kelilingJajarGenjangForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const sisiA = parseFloat(document.getElementById('sisiAJG').value);
    const sisiB = parseFloat(document.getElementById('sisiBJG').value);

    if (isNaN(sisiA) || isNaN(sisiB) || sisiA <= 0 || sisiB <= 0) {
        alert("Masukkan nilai sisi yang valid.");
        return;
    }

    const keliling = 2 * (sisiA + sisiB);
    document.getElementById('kelilingJajarGenjangResult').textContent = `K = 2 x (${sisiA} + ${sisiB}) = ${keliling}`; // Menambahkan langkah perhitungan
});

function resetForm(formId) {
    document.getElementById(formId).reset();
    if (formId === 'luasForm') {
        document.getElementById('luasResult').textContent = '';
        document.getElementById('calculationSteps').textContent = '';
    } else if (formId === 'kelilingSegitigaForm') {
        document.getElementById('kelilingSegitigaResult').textContent = '';
    } else if (formId === 'luasJajarGenjangForm') {
        document.getElementById('luasJajarGenjangResult').textContent = '';
    } else if (formId === 'kelilingJajarGenjangForm') {
        document.getElementById('kelilingJajarGenjangResult').textContent = '';
    }
}
