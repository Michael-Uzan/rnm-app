import { RNM_BASE_URL, Endpoint } from "../config";
import type { CharacterStatus } from "../interfaces/ICharacter";
import { httpService } from "./httpService";

export const characterService = {
  query,
  getById,
};

const CHARACTER_BASE_URL = `${RNM_BASE_URL}${Endpoint.Character}`;

function query({
  name,
  status,
  page = 1,
}: {
  name?: string;
  status?: CharacterStatus;
  page?: number;
}) {
  return httpService.get(`${CHARACTER_BASE_URL}`, {
    page,
    name,
    status,
  });
}

function getById(characterIds: number[]) {
  return httpService.get(`${CHARACTER_BASE_URL}/${characterIds}`);
}
