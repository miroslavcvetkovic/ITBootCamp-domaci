// 1. zadatak1.js:
//     1. За два броја (а и б) исписати њихов: Збир,разлику,производ,количник,остатак при дељењу,степен (а^b)
{
    let a = 3;
    let b = 4;
    let zbir = a + b;
    let razlika = a -b;
    let proizvod = a * b;
    let kolicnik = a / b;
    let ostatak = a % b;
    let stepen = a ** b;
    console.log(zbir, razlika, proizvod, kolicnik, ostatak, stepen);

    let zbir1 = b + a;
    let razlika1 = b - a;
    let proizvod1 = b * a;
    let kolicnik1 = b / a;
    let ostatak1 = b % a;
    let stepen1 = b ** a;
    console.log(zbir1, razlika1, proizvod1, kolicnik1, ostatak1, stepen1);
}



// 2.  zadatak2.js  - Продавница
//     1. Направити променљиву која представља цену производа коју купац жели да купи
//     2. Направити променљиву која представља количину новца коју купац има
//     3. Ако купац нема довољно новца, исписати поруку: "Немате довољно новца", а затим написати тренутно стање (остаје исто)
//     4. Ако има довољно новца, исписати: "Успешно сте купили производ", а затим исписати тренутно стање (сада измењено)
{
    let cena = 23;
    let kolicinanovca = 5;
    let kusur = kolicinanovca - cena;
    let doplata = cena -kolicinanovca;
    if(kolicinanovca < cena){
        console.log('Nemate dovoljno novca! Morate imati još', doplata, 'dinara. Kako biste mogli kupiti ovaj proizvod.');
    }
    else if(cena <= kolicinanovca){
        console.log('Imate dovoljno novca. Uspešno ste kupili proizvod! Na raspolaganju Vam ostaje', kusur, 'dinara.');
    }
}
{
    let cena = 23;
    let kolicinanovca = 50;
    let kusur = kolicinanovca - cena;
    let doplata = cena -kolicinanovca;
    if(kolicinanovca < cena){
        console.log('Nemate dovoljno novca! Morate imati još', doplata, 'dinara. Kako biste mogli kupiti ovaj proizvod.');
    }
    else if(cena <= kolicinanovca){
        console.log('Imate dovoljno novca. Uspešno ste kupili proizvod! Na raspolaganju Vam ostaje odnosno Vaš kusur je', kusur, 'dinara.');
    }
}

// 3. zadatak3.js
//     1. Направити променљиву која има вредност неког броја (цео број)
//     2. Уколико је број дељив са 3, исписати поруку: Број _ је дељив са 3
//     3. Ако није, Број _ није дељив са 3

{
    let num = 5
    if(num % 3 == 0){
        console.log('Broj je deljiv sa brojem 3');
    }
    else{
        console.log('Broj NIJE deljiv sa 3.');
    }
}
{
    let num = 99
    if(num % 3 == 0){
        console.log('Broj je deljiv sa brojem 3');
    }
    else{
        console.log('Broj NIJE deljiv sa 3.');
    }
}


// 4. zadatak4.js
//     1. Исписати првих 1000 бројева дељивих са 5

{
    for(let i = 1; i < (1001 * 5); i++){
        if(i % 5 == 0){
            console.log(i);
        }
    }
}
