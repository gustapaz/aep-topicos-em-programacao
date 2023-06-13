import { Request, Response } from "express";
import pokemonService from "./pokemon.service";

class PokemonController {
  public async listPokemons() {
    const list = await pokemonService.listPokemons();

    return list;
  }

  public async savePokemons() {
    const pokemons = await pokemonService.savePokemons();

    return pokemons;
  }

  public async mapPokemons() {
    const map = await pokemonService.mapPokemons();

    return map;
  }

  public async findPokemonByType(req: Request, res: Response) {
    const pokemon = await pokemonService.findPokemonByType(req.params.type);

    return res.json(pokemon);
  }

  public async findPokemonByDex(req: Request, res: Response) {
    const pokemon = await pokemonService.findPokemonByDex(req.params.id);

    return res.json(pokemon);
  }

  public async findPokemonByName(req: Request, res: Response) {
    const pokemon = await pokemonService.findPokemonByName(req.params.name);
    
    return res.json(pokemon);
  }
}

export default new PokemonController();
