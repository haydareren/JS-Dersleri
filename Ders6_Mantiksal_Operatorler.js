// ve veya tanimini yapacagiz
// ve kullanildiginda
// ve kullanildiginda iki kosulda saglanmalidir
// veya kullanildiginda iki kosuldan birinin saglanmasi yeterli olur

// &&  ve    ||  veya    olarak kullanilir.

// ve oldugu iki kosulunda karsilamasi gerekir ikiside saglarsa true donecektir

let sayi1 = 10;
let sayi2 = 20;

// bu islem true dur
console.log(sayi1 < 15 && sayi2 > 19)

// bu islem false dir
console.log(sayi1 < 15 && sayi2 < 19)

// bu islem true alir cunlu sayi1 < 15 degeri dogru olmasi yeterli
console.log(sayi1 < 15 || sayi2 < 19)

