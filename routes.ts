import { Router } from "express";
import pokemonController from "./src/Atividade-3/Pokemon/pokemon.controller";
import teamController from "./src/Atividade-3/Team/team.controller";

const routes = Router();

// Pokemon
routes.get("/savePokemons", pokemonController.savePokemons);
routes.get("/mapPokemons", pokemonController.mapPokemons);
routes.get("/findPokemonByType/:type", pokemonController.findPokemonByType);
routes.get("/findPokemonByDex/:id", pokemonController.findPokemonByDex);
routes.get("/findPokemonByName/:name", pokemonController.findPokemonByName);

// Team
routes.get("/findTeams", teamController.findTeams);
routes.get("/findTeamByName/:name", teamController.findTeamByName);
routes.post("/createTeam", teamController.createTeam);
routes.put("/updateTeam/:name", teamController.updateTeam);
routes.delete("/deleteByName/:name", teamController.deleteTeamByName);

export default routes;
