
let motsecret;

let tableauMot = new Array(); //Tableau contenant les lettres du mot
let mots = new Array(); //Tableau contenant tous les mots 

let rate = 0; //Nombre d'erreurs
let letterFound = 0; //Nombre de lettre trouvee
let end = false; //true if the game is done

mots[0] = "PEKIN";
mots[1] = "HONGKONG";
mots[2] = "SHANGHAI";
mots[3] = "CHENGDU";
mots[4] = "WUHAN";
mots[5] = "NANKIN";
mots[6] = "SHENZHEN";


// On prend un mot au hasard en fonction de la seconde en cours
motSecret=mots[Math.floor(Math.random() * 7)];
let wordLength = motSecret.length;

function changeColor(key, color){
    key.style.backgroundColor = color;
}


function set(key){

    if(key.style.backgroundColor == "red" || end){return;} //Avoid the color changing of the keyboard when the game is over or when the key is already colored

    
    changeColor(key, "#26ee99");

    let trouve = false; //setting the key to false when the user click on it

    for(let i = 0; i < wordLength; i++){
        if(tableauMot[i].innerHTML == key.innerHTML){
            tableauMot[i].style.visibility = 'visible';
            trouve = true;
            letterFound++;
        }
    }

    if(!trouve){
        changeColor(key, "red");
        rate++;
        document.images['pendu'].src="images/pendu_"+rate+".jpg"; // On change l'image du pendu
        
        if(rate == 9){
            for(let i = 0; i < wordLength; i++){
                tableauMot[i].style.visibility = 'visible';
                end = true;
            }
        }
    }
    else if(letterFound == wordLength){
        end = true;
    }

}

function display_country(country){
    if(end == true){
        country.style.display = "block";
    }
}