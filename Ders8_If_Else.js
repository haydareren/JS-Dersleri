
// parantez icindeki degere bakilir kousulu saglarsa calisir saglamaz ise else bloguna gecer

let alininYasi = 28;
let velininYasi = 26;

if (alininYasi < velininYasi) {
    console.log("ali veliden kucuktur")
} else {
    console.log("ali veliden buyuktur")
}

// tekli islem
let denklem = "x+y=12"
if (denklem === "x+y=12") {
    console.log("x+y=12")
}

// Ternary if else  yani kisa sekilde kullanimi
// a ve b degerini degismeyecegim icin  const ile tanimladim c yi baska degerleri esitleyecegim icin let kullandim
// a kucuk b ise 10 degil ise 100 yazdiriyorum

const a = 10;
const b = 20;
let c = 30

c =( a < b) ? 10 : 100
console.log(c)

