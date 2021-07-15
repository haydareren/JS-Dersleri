//kullanici birdigi sayi'yi saat dakika saniye olarak yazdiralim
// eger saat istenirse if else bloklari ile saatli kavram yaptirilir ileriki derslerde gorecegiz

const sayi = prompt("bir sayi giriniz ve dakika ve saniye olarak hesaplayalim")
console.log(sayi)
const dakika = parseInt(sayi / 60)
const saniye = parseInt(sayi % 60)

console.log(`${dakika} dakika:${saniye} saniye`)





