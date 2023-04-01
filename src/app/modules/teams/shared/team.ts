import {TeamEmployee} from "@app/modules/teams/shared/team-employees";

export interface Team {
  areaName: string;
  areaId: string;
  employees: TeamEmployee[],
  teamId: string;
  teamName: string;
}



