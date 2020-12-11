// 1. zadatak1.js
//     1. Сачувати у променљиве цену и пречник пице
//     2. Израчунати која је цена пице по цм² (пазити на то да се површина рачуна са полупречником)
//     3. Исписати тај резултат у конзолу

{
    let cenapice = 500;
    let precnik = 60;
    let r = precnik / 2;
    let P = r ** 2 * Math.PI;
    let cenaUcm = cenapice / P;

    console.log('Cena pice po cm je:',cenaUcm);
    console.log('Ukupna cena pice (provera)', P * cenaUcm);
}

// 2. zadatak2.js
//     1. За првих 100 бројева исписати:
//         * FizzBuzz ако је број дељив и са 3 и са 5
//         * Fizz ако је број дељив само са 3
//         * Buzz ако је број дељив само са 5
//         * Број ако није дељив ни са 3 ни са 5

//         ```(1,2,Fizz,4,Buzz,...)```
// *Pomocni linkovi*
//     1. https://www.w3schools.com/js/js_arrays.asp

{
    let FizzBuzz;
    let Fizz;
    let Buzz;
    let num;
    for(FizzBuzz = 1; FizzBuzz <= 100; FizzBuzz++){
        if(FizzBuzz % 3 == 0 && FizzBuzz % 5 == 0){
            console.log('FizzBuzz',FizzBuzz);
        }
    }
    for(Fizz = 1; Fizz <= 100; Fizz++){
        if(Fizz % 3 == 0){
            console.log('Fizz', Fizz);
        }
    }
    for(Buzz = 1; Buzz <= 100; Buzz++){
        if(Buzz % 5 == 0){
            console.log('Buzz', Buzz);
        }
    }
    for(num = 1; num <= 100; num++){
        if(num % 3 != 0 && num % 5 != 0){
            console.log('Broj nije deljiv ni sa 3 ni sa 5',num);
        }
    }
}

// 3. zadatak3.js
//     1. Исписати Марио пирамиду одређене висине:

//     ```
//     За n = 5

//     #
//     ##
//     ###
//     ####
//     #####
//     ```

// Ovaj način je onaj što je Cvijan pokazao i meni mnogo lakši da razumem
{
  let N = 11;
  for( let i = 1; i <= N; i++){
    console.log('*'.repeat(i) + ' '.repeat(N-i));
  }
}

// Ovaj način mi je dosta konfuzan a video sam ga na netu.
{
    let rows = 5;
    {
        for(let i = 1; i <= rows; i++){
          let string = '';
          for(let j = 1; j <= i; j++){
            string += '#';
          }
          console.log(string);
        }
     };
}


// 4. zadatak4.js
//     1. Исписати Марио пирамиду одређене висине:

//     ```
//     За n = 5

//         #
//        ##
//       ###
//      ####
//     #####
//     ```

// Ovaj način je onaj što je Cvijan pokazao i meni mnogo lakši da razumem
{
  let N = 15;
  for(let i = 1; i <= N; i++){
    console.log(' '.repeat(N-i) + '*'.repeat(i));
  }
}

// Ovaj način mi je dosta konfuzan a video sam ga na netu.
 {
     let rows = 5;
      {
         for(let i = 1; i <= rows; i++){
           let string = '';
           for(let k = 1; k <= rows - i; k++){
             string += ' ';
           }
           for(let j = 1; j <= i; j++){
             string += '#';
           }
          console.log(string);
         }
      }
 }


// 5. zadatak5.js
//     1. Исписати Марио пирамиду одређене висине:

//     ```
//     За n = 5

//         # #
//        ## ##
//       ### ###
//      #### ####
//     ##### #####

// Pokušao sam da kombinujem ono rešenje sa neta i ovo lakše rešenje. po meni mnogo komlikovano.
 {
   let N = 5;
       for(let i = 1; i <= N; i++){
         let string = '';
         for(let k = 1; k <= N - i; k++){
           string += ' ';
         }
         for(let j = 1; j <= i; j++){
           string += '#';
         }
         let brojzvezdica = N - 1;
         let piramida = string + ' ' + '#'.repeat(i) + ' '.repeat(N-1);
         console.log(piramida);
     }
 }

// Ovo rešenje sam iskoristio kao mnogo lakše i jendostavnije.
{
   let N = 20;
   for( let i = 1; i <= N; i++){
     console.log(' '.repeat(N-i) + '¤'.repeat(i) + ' ' + '¤'.repeat(i) + ' '.repeat(N-i));
   }
}
