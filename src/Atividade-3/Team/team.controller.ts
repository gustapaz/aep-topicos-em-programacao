import teamService from "./team.service";
import { Request, Response } from "express";

class TeamController {
  public async findTeams() {
    const team = await teamService.findTeams();

    return team;
  }

  public async findTeamByName(req: Request, res: Response) {
    const team = await teamService.findTeamByName(req.params.name);

    return res.json(team);
  }

  public async createTeam(req: Request, res: Response) {
    const team = await teamService.createTeam(req.body);

    return res.json(team);
  }

  public async updateTeam(req: Request, res: Response) {
    const team = await teamService.updateTeam(req.params.name, req.body);

    return res.json(team);
  }

  public async deleteTeamByName(req: Request, res: Response) {
    const team = await teamService.deleteTeamByName(req.params.name);

    return res.json(team);
  }
}

export default new TeamController();
