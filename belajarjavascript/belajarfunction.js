// const temperaturinCelcius = 90;
// const temperaturinFahrenhit = 9 / 5 * temperaturinCelcius + 32;



// document.getElementByClassName("h1").innerText = "hasil konversi :" + temperaturinFahrenhit;
// document.getElementsByClassName

// const temperatureInFahrenheit = 9 / 5 * temperatureInCelsius + 32;

// console.log('Hasil konversi:', temperatureInFahrenheit);



// membuat function 
// function convertCelsiusToFahrenheit(temperature) {
//   const temperatureInFahrenheit = 9 / 5 * temperature + 32;
 
//   console.log('Hasil konversi:', temperatureInFahrenheit);
// }


// console.log(convertCelsiusToFahrenheit);

// const temperatureInCelsius = 90;


// console.log(convertCelsiusToFahrenheit(temperatureInCelcius));














// function sebutnama(melvin){
//  return "nama saya adalah melvin";
// }

// console.log(sebutnama)


function namaFungsi(parameter1, parameter2,) {
  // Kode yang akan dijalankan oleh fungsi
  return hasil; // (opsional) Mengembalikan nilai
}

function greet(name) {
  return "Hello, " + name;
}

console.log(greet("Melvin")); // Output: Hello, Melvin

function abang(salsa) {
  return "saya abang salsa" + salsa;
 }

console.log(abang("salsa"));

function melvin(hari){
return "halo," + hari;
}


console.log(melvin("salsa"))


function melvin(salsa){
  return "saya suka " + salsa;
}

console.log(melvin("sama salsa"))

function melvin(salsa, melvin){
  return "saya suka sama" + salsa + melvin;
}


console.log(melvin("melvin", 232939));



//  ini contoh kode erroor


// function melvin(melvin){
//   return "saya suka sama" + salsa + melvin;
// }


// console.log(melvin("melvin", 232939));


// ini function expresion(ekspresi fungsi)

// // struktru dalam function expresion
// const namaFungsi = function(parameter1, parameter2, ...) {
//   // Kode di dalam fungsi
//   return hasil; // (opsional)
// };

const babi = function (cantik) {
  return "saya suka sama " + cantik;

}
console.log(babi('salsa'));

const hrd = function (salsa, melvin) {
  return "saya sekolah di " + salsa + "saya tinggal di desa " + melvin;
};

console.log(hrd("smk satya praja ", "di desa kendalrejo"));

const tanaman = function( hari1, hari2) {
  return "halo kamu siapa " + hari1 + "hari ini kamu mau makan apa " + hari2;
};

console.log(tanaman("melvin lah ", "mie ayam lah kan enak"))


// function arrow 
// const namaFungsi = (parameter1, parameter2, ...) => {
//   // Kode di dalam fungsi
//   return hasil; // (opsional)
// };



const roso = (hari1, hari2, hari3) => {
  return " kamu tinggal di mana " + hari1 + "kamu sekolah di mana " + hari2 + "kamu kok gak sekolah " + hari3;
};

console.log(roso("kendalrejo", "smk satya praja 2 petarukan", "ya ini mau kerja"))


const sugi = (nama1, nama2, nama3) => {
  return "halo saya siswa " + nama1 + "  saya sedang belajar " + nama2 + "dan saya ingin bekerja di " + nama3;
};
console.log(sugi("smk satya praja 2 petarukan ", "javascript", "bumn" ));

const gus = (belajar1, belajar2, belajar3) => {
  return "saya tadi " + belajar1 + "di desa " + belajar2 + "saya mau " + belajar3;

};
console.log(gus("nyawah ", "pesadean ", "sukses"));


function tambah (a, b) {// "a" dan "b" adalah parameter
  return a + b ;
}
 console.log(tambah(10, 20)); // "10" dan "20" adalah argumen


// default parameter 



function greet(name = "teman") {
  return "Hello, " + name;
}

console.log(greet()); // Output: Hello, teman
console.log(greet("Melvin")); // Output: Hello, Melvin
 // nanti belajar 6. Anonymous Function (Fungsi Tanpa Nama)