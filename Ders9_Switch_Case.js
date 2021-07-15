// if else mantigi gibi calisir uzun if else blokalri olusturdugumuzda bunu kullanmak mantikli ve kod karmasikligini giderir.


// 3 e esitlerigimiz icin carsamba degerini veriyor
let haftaninGunu = 3;

if (haftaninGunu === 1) {
    console.log("Pazartesi")
}else if (haftaninGunu === 2) {
    console.log("Sali")
}else if (haftaninGunu === 3) {
    console.log("Carsamba")
}else if (haftaninGunu === 4) {
    console.log("Persembe")
}else if (haftaninGunu === 5) {
    console.log("Cuma")
}else if (haftaninGunu === 6) {
    console.log("Cuma")
}else if (haftaninGunu === 7) {
    console.log("Cuma")
}

//swicth yapisi ile
let haftaninGunu2 = 2

switch (haftaninGunu2){
    case 1:
        console.log("pazartesi")
        break
    case 2:
        console.log("sali")
        break
    case 3:
        console.log("carsamba")
        break
    case 4:
        console.log("persembe")
        break
    case 5:
        console.log("cuma")
        break
    case 6:
        console.log("cumartesi")
        break
    case 7:
        console.log("pazar")
        break
    default:
        console.log("Gecersiz Sayi eslesen gun yok")
        break
}
