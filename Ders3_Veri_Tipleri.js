// veri tipleri number,string,boolean,undefined,null

let numara = 9;
console.log(numara)
console.log(typeof numara)

let isim = "Haydar"
console.log(isim)
console.log(typeof isim)

let soyIsim ="Eren"
console.log(soyIsim)

//birlestirmek istedigimizde baska degisken tanimla
// isim ve soy isime esitle consoleda yazdir

let tamAdim = isim+soyIsim
console.log(tamAdim)

//Backtick ile birlestirme

let tamAdim2 =`${isim} ${soyIsim}`
console.log(tamAdim2)

let dogrumu = true
console.log("Veri degeri : "+dogrumu+ " veri tipi: "+ typeof dogrumu )

// undefined tanimsiz deger
let masa;
console.log(masa)

//null yani bos
let takmaIsim = null
console.log("deger : " +takmaIsim + " veri tipi " + typeof takmaIsim )
