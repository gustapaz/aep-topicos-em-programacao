import Team from "./team.schema";
import { writeFile } from "fs/promises";

class TeamService {
  async createTeam(data) {
    try {
      const pokemons = data.team.map((pokemon) => {
        return { name: pokemon.name };
      });
      const NewTeam = {
        trainerName: data.trainerName,
        team: pokemons,
      };
      const team = await writeFile(
        "team.json",
        JSON.stringify(NewTeam, null, 2)
      );
      await Team.create({ trainerName: data.trainerName, team: data.team });

      return team;
    } catch (error) {
      console.error("Erro ao criar", error);
    }
  }

  async findTeamByName(name) {
    try {
      const team = await Team.findOne({ trainerName: name });

      return team;
    } catch (error) {
      console.error("Erro ao buscar", error);
    }
  }

  async findTeams() {
    try {
      const team = await Team.find();

      return team;
    } catch (error) {
      console.error("Erro ao buscar", error);
    }
  }

  async updateTeam(name, data) {
    try {
      const team = await Team.findOneAndUpdate(
        { name: name },
        { data },
        { new: true }
      );

      return team;
    } catch (error) {
      console.error("Erro ao atualizar", error);
    }
  }

  async deleteTeamByName(name) {
    try {
      const team = await Team.findOneAndDelete({ name: name });

      return team;
    } catch (error) {
      console.error("Erro ao deletar", error);
    }
  }
}

export default new TeamService();
