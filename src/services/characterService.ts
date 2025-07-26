import { RNM_BASE_URL, Endpoint } from "../config";
import { httpService } from "./httpService";

export const characterService = {
  query,
  getById,
};

export enum Status {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "unknown",
}
const CHARACTER_BASE_URL = `${RNM_BASE_URL}/${Endpoint.Character}`;

function query({ name, status }: { name?: string; status?: Status }) {
  const filterByName = name ? `/?name=${name}` : "";
  const filterByStatus = status ? `&status=${status}` : "";

  return httpService.get(
    `${CHARACTER_BASE_URL}${filterByName}${filterByStatus}`
  );
}

function getById(characterIds: number[]) {
  return httpService.get(`${CHARACTER_BASE_URL}/${characterIds}`);
}
