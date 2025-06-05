let bouton = document.querySelector("#nouvelle-replique");
let affichage = document.querySelector("#affichage-replique");


bouton.addEventListener("click", () => {
   affichage.innerHTML = "";
fetch(`https://kaamelott.xyz/api/v1/quote/random`).then((response) => {
    return response.json();
}).then((data) => {
    dipslayCard(data);
})
})



function dipslayCard (data){
    let card = document.createElement("div");
    let cardBody = document.createElement("div");

    let auteur = document.createElement("h5");
    auteur.innerHTML = data.author;
    cardBody.insertAdjacentElement("beforeend", auteur);

    let replique = document.createElement("p");
    replique.innerHTML = data.content;
    cardBody.insertAdjacentElement("beforeend", replique);

    card.insertAdjacentElement("beforeend", cardBody);
    affichage.insertAdjacentElement("beforeend", card);

    
}