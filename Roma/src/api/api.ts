import { PetResult } from "./api.props";
import { GET_PETS_URL } from "./api.urls";

export const getPets = async (): Promise<PetResult[]> => {
  return fetch(GET_PETS_URL)
    .then((response) => response.json())
    .then((result) => result);
};
