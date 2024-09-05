dom = document.getElementsByClassName("bd");
for (var i = 0; i < dom.length; i++) {
    let boutton = dom[i].children[1].children[0];
    console.log(boutton);
    let couleur1 = dom[i].children[0].children[0];
    let couleur2 = dom[i].children[0].children[1];
    let couleur3 = dom[i].children[0].children[2];
    console.log(couleur1)
    const couleurs = [
        "yellow", "white", "green", "blue", "red",
        "orange", "purple", "pink", "cyan", "magenta",
        "lime", "teal", "navy", "gray", "brown",
        "gold", "silver", "violet", "indigo", "coral"
    ];
    let indexCouleur = 0; // Index initial
    boutton.addEventListener("click", function(){

        if (boutton)
        {
            couleur1.style.backgroundColor = couleurs[indexCouleur];
            couleur2.style.backgroundColor = couleurs[indexCouleur];
            couleur3.style.backgroundColor = couleurs[indexCouleur];
            indexCouleur = (indexCouleur + 1) % couleurs.length;
        }

    });
}