document.getElementById('luasForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const alas = document.getElementById('alas').value;
    const tinggi = document.getElementById('tinggi').value;
    const luas = 0.5 * alas * tinggi;
    
    document.getElementById('luasResult').textContent = `L = ${luas}`;
    document.getElementById('calculationSteps').textContent = `L = 1/2 x ${alas} x ${tinggi} \nL = ${luas}`;
});

document.getElementById('kelilingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const sisiA = document.getElementById('sisiA').value;
    const sisiB = document.getElementById('sisiB').value;
    const sisiC = document.getElementById('sisiC').value;
    const keliling = parseFloat(sisiA) + parseFloat(sisiB) + parseFloat(sisiC);
    
    document.getElementById('kelilingResult').textContent = `K = ${keliling}`;
});

function resetForm() {
    document.getElementById('luasForm').reset();
    document.getElementById('kelilingForm').reset();
    document.getElementById('luasResult').textContent = '';
    document.getElementById('kelilingResult').textContent = '';
    document.getElementById('calculationSteps').textContent = '';
}

