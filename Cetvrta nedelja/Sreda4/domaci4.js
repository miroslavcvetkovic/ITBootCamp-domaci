// 1. Направити објекат покемон који садржи следеће информације: (Направите макар 4 различита покемона)
// 	* Име
//     * Врста
//     * Способности (низ способности покемона)
//     * Карактеристике (објекат са информацијама : напад (број), одбрана (број), брзина (број))

//     Даље, направити низ од ових објеката

//     ```
//     пикачу:
// 	име: пикачу
//     врста: електрични
//     способности: Статички електрицитет,...
// 	карактеристике: напад: 55, одбрана: 30, брзина: 90
//     ```

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
console.log(pokemoni.flat(3));

function listapokemona(x){
    let tmp = []
    for(let i = 0; i<x.length; i++){
        tmp.push(x[i])
       
    }
    return tmp
}

console.log(listapokemona(pokemoni));



// 2. Направити функцију која прима низ горе направљених објеката и враћа један низ способности свих покемона

//     ```
// 	[<...>,...]
//     ```

function allsposobnosti (x){
    let tmp =[]
    for(let i = 0; i < x.length; i++){
        tmp.push(x[i].sposobnost)
    }
    return tmp.flat()
}

console.log(allsposobnosti(pokemoni));

// 3. Сортирати покемоне по брзини, растуће.

console.log(pokemoni.sort((a,b)=> {
    if(a.karakteristike.brzina < b.karakteristike.brzina) return -1
    if(a.karakteristike.brzina == b.karakteristike.brzina) return 0
    return 1
}));