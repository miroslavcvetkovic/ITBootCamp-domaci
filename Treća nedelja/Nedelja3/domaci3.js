//1. Написати функцију која исписује све елементе низа који су дељиви са 5
{

    let brojevi = [10, 5, 8, 7, 62, 32, 11, 18, 74, 92, 65, 22, 9, 3, 12, 96, 84, 25, 125, 150, 33, 50]
    let drugibrojevi = [61, 12, 15, 45, 32, 2, 5, 9, 20]

    function element5(x) {
        
         for (let el of x) {
              if (el % 5 == 0) {
                  console.log(el);
                 }
        }  
         return
    }
    console.log(element5(brojevi));
    console.log(element5(drugibrojevi));

}

console.log('==========================================================================');
console.log('==========================================================================');

//2. Написати функцију која враћа колико пице вам је довољно за доживотно снабдевање\
//Уноси се колико пице поједете на месечном нивоу, и колико година имате
//(Рачуна се да је довољно достављати до стоте године)

// ```
// function divisibleByFive(arr){
//     ...
// }
// divisibleByFive([1,2,3,4,5,10,15,23,1,5]) // Исписује -> 5,10,15,5
// function lifeSupply(numPerMonth,age){
//     ...
// }
// lifeSupply(10,26) // Враћа 8880
// console.log(lifeSupply(10,26)) // Исписује 8880
// ```
{

function dovoljno(brojPicaPoMesecu, godinaStarosti){
    if(brojPicaPoMesecu > godinaStarosti){
        let tmp = brojPicaPoMesecu
        brojPicaPoMesecu = godinaStarosti
        godinaStarosti = tmp
    }
    
    let brojPicaPoGodini = brojPicaPoMesecu * 12
    let ostatakGodina = 100 - godinaStarosti
    ukupanBrojPicaDozivotno = brojPicaPoGodini * ostatakGodina

    return ukupanBrojPicaDozivotno
    }
    
    
    console.log(dovoljno(10,26));
    console.log(dovoljno(10,33));
    console.log(dovoljno(26,10)); //test za obrnuti redosled parametara.
    console.log(dovoljno(10,85));


}

