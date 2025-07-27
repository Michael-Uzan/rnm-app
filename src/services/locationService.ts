import { Endpoint, RNM_BASE_URL } from "../config/apiConfig";
import { httpService } from "./httpService";

export const locationService = {
  getById,
};

const CHARACTER_BASE_URL = `${RNM_BASE_URL}${Endpoint.Location}`;

function getById(locationId: number) {
  return httpService.get(`${CHARACTER_BASE_URL}/${locationId}`);
}
