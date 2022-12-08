// Fungsi untuk menambahkan input angka atau operator
function tambah(angka) {
    document.getElementById('input').value += angka;
    }
// Fungsi untuk membersihkan input
function bersih() {
    document.getElementById('input').value = "";
    }
// Fungsi untuk menghitung hasil dari input
function hasil() {
    var input = document.getElementById('input').value;
    document.getElementById('input').value = eval(input);
    }