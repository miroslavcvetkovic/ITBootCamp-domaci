// 4. Направити функцију која прима низ покемона, пореди покемоне по јачини и враћа као победника оног који има највећу јачину напада.
let pokemoni = [
    {
        ime : 'Digi',
        vrsta : 'vatreni',
        sposobnost : ['skače', 'trči', 'baca vatru', 'pravi vatrene kugle' ],
        karakteristike : 
            {
                napad : 60,
                odbrana : 95,
                brzina : 50
            }
    },
    {
        ime : 'Aqua',
        vrsta : 'vodeni',
        sposobnost : ['pliva', 'pravi talase', 'pravi oluju', 'roni' ],
        karakteristike : 
            {
                napad : 70,
                odbrana : 65,
                brzina : 90
            }
    },
    {
        ime : 'Pigoni',
        vrsta : 'ledeni',
        sposobnost : ['pravi grudve', 'zaleđuje', 'kliza', 'pravi ledenice' ],
        karakteristike : 
            {
                napad : 100,
                odbrana : 85,
                brzina : 60
            }
    },
    {
        ime : 'Elektriko',
        vrsta : 'električni',
        sposobnost : ['pravi električne kugle', 'napada elektricitetom', 'parališe', 'daje snagu drugim pokemonima' ],
        karakteristike : 
            {
                napad : 75,
                odbrana : 98,
                brzina : 88
            }
    }
    ]

let najaci = (pokemoni.sort((a,b)=> {
    if(a.karakteristike.brzina < b.karakteristike.brzina) return -1
    if(a.karakteristike.brzina == b.karakteristike.brzina) return 0
    return 1
}));

console.log(najaci);


// 5. За дати html направити скрипту која:
// 	```
// 	    <div class="wrapper">
// 			<button id="prikaz">PRIKAZI POKEMONE</button>
// 			<button id="pobednik">PRIKAZI NAJJACEG POKEMONA</button>
// 		</div>
// 	```
let wrapper = document.querySelector('.wrapper');
let prikazBtn = document.querySelector('#prikaz');
let pobednikBtn = document.querySelector('#pobednik');

prikazBtn.addEventListener('click',()=>{
    const divInfo = document.createElement ('div')
    divInfo.innerHTML = `
    <p>Opis pokemona</p>
    <p>Naziv: Digi <br>
    Vrsta: vatreni <br>
    Sposobnost: skače, trči, baca vatru, pravi vatrene kugle <br>
    Karakteristike: <br>
    Napad => 60 <br>
    Odbrana => 95 <br>
    Brzina => 50 </p> <br>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0USYB3i2wnK1UXy_8_LOBcgjcfyVQw-AkQg&usqp=CAU" width= 30%>
    <br>
    <hr>
    <br>
    <p>Opis pokemona</p>
    <p>Naziv: Aqua <br>
    Vrsta: vodeni <br>
    Sposobnost: pliva, pravi talase, pravi oluju, roni kugle <br>
    Karakteristike: <br>
    Napad => 70 <br>
    Odbrana => 65 <br>
    Brzina => 90 </p> <br>
    <img src="https://pokemon-info.estranky.cz/img/mid/7/squirtle.jpg" width= 30%>
    <br>
    <hr>
    <br>
    <p>Opis pokemona</p>
    <p>Naziv: Pigoni <br>
    Vrsta: ledeni <br>
    Sposobnost: pravi grudve, zaleđuje, kliza, pravi ledenice <br>
    Karakteristike: <br>
    Napad => 100 <br>
    Odbrana => 85 <br>
    Brzina => 60 </p> <br>
    <img src="https://i.pinimg.com/originals/8b/20/b2/8b20b2714498759d49daa25ffdef0338.gif" width= 30%>
    <br>
    <hr>
    <br>
    <p>Opis pokemona</p>
    <p>Naziv: Elektro <br>
    Vrsta: električni <br>
    Sposobnost: pravi električne kugle, napada elektricitetom, parališe, daje snagu drugim pokemonima <br>
    Karakteristike: <br>
    Napad => 75 <br>
    Odbrana => 98 <br>
    Brzina => 88 </p> <br>
    <img src="https://www.postavy.cz/foto/pikachu-foto.jpg" width= 30%>
    <br>
    <hr>
    <br>
    `
    wrapper.append(divInfo)
})

// 	*На клик на дугме прикажи покемоне приказује све покемоне из низа у формату :

//     ```
// 	    <div>
//             <p>Opis pokemona</p>
//             <img src="slika odgovarajućeg pokemona">
//         </div>
//     ```

// 	*На клик на дугме прикажи најјачег покемона приказује покемона који има најјачи напад (користити већ написану функцију иѕ 4. задатка) по истом формату.

// 6. На страници постоје 2 дугмета за наручивање (као на страници пицерије, ORDER)
//     И постоје 2 дугмета за наручивање одмах 

//     1. Дугмићи за 'наручивање' повећавају бројач
//     2. Дугмићи за 'наручивање одмах' ресетују бројач на нула и исписују додатну поруку (Порука у облику: Наручили сте [X] пица, [ danasnji datum i vreme ])
//     Напомена:  X је бројач, проверити да ли је бројач 0, и ако јесте кликом на наручивање одмах избацује одговарајућу /// поруку за грешку;
