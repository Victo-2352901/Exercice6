// À ajuster selon la structure
import sql from '../config/db_pg.js';

const getPokemon = (id) => {
    return new Promise((resolve, reject) => {

        const requete = 'SELECT id, nom, type_primaire, type_secondaire, pv, attaque, defense FROM pokemon WHERE id = $1';
        const parametres = [id];

        sql.query(requete, parametres, (erreur, resultat) => {
            if (erreur) {
                console.log('Erreur sqlState : ' + erreur);
                console.log(`Erreur sqlState ${erreur.sqlState} : ${erreur.sqlMessage}`);
                reject(erreur);
            }

            resolve(resultat.rows);
        });
    });
};



export default {
    getPokemon
}