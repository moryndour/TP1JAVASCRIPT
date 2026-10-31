//Exercice1
function CalculerMoyenne(note1,note2,note3){
    let moyenne=(note1+note2+note3)/3
    return moyenne

}
let maMoyenne=CalculerMoyenne(14,13,12)
console.log(maMoyenne)
function EstAdmis(maMoyenne){
    if(maMoyenne>=10){
       return true
    }
}
function calculerPrixTTC(prixHT,tauxTVA=0.18){
    let TTC=prixHT*(1+tauxTVA)
    return TTC
}
console.log(calculerPrixTTC(15000))
const convertirEnMinutes=(heure)=>{
    return heure*60
}
console.log(convertirEnMinutes(3))
//Exercice2
const etudiant = { 
     id: 2026, 
      nom: "Ndiaye", 
       prenom: "Moussa", 
        filiere: "IAGE",  
        niveau: "L2",  
        ville: "Dakar"
     }; 
const resultats = [15, 11, 17, 13, 16];
const{nom,prenom,filiere}=etudiant
console.log(nom,prenom,filiere)
const{niveau:classe}=etudiant
console.log(classe)
const[premier,deuxiemme,,,derniere]=resultats
console.log(premier,deuxiemme,derniere)
const[premiere,,troisieme]=resultats
console.log(premiere,troisieme)
const{email="moryndour@gmail.com"}=etudiant
console.log(email)
console.log("Bonjour cest "+nom+" "+prenom+" dans la filiere de  "+filiere+ " en "+classe)
//Exercice 3:
const groupeA = ["Awa", "Moussa", "Fatou"];
const groupeB = ["Ibra", "Mariama"]; 
const etudiantBase = { nom: "Diop", filiere: "IAGE", niveau: "L2" };
const tousLesEtudiants=[...groupeA,...groupeB];
console.log(tousLesEtudiants)
const copiegroupeA=[...groupeA,"Cheikh"]
console.log(groupeA)
console.log(copiegroupeA)
const etudiantComplet={
    ...etudiantBase,
    age:22,
    ville:"Dakar"
};
console.log(etudiantComplet)
const CopieEtudiantBase={
    ...etudiantBase,
    niveau:"L3"
}
console.log(etudiantBase)
console.log(CopieEtudiantBase)
//Question5
//Exercice4
function additionner(...nombres){
    let somme=0
    for(let nombre of nombres ){
        somme+=nombre
    }
    return somme;
};
function afficherPremierEtAutres(premier,...autres){
    console.log(premier) 
    console.log(autres) 
}
function  creerFiche(nom,filiere,...competence){
    console.log(nom)
    console.log(filiere)
    console.log(competence)
}
console.log(additionner(2, 3));          
console.log(additionner(1, 2, 3, 4, 5)); 
console.log(creerFiche("Awa", "IAGE", "JavaScript", "SQL"));
//5 parceque il recupere tous les parametres restantes
//Exercice5
const etudiantL2 = {
    id: 104,
    prenom: "Aminata",
    nom: "Fall",
    notes: [13, 16, 12],
    filiere: "IAGE"
};

function extraireIdentite(etudiant) {
    const { prenom, nom, filiere } = etudiant

    return {
        prenom,
        nom,
        filiere
    };
}

function calculerMoyenneNotes(notes) {
    if (notes.length === 0) {
        return 0;
    }

    let somme = 0;

    for (let note of notes) {
        somme += note;
    }

    return somme / notes.length
}

function ajouterNote(etudiant, nouvelleNote) {
    return {
        ...etudiant,
        notes: [...etudiant.notes, nouvelleNote]
    };
}

function creerResume(etudiant, ...options) {
    return {
        identite: extraireIdentite(etudiant),
        moyenne: calculerMoyenneNotes(etudiant.notes),
        options: options
    };
}

console.log(extraireIdentite(etudiantL2));

console.log(calculerMoyenneNotes(etudiantL2.notes));

const nouvelEtudiant = ajouterNote(etudiantL2, 18);
console.log(nouvelEtudiant);

console.log(creerResume(etudiantL2, "Avec mention", "Semestre 1"));

console.log(etudiantL2);
console.log(etudiantL2.notes);

console.log(etudiantL2.notes.length === 3);
console.log(etudiantL2.notes !== nouvelEtudiant.notes);
// 1. return permet de retourner une valeur réutilisable dans le programme,
// tandis que console.log() sert uniquement à afficher une valeur dans la console.

// 2. Le destructuring d'un objet utilise {} et récupère les valeurs grâce
// aux noms des propriétés. Celui d'un tableau utilise [] et récupère les valeurs
// selon leur position.

// 3. Spread (...) permet de décomposer les éléments pour copier ou fusionner.
// Exemple : const copie = [...notes];
// Rest (...) permet de regrouper plusieurs éléments dans un tableau.
// Exemple : function afficher(...nombres) {}

// 4. Créer une copie avec spread permet de conserver les données originales
// sans les modifier et d'éviter les modifications involontaires.

// 5. Si deux objets possèdent une propriété avec le même nom,
// la dernière valeur déclarée remplace la précédente.


