 
 // Demo : Operetörs

 // 1- Can ve Ada ' nın boy ve kg bilgilerini alın.
//2- Alınan bilgilere göre kilo indekslerini hesaplayınız.
 //**  formül : Kişinin kilosu/Boy uzunluğunun karesi
 //3- hesaplanan indeks bilgisine göre karşılaştırma 
 //yapınız. 
 //4- Aşağıdaki tabloya göre Can ve Ada hangi gruba girer.

 // 0-18,4:Zayıf
 // 18,5-24,9:Normal
 // 25,0-29,9:Fazla kilolu
 // 30,0-34,9:Şişman (Obez)

let IndexCan;
let IndexAda;

const kgCan=60;
const kgAda=40;

const heigtCan= 1.70;
const heigtAda= 1.50;

IndexAda = (kgAda) / (heigtAda*heigtAda);

IndexCan = (kgCan) / (heigtCan*heigtCan)

console.log(IndexAda.toFixed(2),IndexCan.toFixed(2));

let adaHigherIndex= IndexAda>IndexCan;
let canHigherIndex=IndexCan>IndexAda;

console.log(adaHigherIndex)

console.log("ada nın kilo indeksi can ın kilo indeksinden daha büyükmüdür?:"+adaHigherIndex)

console.log("")

console.log("can nın kilo indeksi ada ın kilo indeksinden daha büyükmüdür?:"+canHigherIndex) 

console.log("")

let AdaZayif= (IndexAda>=0) && (IndexAda<=18.4);
let AdaNormal= (IndexAda>=18.5) && (IndexAda<=24.9);
let AdaKilolu=(IndexAda>=25) && (IndexAda<=29.9);
let AdaSisman= (IndexAda>=30) && (IndexAda<=34.9);

console.log("ada zayıf:"+AdaZayif);
console.log("ada normal:"+AdaNormal);
console.log("ada kilolu:"+AdaKilolu);
console.log("ada şişman:"+AdaSisman);


let CanZayif= (IndexCan>=0) && (IndexCan<=18.4);
let CanNormal= (IndexCan>=18.5) && (IndexCan<=24.9);
let CanKilolu=(IndexCan>=25) && (IndexCan<=29.9);
let CanSisman= (IndexCan>=30) && (IndexCan<=34.9);

console.log("")
console.log("can zayıf:"+CanZayif);
console.log("can normal:"+CanNormal);
console.log("can kilolu:"+CanKilolu);
console.log("can şişman:"+CanSisman);