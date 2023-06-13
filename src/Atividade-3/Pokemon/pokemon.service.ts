import Pokemon from "./pokemon.schema";
import { writeFile, readFile } from "fs/promises";

class PokemonService {
  public async listPokemons() {
    try {
      const pokemons = await fetch("http://localhost:3000/pokemons-data");
      const data = await pokemons.json();
      const list = data.map((pokemon) => {
        return {
          name: pokemon.name,
          type: pokemon.types.map((type) => {
            return type.type.name;
          }),
          status: pokemon.stats.map((attribute) => {
            return `${attribute.stat.name} : ${attribute.base_stat}`;
          }),
          dex: pokemon.game_indices[9].game_index,
          height: pokemon.height,
          weight: pokemon.weight,
          moves: pokemon.moves
            .map((pokemonMoves) => pokemonMoves.move.name)
            .sort(() => 0.5 - Math.random())
            .slice(0, 4),
        };
      });

      return list;
    } catch (error) {
      console.error("Erro ao listar", error);
    }
  }

  public async savePokemons() {
    try {
      const pokemons = await this.listPokemons();
      await writeFile("pokemons.json", JSON.stringify(pokemons, null, 2));
      await Pokemon.insertMany(pokemons);

      return pokemons;
    } catch (error) {
      console.error("Erro ao Salvar", error);
    }
  }

  public async mapPokemons() {
    const pokemons = await readFile("localList.json", "utf-8");
    const mapPokemons = JSON.parse(pokemons).reduce(
      (acc, cur) => {
        acc[cur.type] = acc[cur.type] || [];
        acc[cur.type].push(cur);
        acc[cur.type].sort(
          (first, second) => first.dex - second.dex
        );

        return acc;
      }
    );
    console.log(typeof mapPokemons);

    await writeFile(
      "pokemonsPerType.json",
      JSON.stringify(mapPokemons, null, 2)
    );

    return mapPokemons;
  }

  public async findPokemonByType(type) {
    try {
      const pokemon = await Pokemon.find({ type: type });

      return pokemon;
    } catch (error) {
      console.error("Erro ao buscar", error);
    }
  }
  public async findPokemonByDex(id) {
    try {
      const pokemon = await Pokemon.find({ dex: id });

      return pokemon;
    } catch (error) {
      console.error("Erro ao buscar", error);
    }
  }
  public async findPokemonByName(name) {
    try {
      const pokemon = await Pokemon.find({ name: name });

      return pokemon;
    } catch (error) {
      console.error("Erro ao buscar", error);
    }
  }
}

export default new PokemonService();
