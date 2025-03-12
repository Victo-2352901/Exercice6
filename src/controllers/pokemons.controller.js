// À ajuster selon la structure
import pokemonsModel from "../models/pokemons.model.js";

const trouverUnPokemon = async (req, res) => {
    // Teste si le paramètre id est présent et valide
    if(!req.params.id || parseInt(req.params.id) <= 0){
        res.status(400);
        res.send({
            message: "L'id du pokemon est obligatoire et doit être supérieur à 0"
        });
        return;
    }

    const id = req.params.id;

    // Appel à la fonction getPokemon dans le modèle
    await pokemonsModel.getPokemon(id)
    // Si c'est un succès
    .then((pokemon) => {
        // S'il n'y a aucun résultat, on retourne un message d'erreur avec le code 404
        if (!pokemon[0]) {
            res.status(404);
            res.send({
                message: `pokemon introuvable avec l'id ${id}`
            });
            return;
        }
        // Sinon on retourne le premier objet du tableau de résultat car on ne devrait avoir qu'un pokemon par id
        res.send(pokemon);
    })
    // S'il y a eu une erreur au niveau de la requête, on retourne un erreur 500 car c'est du serveur que provient l'erreur.
    .catch((erreur) => {
        console.log('Erreur : ', erreur);
        res.status(500)
        res.send({
            message: "Erreur lors de la récupération du pokemon avec l'id " + id
        });
    });
};




const listePokemons = async (req, res) => {
    let page = req.query.page;
    const type = req.query.type;
    
    if(page == null){
        page = 1
    }
    
    res.send(page + " " + type);
};

const insererPokemon = async (req, res) => {
    let nom = req.body["nom"];
    res.send(nom);
}
export {
    trouverUnPokemon,
    listePokemons,
    insererPokemon
}