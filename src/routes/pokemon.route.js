import sql from '../config/db_pg.js';

// Nous avons besoin d'importer le module express pour utiliser le Router
import express from 'express';
import { trouverUnPokemon, listePokemons, insererPokemon } from '../controllers/pokemons.controller.js';
// Nous créons un objet router qui va nous permettre de gérer les routes
const router = express.Router();  

router.get('/liste', listePokemons);

router.get('/:id', trouverUnPokemon);

router.post('/', insererPokemon);

export default router;