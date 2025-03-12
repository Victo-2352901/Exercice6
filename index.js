import express from 'express';

import pokemonsRouter from "./src/routes/pokemon.route.js";

// Créer une application express
const app = express();

// Importer les middlewares
app.use(express.json());

app.use('/api/pokemons', pokemonsRouter);

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
