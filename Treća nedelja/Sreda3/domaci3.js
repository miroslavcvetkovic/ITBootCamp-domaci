//1. Написати функцију која за параметар прима број сати (0-24) и у зависности од доба дана исписује поруке: Добро јутро , Добар дан или Добро вече.

{
  function dobadana(sat) {
    if (sat < 10) {
      return "Dobro jutro!";
    } else if (sat < 18) {
      return "Dobar dan!";
    } else if (sat < 24) {
      return "Dobro veče!";
    } else {
      return "Nažalost, upisali ste netačano vreme!";
    }
  }
  console.log(dobadana(3));
  console.log(dobadana(14));
  console.log(dobadana(23));
  console.log(dobadana(24));
  console.log(dobadana(34));
}

console.log('==========================================================================');
console.log('==========================================================================');

//2. Написати функцију која израчунава цену пице по квадратном центиметру (параметри функције су полупречник у цм,  и цена пице)

{

function cenaPicePoC2(poluprecnik,ukupnacena){
    if(poluprecnik > ukupnacena){
        let tmp = poluprecnik
        poluprecnik = ukupnacena
        ukupnacena = tmp
    }
    let P = poluprecnik**2 * Math.PI
    return 'Cena pice:  '+ (ukupnacena / P) + '  din./cm2'
}
console.log(cenaPicePoC2(15,600));
console.log('-------------------------------------');
console.log(cenaPicePoC2(25,700));
console.log('-------------------------------------');
console.log(cenaPicePoC2(600,15));
}
