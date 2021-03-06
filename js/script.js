/*

**Milestone 1**
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell’icona e l’icona stessa.
**Milestone 2**
Ciascuna icona ha una proprietà “color”: utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
**Milestone 3**
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone *(animal, vegetable, user)*. Quando l’utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
**BONUS**
1- modificare la struttura dati fornita e valorizzare la proprietà “color” in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo “#” seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
2- popolare le options della select della milestone 3 dinamicamente.

 */


const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

// PRENDO ID CONTENITORE
const iconDisplay = document.getElementById("icons-container");

// GENERO NUOVI ARRAY CONTENENTI SOLO IL KAY:VALUE PAIR CHE MI INTERESSA

const animalsArr = icons.filter(el => el.type === "animal");
const vegetablesArr = icons.filter(el => el.type === "vegetable");
const usersArr = icons.filter(el => el.type === "user");


const selectIcons = document.getElementById("icons-type");


// PRENDO IL VALORE DALL'OPTION E LO ASSEGNO ALL'ARRAY
const all = selectIcons[0].value;
const animals = selectIcons[1].value;
const foods = selectIcons[2].value;
const users = selectIcons[3].value;

// BOTTONE PER SELEZIONARE LE ICONE DA MOSTRARE
selectIcons.addEventListener("click", iconGenerator);

// FUNZIONE CHE IN BASE AL VALUE DEL SELECT RICHIAMA UNA FUNZIONE PER STAMPARE LE ICONE CORRETTE
function iconGenerator(){
	if(selectIcons.value === all){
		createBox(icons);
	}else if(selectIcons.value === animals){
		createBox(animalsArr);
	}else if(selectIcons.value === foods){
		createBox(vegetablesArr);
	}else if(selectIcons.value === users){
		createBox(usersArr);
	}
}

// RICHIAMO LA FUNZIONE BASE CON TUTTI GLI OGGETTI DELL'ARRAY PER MOSTRARLA ALLìAPERTURA DELLA PAGINA
createBox(icons);

// FUNZIONE PER CREARE DIV DELLE ICONE E STAMPARLO IN PAGINA PER OGNI ELEMENTO DELL'ARRAY CON DETERMINATE CARATTERISTICHE
function createBox(array){
	iconDisplay.innerHTML = " ";
	for(let element of array){
		const cell = document.createElement("div");
		iconDisplay.append(cell);
		cell.classList.add("icon-box");
		cell.innerHTML = `<i class="${element.prefix}solid ${element.prefix}${element.name} style.color = ${element.color}"></i><p>${element.name}</p>`
	}
}

